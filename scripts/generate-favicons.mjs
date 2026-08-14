import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

import sharp from "sharp"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const source = path.join(root, "public/images/brand/tvc-favicon-512.png")
const appDir = path.join(root, "app")

async function pngBuffer(size) {
  return sharp(source)
    .resize(size, size, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toBuffer()
}

function buildIco(pngImages) {
  const count = pngImages.length
  const headerSize = 6 + count * 16
  let offset = headerSize
  const entries = []

  for (const png of pngImages) {
    const width = png.size >= 256 ? 0 : png.size
    const height = png.size >= 256 ? 0 : png.size
    entries.push({
      width,
      height,
      png: png.buffer,
      offset,
    })
    offset += png.buffer.length
  }

  const totalSize = offset
  const output = Buffer.alloc(totalSize)

  output.writeUInt16LE(0, 0)
  output.writeUInt16LE(1, 2)
  output.writeUInt16LE(count, 4)

  let directoryOffset = 6
  for (const entry of entries) {
    output.writeUInt8(entry.width, directoryOffset)
    output.writeUInt8(entry.height, directoryOffset + 1)
    output.writeUInt8(0, directoryOffset + 2)
    output.writeUInt8(0, directoryOffset + 3)
    output.writeUInt16LE(1, directoryOffset + 4)
    output.writeUInt16LE(32, directoryOffset + 6)
    output.writeUInt32LE(entry.png.length, directoryOffset + 8)
    output.writeUInt32LE(entry.offset, directoryOffset + 12)
    directoryOffset += 16
  }

  let imageOffset = headerSize
  for (const entry of entries) {
    entry.png.copy(output, imageOffset)
    imageOffset += entry.png.length
  }

  return output
}

async function main() {
  const png16 = await pngBuffer(16)
  const png32 = await pngBuffer(32)
  const png180 = await pngBuffer(180)

  await fs.writeFile(path.join(appDir, "icon.png"), png32)
  await fs.writeFile(path.join(appDir, "apple-icon.png"), png180)
  await fs.writeFile(
    path.join(appDir, "favicon.ico"),
    buildIco([
      { size: 16, buffer: png16 },
      { size: 32, buffer: png32 },
    ]),
  )

  console.log("Generated app/favicon.ico, app/icon.png, app/apple-icon.png")
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
