import { business } from '../../data/business'
import PrimaryButton from '../ui/PrimaryButton'
import PhoneLink from '../ui/PhoneLink'

function MobileStickyActions() {
  const hasPhone = business.phone.status === 'verified' && Boolean(business.phone.value)

  return (
    <div className="mobile-sticky-actions">
      {hasPhone ? <PhoneLink className="mobile-sticky-actions__call" label="Call Now" /> : null}
      <PrimaryButton
        to="/contact"
        className={`mobile-sticky-actions__request ${hasPhone ? '' : 'mobile-sticky-actions__request--full'}`.trim()}
      >
        Request Service
      </PrimaryButton>
    </div>
  )
}

export default MobileStickyActions
