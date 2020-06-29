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
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      grid-gap: 0.5rem;
    }
    @media only screen and (max-width: 768px) {
      .gallery {
        grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
      }
    }
    .gallery .thumb source, .gallery .thumb img {
      height: 100%;
      width: 100%;
      object-fit: cover; 
    }
    .gallery .thumb source[data-srcset], .gallery .thumb img[data-src] {
      height: 150px
    }
  `}</style>
    {children}
    <script src="/main.js"></script>
  </head>
)
