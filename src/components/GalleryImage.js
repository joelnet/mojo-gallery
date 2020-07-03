import React from 'react'
import { Picture } from './Picutre'
import { GalleryOverlay } from './GalleryOverlay'

export const GalleryImage = ({ jpgt, webpt, jpg, webp, className = '' }) => (
	<div className={`img-container ${className}`}>
		<label htmlFor={jpgt}>
			<Picture className="cursor-pointer thumb" jpg={jpgt} webp={webpt} />
		</label>
		<GalleryOverlay id={jpgt}>
			<Picture
				className="cursor-pointer max-w-screen max-h-screen"
				jpg={jpg}
				webp={webp}
				loading="lazy"
			/>
		</GalleryOverlay>
	</div>
)
