import { Link } from 'react-router-dom'
import { services } from '../../data/services'

function RelatedServices({ currentServiceId }) {
  const related = services.filter((service) => service.id !== currentServiceId)

  if (!related.length) {
    return null
  }

  return (
    <div className="related-services">
      <p className="related-services__title">Related Services</p>
      <ul className="related-services__list">
        {related.map((service) => (
          <li key={service.id}>
            <Link to={service.route}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RelatedServices
