import { Link } from 'react-router-dom'
import ResponsiveImage from '../ui/ResponsiveImage'

function ServiceCard({ service, description, icon: Icon, image, imageAlt, index, featured = false }) {
  const indexLabel = String(index + 1).padStart(2, '0')

  if (featured && image) {
    return (
      <Link to={service.route} className="service-feature-card">
        <div className="service-feature-card__media">
          <ResponsiveImage image={image} alt={imageAlt} framed />
        </div>
        <div className="service-feature-card__content">
          <span className="service-feature-card__index">{indexLabel}</span>
          <span className="icon-badge" aria-hidden="true">
            <Icon size={20} />
          </span>
          <span className="service-feature-card__name">{service.name}</span>
          <p className="service-feature-card__description">{description}</p>
          <span className="service-feature-card__link">View Service &rarr;</span>
        </div>
      </Link>
    )
  }

  return (
    <Link to={service.route} className="service-card-compact">
      <span className="service-card-compact__index">{indexLabel}</span>
      <span className="icon-badge icon-badge--sm" aria-hidden="true">
        <Icon size={18} />
      </span>
      <span className="service-card-compact__name">{service.name}</span>
      <p className="service-card-compact__description">{description}</p>
      <span className="service-card-compact__link">View Service &rarr;</span>
    </Link>
  )
}

export default ServiceCard
