import { useEffect } from 'react'
import { business } from '../../data/business'

// Renders only fields verified in business.js. Every other LocalBusiness
// field (address, phone, hours, rating, founding date, etc.) stays out
// until it carries status: 'verified'.
function StructuredData() {
  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Plumber',
    }

    if (business.name.status === 'verified' && business.name.value) {
      data.name = business.name.value
    }

    if (business.market.status === 'verified' && business.market.value) {
      data.areaServed = business.market.value
    }

    if (business.phone.status === 'verified' && business.phone.value) {
      data.telephone = business.phone.value
    }

    const scriptId = 'ld-json-local-business'
    let script = document.getElementById(scriptId)
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = scriptId
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(data)
  }, [])

  return null
}

export default StructuredData
