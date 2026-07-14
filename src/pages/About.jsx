import { Check } from 'lucide-react'
import Seo from '../components/ui/Seo'
import PageContainer from '../components/ui/PageContainer'
import SectionHeading from '../components/ui/SectionHeading'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import ResponsiveImage from '../components/ui/ResponsiveImage'
import ServiceProblemList from '../components/services/ServiceProblemList'
import ServiceCTA from '../components/services/ServiceCTA'
import { business } from '../data/business'
import { images } from '../data/images'

const principles = [
  'Explain the problem before starting work',
  'Offer practical options instead of pushing unnecessary extras',
  'Keep communication direct throughout the job',
  'Show up ready to do the work that was described',
]

function About() {
  return (
    <>
      <Seo
        title="About Mike's Plumbing"
        description="Learn about the straightforward, local approach Mike's Plumbing takes to plumbing repairs in Phoenix, Arizona."
      />
      <PageContainer>
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
        <div className="page-header">
          <SectionHeading
            eyebrow="About"
            title="About Mike's Plumbing"
            description="A straightforward, local plumbing business serving the Phoenix area."
          />
        </div>
      </PageContainer>

      {/* Work photograph */}
      <section className="section section--white reveal">
        <PageContainer>
          <div className="split-band">
            <div>
              <SectionHeading
                eyebrow="Why We Do This Work"
                title="Straightforward Plumbing Work"
                description="Mike's Plumbing exists to handle plumbing problems the direct way: understand what's wrong, explain it clearly, and fix it."
              />
            </div>
            <div className="split-band__media">
              <ResponsiveImage
                image={images.gasPipeManifold}
                alt="Close-up of pipe fittings, valves, and a pressure regulator"
                objectPosition="center bottom"
                aspectRatio="16 / 9"
                framed
              />
              <p className="photo-caption">Plumbing and pipework, illustrative photo.</p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* How customers should be treated */}
      <section className="section reveal">
        <PageContainer>
          <SectionHeading
            eyebrow="Our Approach"
            title="How We Treat Customers"
            description="Every homeowner we work with gets a clear explanation before any repair starts, along with straightforward communication throughout the job."
          />
        </PageContainer>
      </section>

      {/* Straightforward-service principles */}
      <section className="section section--white reveal">
        <PageContainer>
          <SectionHeading eyebrow="Principles" title="How We Work" />
          <ServiceProblemList items={principles} icon={Check} />
        </PageContainer>
      </section>

      {/* Respect for the home */}
      <section className="section reveal">
        <PageContainer>
          <SectionHeading
            eyebrow="In Your Home"
            title="Respect For Your Home"
            description="We treat your home like it matters, because it does. That means protecting floors and fixtures while we work and leaving the area clean when the job is done."
          />
        </PageContainer>
      </section>

      {/* Local connection */}
      <section className="section section--white reveal">
        <PageContainer>
          <SectionHeading
            eyebrow="Local"
            title="Serving Phoenix, Arizona"
            description={`Mike's Plumbing works in the ${business.market.value} area. As verified details about the business are confirmed, they'll be added here.`}
          />
        </PageContainer>
      </section>

      <ServiceCTA
        title="Have A Plumbing Question?"
        description="Contact Mike's Plumbing to schedule service or ask a question."
      />
    </>
  )
}

export default About
