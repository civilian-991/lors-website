import { GoogleGenAI } from "@google/genai";
import mime from "mime";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("Error: GEMINI_API_KEY environment variable is not set.");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const DOWNLOADS_DIR =
  "/Users/moe/Downloads/bluedge_lor-product-pictures_2026-02-06_1437";
const OUTPUT_DIR = path.resolve(__dirname, "../public/images/products");

// Mapping: download filename -> output filename (without extension)
// zoo.png is skipped per plan
const FILE_MAP: Record<string, string> = {
  "abu cracker.png": "abu-cracker",
  "chips stars.png": "chip-stars",
  "coconutty.png": "coconutty",
  "creamy smiles-banana.png": "creamy-smiles-banana",
  "creamy smiles-chocolate.png": "creamy-smiles-chocolate",
  "creamy smiles-orange.png": "creamy-smiles-orange",
  "creamy smiles-strawberry.png": "creamy-smiles-strawberry",
  "creamy smiles-vanilla.png": "creamy-smiles-vanilla",
  "custard creams.png": "custard-creams",
  "digestive classic.png": "digestive-classic",
  "donut-chocolate.png": "yumyum-chocolate",
  "donut-strawberry.png": "yumyum-strawberry",
  "donut-vanilla.png": "yumyum-vanilla",
  "ginger nuts.png": "ginger-nuts",
  "glucose.png": "glucose",
  "i love salt.png": "i-love-salt",
  "joy cake-chocolate.png": "joy-cake-chocolate",
  "joy cake-strawberry.png": "joy-cake-strawberry",
  "joy cake-vanilla.png": "joy-cake-vanilla",
  "kidz.png": "kidz",
  "mega bite.png": "mega-bite",
  "milky shortbread biscuit.png": "milky",
  "mr cracker.png": "mr-cracker",
  "power cake-banana.png": "power-cake-banana",
  "power cake-butter.png": "power-cake-butter",
  "power cake-coconut.png": "power-cake-coconut",
  "power cake-peanut butter.png": "power-cake-peanut-butter",
  "spongy chocolate.png": "spongy-chocolate",
  "spongy vanilla.png": "spongy-vanilla",
  "two friends.png": "two-friends",
  "wafemax.png": "wafemax",
  "waferio milk.png": "waferio-milk",
  "waferio-banana.png": "waferio-banana",
  "waferio-chocolate.png": "waferio-chocolate",
  "waferio-orange.png": "waferio-orange",
  "waferio-strawberry.png": "waferio-strawberry",
};

const PROMPT = `Look at this product packaging design. Generate a realistic 3D product render showing the finished packaged product as it would appear on a store shelf. Show it at a slight angle with professional studio lighting. The product must be clearly visible with NO background - use a fully transparent background. Make it photorealistic. Do not show the flat/unfolded packaging - show the assembled 3D package. Output as PNG with transparent background.`;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateImage(
  inputPath: string,
  outputName: string
): Promise<boolean> {
  const outputPath = path.join(OUTPUT_DIR, `${outputName}.png`);

  // Skip if already generated
  if (fs.existsSync(outputPath)) {
    const stats = fs.statSync(outputPath);
    if (stats.size > 1000) {
      console.log(`  [SKIP] ${outputName}.png already exists (${stats.size} bytes)`);
      return true;
    }
  }

  try {
    const imageBytes = fs.readFileSync(inputPath);
    const mimeType = mime.getType(inputPath) || "image/png";
    const base64Image = imageBytes.toString("base64");

    const config = {
      imageConfig: {
        aspectRatio: "1:1" as const,
        imageSize: "4K" as const,
      },
      responseModalities: ["IMAGE", "TEXT"],
      tools: [{ googleSearch: {} }],
    };

    const contents = [
      {
        role: "user" as const,
        parts: [
          {
            inlineData: {
              mimeType,
              data: base64Image,
            },
          },
          { text: PROMPT },
        ],
      },
    ];

    const response = await ai.models.generateContentStream({
      model: "gemini-3-pro-image-preview",
      config,
      contents,
    });

    let saved = false;
    for await (const chunk of response) {
      if (
        !chunk.candidates ||
        !chunk.candidates[0].content ||
        !chunk.candidates[0].content.parts
      ) {
        continue;
      }

      const part = chunk.candidates[0].content.parts[0];
      if (part.inlineData) {
        const ext =
          mime.getExtension(part.inlineData.mimeType || "") || "png";
        const buffer = Buffer.from(part.inlineData.data || "", "base64");
        // Always save as .png regardless of returned mime type
        fs.writeFileSync(outputPath, buffer);
        console.log(
          `  [OK] Generated ${outputName}.png (${buffer.length} bytes, ${ext})`
        );
        saved = true;
      } else if (part.text) {
        // Log any text response from the model
        console.log(`  [TEXT] ${part.text.substring(0, 100)}`);
      }
    }

    if (!saved) {
      console.error(`  [ERROR] No image in response for ${outputName}`);
      return false;
    }
    return true;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`  [ERROR] ${outputName}: ${message}`);
    return false;
  }
}

async function main() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const entries = Object.entries(FILE_MAP);
  console.log(`\nGenerating 3D renders for ${entries.length} products...\n`);

  let success = 0;
  let failed = 0;
  const failures: string[] = [];

  for (let i = 0; i < entries.length; i++) {
    const [inputFile, outputName] = entries[i];
    const inputPath = path.join(DOWNLOADS_DIR, inputFile);

    console.log(
      `[${i + 1}/${entries.length}] ${inputFile} -> ${outputName}.png`
    );

    if (!fs.existsSync(inputPath)) {
      console.error(`  [ERROR] Source file not found: ${inputPath}`);
      failed++;
      failures.push(inputFile);
      continue;
    }

    const ok = await generateImage(inputPath, outputName);
    if (ok) {
      success++;
    } else {
      failed++;
      failures.push(inputFile);
    }

    // Rate limit: wait between requests (skip delay on last item)
    if (i < entries.length - 1) {
      await delay(5000);
    }
  }

  console.log(`\n--- Done ---`);
  console.log(`Success: ${success}/${entries.length}`);
  console.log(`Failed:  ${failed}/${entries.length}`);
  if (failures.length > 0) {
    console.log(`\nFailed files:`);
    failures.forEach((f) => console.log(`  - ${f}`));
  }
}

main();
