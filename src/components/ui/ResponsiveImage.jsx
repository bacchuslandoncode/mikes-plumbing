function ResponsiveImage({
  image,
  alt,
  objectPosition = 'center',
  framed = false,
  className = '',
  priority = false,
  sizes,
  aspectRatio,
}) {
  if (!image) {
    return null
  }

  const { src, width, height } = image

  return (
    <div
      className={`responsive-image ${framed ? 'responsive-image--framed' : ''} ${className}`.trim()}
      style={{ aspectRatio: aspectRatio || (width && height ? `${width} / ${height}` : undefined) }}
    >
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        style={{ objectPosition }}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        sizes={sizes}
      />
    </div>
  )
}

export default ResponsiveImage
