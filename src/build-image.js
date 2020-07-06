import '@babel/polyfill'
import glob from 'glob'
import mkdirp from 'mkdirp'
import path from 'path'
import sharp from 'sharp'
import { promisify } from 'util'
import { config } from './config'
import cluster from 'cluster'

const globp = promisify(glob)
const mediaPath = path.join(process.cwd(), 'media')
const forks = require('os').cpus().length

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

		mkdirp.sync(path.dirname(fullOutputPath))
		await resized.toFile(fullOutputPath)
		console.log(`[${cluster.worker.id}] saving file: ${fullOutputPath}`)
	} catch (err) {
		console.error(`[${cluster.worker.id}] Exception for file: ${file}`)
		console.error(err)
	}
}

const main = async () => {
	const files = await globp(`${mediaPath}/**/*.jpg`)
	const clusterFiles = files.filter(
		(_, index) => index % forks === cluster.worker.id - 1
	)

	for (const file of clusterFiles) {
		await Promise.all([
			resizeImage(file, 'public/images/jpg', 'jpg', config.images.full),
			resizeImage(file, 'public/images/webp', 'webp', config.images.full),
			resizeImage(file, 'public/images/jpgt', 'jpg', config.images.thumb),
			resizeImage(file, 'public/images/webpt', 'webp', config.images.thumb),
		])
	}
}

if (cluster.isMaster) {
	console.log(`[${process.pid}] I am master`)

	for (let i = 0; i < forks; i++) {
		cluster.fork()
	}
} else {
	console.log(`[${process.pid}] I am worker ${cluster.worker.id}`)
	main()
		.then(() => process.exit(0))
		.catch((err) => {
			console.error(err)
			process.exit(1)
		})
}
