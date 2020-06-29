import React from 'react'

export const GalleryImageContainer = ({ children, className = '' }) => (
  <div className={`img-container ${className}`}>{children}</div>
)
