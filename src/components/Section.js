import React from 'react'
import { Gallery } from './Gallery'
import { Subtitle } from './Subtitle'
import { TextBlock } from './TextBlock'

export const Section = ({ title, content, images }) => (
	<>
		<Subtitle>{title}</Subtitle>
		<TextBlock>{content}</TextBlock>
		<Gallery images={images} />
	</>
)
