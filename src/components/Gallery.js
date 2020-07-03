import React from 'react'
import { GalleryImage } from './GalleryImage'

export const Gallery = ({ images }) => (
	<div className="gallery -mx-4 sm:mx-0">
		{images.jpgt.files.map((jpgt, index) => (
			<GalleryImage
				key={`${jpgt}-${index}`}
				jpgt={jpgt}
				webpt={images.webpt.files[index]}
				jpg={images.jpg.files[index]}
				webp={images.webp.files[index]}
			/>
		))}
	</div>
)
