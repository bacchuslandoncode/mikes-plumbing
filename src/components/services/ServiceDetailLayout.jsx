import PageContainer from '../ui/PageContainer'
import Breadcrumbs from '../ui/Breadcrumbs'
import ServiceHero from './ServiceHero'
import RelatedServices from './RelatedServices'
import ServiceCTA from './ServiceCTA'

// Shared chrome for every service detail page: breadcrumbs, hero shell,
// related services, and the closing CTA. Each page supplies its own
// unique middle content as children so paragraphs never repeat.
function ServiceDetailLayout({ serviceName, serviceId, hero, ctaTitle, ctaDescription, children }) {
  return (
    <>
      <PageContainer>
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: serviceName }]} />
        <ServiceHero {...hero} />
      </PageContainer>

      <PageContainer>{children}</PageContainer>

      <PageContainer>
        <RelatedServices currentServiceId={serviceId} />
      </PageContainer>

      <ServiceCTA title={ctaTitle} description={ctaDescription} />
    </>
  )
}

export default ServiceDetailLayout
