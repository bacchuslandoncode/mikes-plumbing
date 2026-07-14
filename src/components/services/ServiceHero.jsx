import ResponsiveImage from '../ui/ResponsiveImage'

function ServiceHero({ eyebrow, title, description, image, imageAlt, priority = false }) {
  return (
    <div className={`service-hero ${!image ? 'service-hero--text-only' : ''}`.trim()}>
      <div className="service-hero__content">
        <p className="service-hero__eyebrow">{eyebrow}</p>
        <h1 className="service-hero__title">{title}</h1>
        {description ? <p className="service-hero__description">{description}</p> : null}
      </div>
      {image ? (
        <div className="service-hero__media">
          <ResponsiveImage image={image} alt={imageAlt} framed priority={priority} />
        </div>
      ) : null}
    </div>
  )
}

export default ServiceHero
