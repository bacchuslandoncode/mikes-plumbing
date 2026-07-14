import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import PrimaryButton from '../ui/PrimaryButton'
import PhoneLink from '../ui/PhoneLink'

function MobileNavigation({ id, isOpen, onClose }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    const firstFocusable = panelRef.current?.querySelector('a, button')
    firstFocusable?.focus()

    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  return (
    <div
      id={id}
      ref={panelRef}
      className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      hidden={!isOpen}
    >
      <div className="mobile-nav__header">
        <span className="mobile-nav__title">Menu</span>
        <button type="button" className="mobile-nav__close" onClick={onClose}>
          <span className="sr-only">Close menu</span>
          <span className="mobile-nav__close-icon" aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Mobile primary">
        <ul className="mobile-nav__list">
          {navigation.map((item) => {
            const isEmergency = item.route === '/emergency-plumbing'
            return (
              <li key={item.route} className={isEmergency ? 'mobile-nav__emergency' : ''}>
                <NavLink to={item.route} end={item.route === '/'} onClick={onClose}>
                  {item.label}
                </NavLink>
                {item.children ? (
                  <ul className="mobile-nav__sublist">
                    {item.children.map((child) => (
                      <li key={child.route}>
                        <NavLink to={child.route} onClick={onClose}>
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mobile-nav__actions">
        <PhoneLink className="btn btn--secondary btn--secondary-onDark" label="Call Now" />
        <PrimaryButton to="/contact" onClick={onClose}>
          Request Service
        </PrimaryButton>
      </div>
    </div>
  )
}

export default MobileNavigation
