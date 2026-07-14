import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import PrimaryButton from '../ui/PrimaryButton'
import PhoneLink from '../ui/PhoneLink'
import MobileNavigation from './MobileNavigation'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    return () => document.body.classList.remove('nav-open')
  }, [menuOpen])

  return (
    <>
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`.trim()}>
        <div className="site-header__inner">
          <Link to="/" className="site-header__wordmark" onClick={() => setMenuOpen(false)}>
            <span className="site-header__wordmark-primary">Mike's</span>
            <span className="site-header__wordmark-secondary">Plumbing</span>
          </Link>

          <nav className="site-header__nav" aria-label="Primary">
            <ul>
              {navigation.map((item) => {
                const isEmergency = item.route === '/emergency-plumbing'
                return (
                  <li key={item.route} className={item.children ? 'has-children' : ''}>
                    <NavLink
                      to={item.route}
                      end={item.route === '/'}
                      className={({ isActive }) =>
                        [isEmergency ? 'site-header__nav-emergency' : '', isActive ? 'is-active' : '']
                          .filter(Boolean)
                          .join(' ')
                      }
                    >
                      {isEmergency ? <span className="site-header__nav-emergency-dot" aria-hidden="true" /> : null}
                      {item.label}
                    </NavLink>
                    {item.children ? (
                      <ul className="site-header__submenu">
                        {item.children.map((child) => (
                          <li key={child.route}>
                            <NavLink to={child.route}>{child.label}</NavLink>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="site-header__actions">
            <PhoneLink className="site-header__phone" />
            <PrimaryButton to="/contact" className="site-header__cta">
              Request Service
            </PrimaryButton>
            <button
              type="button"
              className="site-header__menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
              <span className="site-header__menu-icon" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <MobileNavigation id="mobile-navigation" isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Header
