import React, { useState } from 'react'

const FALLBACK_IMG_SRC = '/ppt/logo.png'  // ✅ OUR REAL LOGO

export function ImageWithFallback(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <img
      src={FALLBACK_IMG_SRC}
      alt={alt || 'EDUPROVA Logo'}
      className={className}
      style={style}
      {...rest}
    />
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={handleError}
    />
  )
}
