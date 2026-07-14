import { Link } from 'react-router-dom'
import { business } from '../../data/business'
import PhoneLink from '../ui/PhoneLink'

function UtilityBar() {
  return (
    <div className="utility-bar">
      <div className="utility-bar__inner">
        {business.market.status === 'verified' && business.market.value ? (
          <span className="utility-bar__market">{business.market.value}</span>
        ) : (
          <span />
        )}

        <div className="utility-bar__actions">
          <Link to="/emergency-plumbing" className="utility-bar__emergency">
            <span className="utility-bar__dot" aria-hidden="true" />
            Emergency Plumbing
          </Link>
          <PhoneLink className="utility-bar__phone" />
        </div>
      </div>
    </div>
  )
}

export default UtilityBar
