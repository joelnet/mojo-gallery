import React from 'react'
import ReactDOMServer from 'react-dom/server'

const HelloWorld = () => <div>Hello World</div>

const output = ReactDOMServer.renderToStaticMarkup(<HelloWorld />)

console.log(output)
