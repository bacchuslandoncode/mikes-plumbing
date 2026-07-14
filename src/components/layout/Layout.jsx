import UtilityBar from './UtilityBar'
import Header from './Header'
import Footer from './Footer'
import MobileStickyActions from './MobileStickyActions'

function Layout({ children }) {
  return (
    <div className="app-shell">
      <UtilityBar />
      <Header />
      <main className="app-shell__main">{children}</main>
      <Footer />
      <MobileStickyActions />
    </div>
  )
}

export default Layout
