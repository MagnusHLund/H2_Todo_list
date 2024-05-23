import React from 'react'
import './Image.scss'

interface ImageProps {
  src: string
  alt: string
  className?: string
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={`image ${className}`} />
}

export default Image
