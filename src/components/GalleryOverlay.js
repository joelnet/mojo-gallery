import React from 'react'

export const GalleryOverlay = ({ id, children }) => (
	<>
		<input type="checkbox" id={id} name={id} className="hidden toggle" />
		<div className="flex content-center fixed top-0 left-0 h-full w-full bg-black hidden popup">
			<label htmlFor={id} className="w-full h-full">
				<div className="flex content-center justify-center flex-wrap w-full h-full">
					{children}
				</div>
			</label>
		</div>
	</>
)
