import React from 'react'
import { cleanAttribute as clean } from '../lib/clean'

export const Picture = ({ jpg, webp, ...attributes }) => (
  <picture {...attributes}>
    <source srcSet={clean(webp)} type="image/webp" />
    <source srcSet={clean(jpg)} type="image/jpeg" />
    <img src={clean(jpg)} />
  </picture>
)
