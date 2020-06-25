import sharp from 'sharp'
import glob from 'glob'
import path from 'path'
import { promisify } from 'util'
import mkdirp from 'mkdirp'

const globp = promisify(glob)
const resizeOptions = {
  full: [1200, 1200, { fit: 'inside' }],
  thumb: [320, 320, { fit: 'inside' }],
}
const mediaPath = path.join(process.cwd(), 'media')

/**
 * Resize and Save Image
 */
const resizeImage = async (file, outpath, extension, resizeOptions) => {
  try {
    const extname = path.extname(file)
    const filePrefix = file.substring(
      mediaPath.length + 1,
      file.length - extname.length
    )
    const fullOutputPath = `${path.join(
      process.cwd(),
      outpath,
      filePrefix
    )}.${extension}`

    const image = await sharp(file)
    const resized = image.rotate().resize(...resizeOptions)

    // write file
    mkdirp.sync(path.dirname(fullOutputPath))
    await resized.toFile(fullOutputPath)
    console.log(`saving file: ${fullOutputPath}`)
  } catch (err) {
    console.error(`Exception for file: ${file}`)
    console.error(err)
  }
}

const main = async () => {
  const files = await globp(`${mediaPath}/**/*.jpg`)
  for (const file of files) {
    await Promise.all([
      resizeImage(file, 'public/images/jpg', 'jpg', resizeOptions.full),
      resizeImage(file, 'public/images/webp', 'webp', resizeOptions.full),
      resizeImage(file, 'public/images/jpgt', 'jpg', resizeOptions.thumb),
      resizeImage(file, 'public/images/webpt', 'webp', resizeOptions.thumb),
    ])
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
