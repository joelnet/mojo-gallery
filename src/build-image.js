import '@babel/polyfill'
import fs from 'fs'
import glob from 'glob'
import mkdirp from 'mkdirp'
import path from 'path'
import sharp from 'sharp'
import { promisify } from 'util'
import { config } from './lib/config'

const globp = promisify(glob)
const mediaPath = path.join(process.cwd(), 'media')
const metaFilePath = path.join(process.cwd(), 'public/metadata.json')

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

		// get metadata
		const metadata = await image.metadata()

		// write file
		mkdirp.sync(path.dirname(fullOutputPath))
		await resized.toFile(fullOutputPath)
		console.log(`saving file: ${fullOutputPath}`)

		return {
			height: metadata.height,
			width: metadata.width,
			file: fullOutputPath,
		}
	} catch (err) {
		console.error(`Exception for file: ${file}`)
		console.error(err)
	}
}

const main = async () => {
	const files = await globp(`${mediaPath}/**/*.jpg`)
	const meta = {}

	for (const file of files) {
		const metadatas = await Promise.all([
			resizeImage(file, 'public/images/jpg', 'jpg', config.images.full),
			resizeImage(file, 'public/images/webp', 'webp', config.images.full),
			resizeImage(file, 'public/images/jpgt', 'jpg', config.images.thumb),
			resizeImage(file, 'public/images/webpt', 'webp', config.images.thumb),
		])

		Object.assign(meta, {
			[metadatas[2].file]: metadatas[2],
			[metadatas[3].file]: metadatas[3],
		})
	}

	fs.writeFileSync(metaFilePath, JSON.stringify(meta))
	console.log(`Wrote ${metaFilePath}`)
}

main()
	.then(() => process.exit(0))
	.catch((err) => {
		console.error(err)
		process.exit(1)
	})
