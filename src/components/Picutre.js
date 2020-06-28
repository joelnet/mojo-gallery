import React from 'react'
import { cleanAttribute as clean } from '../lib/clean'

export const Picture = ({ jpg, webp, ...attributes }) => (
  <picture {...attributes}>
    <source data-srcset={clean(webp)} type="image/webp" {...attributes} />
    <source data-srcset={clean(jpg)} type="image/jpeg" {...attributes} />
    <img data-src={clean(jpg)} {...attributes} />
  </picture>
)
