import { MapPin } from 'lucide-react'
import Seo from '../components/ui/Seo'
import PageContainer from '../components/ui/PageContainer'
import SectionHeading from '../components/ui/SectionHeading'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import ServiceHero from '../components/services/ServiceHero'
import ServiceProblemList from '../components/services/ServiceProblemList'
import ServiceCTA from '../components/services/ServiceCTA'
import { business } from '../data/business'
import { images } from '../data/images'

const localConcerns = [
  'Hard water can lead to mineral buildup in pipes and fixtures over time.',
  'High summer temperatures can stress outdoor pipes and hose connections.',
  'Older homes may still have aging supply lines that are more prone to leaks.',
  'Seasonal temperature swings can affect water heater performance.',
]

function ServiceAreas() {
  const areas =
    business.serviceAreaCities.status === 'verified' && business.serviceAreaCities.value.length > 0
      ? business.serviceAreaCities.value
      : [business.market.value]

  return (
    <>
      <Seo title="Phoenix Service Areas" description="Mike's Plumbing serves homeowners in the Phoenix, Arizona area." />
      <PageContainer>
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Service Areas' }]} />
        <ServiceHero
          eyebrow="Coverage"
          title="Phoenix Plumbing Service"
          description={`Mike's Plumbing serves homeowners in the ${business.market.value} area.`}
          image={images.waterMetersValves}
          imageAlt="Row of outdoor water meters and shutoff valves"
          priority
        />
      </PageContainer>

      {/* Service area grid */}
      <section className="section section--white">
        <PageContainer>
          <SectionHeading eyebrow="Where We Work" title="Service Areas" />
          <div className="area-grid">
            {areas.map((area) => (
              <div key={area} className="area-card">
                <span className="icon-badge icon-badge--sm" aria-hidden="true">
                  <MapPin size={18} />
                </span>
                <span className="area-card__name">{area}</span>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Local concerns */}
      <section className="section">
        <PageContainer>
          <SectionHeading eyebrow="Good To Know" title="Plumbing Concerns Common To Local Homes" />
          <ServiceProblemList items={localConcerns} icon={MapPin} />
        </PageContainer>
      </section>

      {/* Not sure callout */}
      <section className="section section--white">
        <PageContainer>
          <SectionHeading eyebrow="Check With Us" title="Not Sure Whether We Serve Your Area?" />
          <div className="notice-panel">
            <p>Contact us with your location and we'll let you know if we can help.</p>
          </div>
        </PageContainer>
      </section>

      <ServiceCTA
        title="Ready To Schedule Service?"
        description="Reach out and we'll follow up to confirm the details."
      />
    </>
  )
}

export default ServiceAreas
