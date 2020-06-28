import React from 'react'

export const Head = ({ title, children }) => (
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <link
      href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <style type="text/css">{`
    .toggle:checked + .popup {
      display: flex;
    }
  `}</style>
    {children}
    <script src="/main.js"></script>
  </head>
)
