import { Link } from 'react-router-dom'
import { Droplets, Flame, Droplet, AlertTriangle, Siren, Wrench, Send, Plus } from 'lucide-react'
import Seo from '../components/ui/Seo'
import PageContainer from '../components/ui/PageContainer'
import SectionHeading from '../components/ui/SectionHeading'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import PrimaryButton from '../components/ui/PrimaryButton'
import ServiceHero from '../components/services/ServiceHero'
import ServiceCard from '../components/services/ServiceCard'
import ServiceProcess from '../components/services/ServiceProcess'
import ServiceCTA from '../components/services/ServiceCTA'
import { services } from '../data/services'
import { images } from '../data/images'

const problems = [
  { icon: Droplets, label: 'Drain will not clear', route: '/services/drain-cleaning' },
  { icon: Flame, label: 'No hot water', route: '/services/water-heaters' },
  { icon: Droplet, label: 'Faucet will not stop dripping', route: '/services/faucets-fixtures' },
  { icon: AlertTriangle, label: 'Pipe or fixture is leaking', route: '/services/plumbing-repairs' },
  { icon: Siren, label: 'Need urgent plumbing help', route: '/emergency-plumbing', urgent: true },
]

const categoryContent = {
  'drain-cleaning': { icon: Droplets, description: 'Clearing clogged and slow-moving drains.' },
  'water-heaters': { icon: Flame, description: 'Diagnosing and repairing water heater problems.' },
  'faucets-fixtures': { icon: Droplet, description: 'Fixing leaks, drips, and worn fixtures.' },
  'plumbing-repairs': { icon: Wrench, description: 'Repairing pipe leaks and general plumbing issues.' },
}

const hubProcessSteps = [
  { title: 'Tell Us The Problem', text: 'Reach out through the contact page or by phone if a number is available.' },
  { title: 'We Confirm Next Steps', text: 'We confirm scope and timing with you before anything is scheduled.' },
  { title: 'We Complete The Work', text: 'We get the plumbing issue handled.' },
]

const hubFaqs = [
  { q: 'How do I know which service I need?', a: 'Use the problem finder above, or contact us and describe what is happening.' },
  { q: 'Do you offer emergency plumbing service?', a: 'Yes. Visit our emergency plumbing page for urgent issues.' },
  { q: 'Can one visit cover more than one issue?', a: 'Let us know about every issue when you reach out so we can plan accordingly.' },
  { q: "What if my problem isn't listed?", a: 'Contact us and describe the issue. We can tell you if it is something we handle.' },
]

const primaryServices = services.filter((service) => service.id !== 'emergency-plumbing')
const featuredService = primaryServices.find((service) => service.id === 'plumbing-repairs')
const compactServices = primaryServices.filter((service) => service.id !== 'plumbing-repairs')

function Services() {
  return (
    <>
      <Seo
        title="Plumbing Services"
        description="Browse plumbing services from Mike's Plumbing in Phoenix, Arizona, including drain cleaning, water heaters, and repairs."
      />
      <PageContainer>
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />
        <ServiceHero
          eyebrow="Services"
          title="Plumbing Services"
          description="Browse the work we handle, organized by the problem you're facing."
          image={images.waterMetersValves}
          imageAlt="Row of outdoor water meters and shutoff valves"
          priority
        />
      </PageContainer>

      {/* Problem finder */}
      <section className="section section--white reveal">
        <PageContainer>
          <SectionHeading
            eyebrow="Get Started"
            title="What's Going Wrong?"
            description="Pick what best describes the problem and we'll point you to the right service."
          />
          <div className="problem-grid">
            {problems.map((problem) => {
              const Icon = problem.icon
              return (
                <Link
                  key={problem.route}
                  to={problem.route}
                  className={`problem-card ${problem.urgent ? 'problem-card--urgent' : ''}`.trim()}
                >
                  <span className="icon-badge" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <span className="problem-card__label">{problem.label}</span>
                  <Send size={16} className="problem-card__cta" aria-hidden="true" />
                </Link>
              )
            })}
          </div>
        </PageContainer>
      </section>

      {/* Primary service categories */}
      <section className="section reveal">
        <PageContainer>
          <SectionHeading eyebrow="Categories" title="Primary Services" />
          <div className="service-category-grid">
            {featuredService ? (
              <ServiceCard
                service={featuredService}
                description={categoryContent[featuredService.id].description}
                icon={categoryContent[featuredService.id].icon}
                image={images.plumbingTools}
                imageAlt="Plumber's pipe wrenches, tube cutter, and fittings laid out on a tile floor"
                index={primaryServices.findIndex((service) => service.id === featuredService.id)}
                featured
              />
            ) : null}
            <div className="service-category-row">
              {compactServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  description={categoryContent[service.id].description}
                  icon={categoryContent[service.id].icon}
                  index={primaryServices.findIndex((s) => s.id === service.id)}
                />
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Urgent vs non-urgent */}
      <section className="section section--white reveal">
        <PageContainer>
          <SectionHeading eyebrow="Know The Difference" title="Urgent Or Not?" />
          <div className="urgency-compare">
            <div className="urgency-column">
              <p className="urgency-column__title">Usually Not Urgent</p>
              <ul>
                <li>A single slow drain</li>
                <li>A faucet with a steady drip</li>
                <li>A loose or wobbly handle</li>
                <li>Slightly lower water pressure at one fixture</li>
              </ul>
            </div>
            <div className="urgency-column urgency-column--urgent">
              <p className="urgency-column__title">Likely Urgent</p>
              <ul>
                <li>An active leak you can't stop</li>
                <li>A toilet overflowing and not stopping</li>
                <li>A water heater actively leaking</li>
                <li>Water showing up where it shouldn't be</li>
              </ul>
            </div>
          </div>
          <p className="urgency-note">
            These are general examples, not a rule for every situation. If you're unsure, contact us or visit the
            emergency plumbing page.
          </p>
        </PageContainer>
      </section>

      {/* Emergency callout */}
      <section className="section section--petrol reveal">
        <PageContainer>
          <SectionHeading
            tone="dark"
            eyebrow="Urgent"
            title="Need Emergency Plumbing?"
            description="If a plumbing issue can't wait, visit our emergency plumbing page for what to do next."
          />
          <PrimaryButton to="/emergency-plumbing">Emergency Plumbing</PrimaryButton>
        </PageContainer>
      </section>

      {/* Process */}
      <section className="section section--white reveal">
        <PageContainer>
          <SectionHeading eyebrow="Process" title="How It Works" />
          <ServiceProcess steps={hubProcessSteps} />
        </PageContainer>
      </section>

      {/* FAQ */}
      <section className="section reveal">
        <PageContainer>
          <SectionHeading eyebrow="FAQ" title="Service Questions" />
          <div className="faq-list">
            {hubFaqs.map((faq) => (
              <details key={faq.q} className="faq-item">
                <summary>
                  <span>{faq.q}</span>
                  <Plus size={18} aria-hidden="true" />
                </summary>
                <p className="faq-item__answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </PageContainer>
      </section>

      <ServiceCTA title="Request Service" description="Tell us what's going on and we'll follow up to schedule service." />
    </>
  )
}

export default Services
