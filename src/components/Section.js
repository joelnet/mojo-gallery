import React from 'react'
import { Gallery } from './Gallery'
import { Picture } from './Picutre'
import { Subtitle } from './Subtitle'
import { GalleryImageContainer } from './GalleryImageContainer'

export const Section = ({ title, content, images }) => (
  <>
    <Subtitle>{title}</Subtitle>
    {content && <div>{content}</div>}
    <Gallery>
      {images.jpgt.files.map((jpgt, index) => (
        <GalleryImageContainer key={`${jpgt}-${index}`}>
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
        </GalleryImageContainer>
      ))}
    </Gallery>
  </>
)
