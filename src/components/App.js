import React from 'react'
import { Document } from './Document'
import { Head } from './Head'
import { Body } from './Body'
import { Container } from './Container'
import { Title } from './Title'
import { TextBlock } from './TextBlock'
import { SectionList } from './SectionList'

export const App = ({ title, description, sections }) => (
	<Document>
		<Head title={title} />
		<Body>
			<Container>
				<Title>{title}</Title>
				<TextBlock>{description}</TextBlock>
				<SectionList sections={sections} />
			</Container>
		</Body>
	</Document>
)
