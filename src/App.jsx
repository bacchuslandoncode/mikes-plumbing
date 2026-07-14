import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/ui/ScrollToTop'
import StructuredData from './components/ui/StructuredData'
import Home from './pages/Home'
import Services from './pages/Services'
import DrainCleaning from './pages/DrainCleaning'
import WaterHeaters from './pages/WaterHeaters'
import FaucetsFixtures from './pages/FaucetsFixtures'
import PlumbingRepairs from './pages/PlumbingRepairs'
import EmergencyPlumbing from './pages/EmergencyPlumbing'
import About from './pages/About'
import ServiceAreas from './pages/ServiceAreas'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <ScrollToTop />
      <StructuredData />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/drain-cleaning" element={<DrainCleaning />} />
          <Route path="/services/water-heaters" element={<WaterHeaters />} />
          <Route path="/services/faucets-fixtures" element={<FaucetsFixtures />} />
          <Route path="/services/plumbing-repairs" element={<PlumbingRepairs />} />
          <Route path="/emergency-plumbing" element={<EmergencyPlumbing />} />
          <Route path="/about" element={<About />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
