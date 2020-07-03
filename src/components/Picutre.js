import React from 'react'
import { cleanAttribute as clean } from '../lib/clean'

export const Picture = ({ jpg, webp, loading, ...attributes }) => {
	const isLazy = loading === 'lazy'
	const webpOptions = {
		[isLazy ? 'srcSet' : 'data-srcset']: clean(webp),
	}
	const jpegOptions = {
		[isLazy ? 'srcSet' : 'data-srcset']: clean(jpg),
	}
	const imgOptions = {
		[isLazy ? 'src' : 'data-src']: clean(jpg),
	}

	return (
		<picture {...attributes}>
			<source {...webpOptions} type="image/webp" {...attributes} />
			<source {...jpegOptions} type="image/jpeg" {...attributes} />
			<img {...imgOptions} {...attributes} loading="lazy" />
		</picture>
	)
}
