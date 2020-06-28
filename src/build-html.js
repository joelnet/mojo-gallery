import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { App } from './components/App'
import { config } from './lib/config'

const outputFilePath = path.join(__dirname, '../public/index.html')

const staticMarkup = ReactDOMServer.renderToStaticMarkup(<App {...config} />)
const html = `<!DOCTYPE html>\n${staticMarkup}`

fs.writeFileSync(outputFilePath, html)

console.log(`Wrote HTML to ${outputFilePath}`)
