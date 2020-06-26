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

export const SectionManager = ({ sections }) =>
  Object.entries(sections).map(([key, section]) => {
    const images = {
      jpg: getFiles('jpg', key),
      jpgt: getFiles('jpgt', key),
      webp: getFiles('webp', key),
      webpt: getFiles('webpt', key),
    }
    return <Section key={key} {...section} images={images} />
  })
