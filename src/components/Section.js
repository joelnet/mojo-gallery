import React from 'react'
import { Picture } from './Picutre'

export const Section = ({ title, content, images }) => (
  <>
    <h2 className="text-3xl my-4 text-black">{title}</h2>
    {content && <div>{content}</div>}
    <div className="flex flex-wrap -mx-2">
      {images.jpgt.files.map((jpgt, index) => (
        <div key={`${jpgt}-${index}`} className="flex-none p-1 md:w-1/4 w-1/2">
          <label htmlFor={`${jpgt}-${index}`}>
            <Picture
              className="cursor-pointer"
              jpg={jpgt}
              webp={images.webpt.files[index]}
            />
          </label>
          <input
            type="checkbox"
            id={`${jpgt}-${index}`}
            name={`${jpgt}-${index}`}
            className="hidden toggle"
          />
          <div className="flex content-center fixed top-0 left-0 h-full w-full bg-black hidden popup">
            <div className="flex content-center justify-center flex-wrap w-full h-full">
              <label htmlFor={`${jpgt}-${index}`}>
                <Picture
                  className="cursor-pointer max-w-screen max-h-screen"
                  jpg={images.jpg.files[index]}
                  webp={images.webp.files[index]}
                />
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
)
