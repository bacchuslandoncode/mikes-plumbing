import { business } from '../../data/business'

function PhoneLink({ className = '', label, ...rest }) {
  const phone = business.phone

  if (!phone || phone.status !== 'verified' || !phone.value) {
    return null
  }

  const digits = phone.value.replace(/[^\d+]/g, '')

  return (
    <a href={`tel:${digits}`} className={`phone-link ${className}`.trim()} {...rest}>
      {label || phone.value}
    </a>
  )
}

export default PhoneLink
