import { Link } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import { business } from '../../data/business'
import { services } from '../../data/services'
import PhoneLink from '../ui/PhoneLink'
import PageContainer from '../ui/PageContainer'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <PageContainer>
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <span className="site-footer__wordmark">Mike's Plumbing</span>
            {business.market.status === 'verified' && business.market.value ? (
              <p className="site-footer__market">{business.market.value}</p>
            ) : null}
            <PhoneLink className="site-footer__phone" />
          </div>

          <div className="site-footer__column">
            <p className="site-footer__heading">Site</p>
            <ul>
              {navigation.map((item) => (
                <li key={item.route}>
                  <Link to={item.route}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column">
            <p className="site-footer__heading">Services</p>
            <ul>
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={service.route}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column">
            <p className="site-footer__heading">Get Started</p>
            <p className="site-footer__cta-text">Reach out and we'll get back to you about your plumbing needs.</p>
            <Link to="/contact" className="btn btn--secondary btn--secondary-onDark">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>&copy; {year} Mike's Plumbing. All rights reserved.</p>
        </div>
      </PageContainer>
    </footer>
  )
}

export default Footer
