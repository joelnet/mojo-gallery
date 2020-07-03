import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'

const fileName = path.join(__dirname, '../config.yml')
const rawFile = fs.readFileSync(fileName, 'utf8')

export const config = yaml.safeLoad(rawFile)
