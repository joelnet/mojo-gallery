import React from 'react'
import { Section } from './Section'
import glob from 'glob'
import path from 'path'

const publicPath = path.join(process.cwd(), 'public')

const getFiles = (type, section) => {
	const imagePath = path.join(publicPath, 'images', type, section)
	return glob
		.sync(`${imagePath}/*.*`)
		.map((file) => file.substring(publicPath.length + 1))
}

export const SectionList = ({ sections }) =>
	Object.entries(sections).map(([key, section]) => {
		const images = {
			jpg: { files: getFiles('jpg', key) },
			jpgt: { files: getFiles('jpgt', key) },
			webp: { files: getFiles('webp', key) },
			webpt: { files: getFiles('webpt', key) },
		}
		return <Section key={key} {...section} images={images} />
	})
