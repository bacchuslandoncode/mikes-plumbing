import { Link } from 'react-router-dom'
import {
  MapPin,
  FileText,
  Send,
  Droplets,
  Flame,
  Droplet,
  AlertTriangle,
  Siren,
  Wrench,
  MessageSquare,
  Home as HomeIcon,
  PhoneCall,
  Plus,
} from 'lucide-react'
import Seo from '../components/ui/Seo'
import PageContainer from '../components/ui/PageContainer'
import SectionHeading from '../components/ui/SectionHeading'
import PrimaryButton from '../components/ui/PrimaryButton'
import ResponsiveImage from '../components/ui/ResponsiveImage'
import PhoneLink from '../components/ui/PhoneLink'
import ReviewsSection from '../components/ui/ReviewsSection'
import { business } from '../data/business'
import { services } from '../data/services'
import { images } from '../data/images'

const problems = [
  { icon: Droplets, label: 'Drain will not clear', route: '/services/drain-cleaning' },
  { icon: Flame, label: 'No hot water', route: '/services/water-heaters' },
  { icon: Droplet, label: 'Faucet will not stop dripping', route: '/services/faucets-fixtures' },
  { icon: AlertTriangle, label: 'Pipe or fixture is leaking', route: '/services/plumbing-repairs' },
  { icon: Siren, label: 'Need urgent plumbing help', route: '/emergency-plumbing', urgent: true },
]

const serviceContent = {
  'drain-cleaning': { icon: Droplets, description: 'Clearing clogged and slow-moving drains.' },
  'water-heaters': { icon: Flame, description: 'Diagnosing and repairing water heater problems.' },
  'faucets-fixtures': { icon: Droplet, description: 'Fixing leaks, drips, and worn fixtures.' },
  'plumbing-repairs': {
    icon: Wrench,
    description: 'Repairing pipe leaks and general plumbing issues.',
    image: images.plumbingTools,
    alt: "Plumber's pipe wrenches, tube cutter, and fittings laid out on a tile floor",
  },
  'emergency-plumbing': {
    icon: Siren,
    description: 'Handling urgent plumbing issues when they come up.',
    urgent: true,
  },
}

const whyReasons = [
  {
    icon: MessageSquare,
    title: 'Clear Explanation Before Work Begins',
    text: "We walk through what's wrong and what it takes to fix it before any work starts.",
  },
  {
    icon: HomeIcon,
    title: 'Respect For Your Home',
    text: "We treat your property carefully while we're working in it.",
  },
  {
    icon: PhoneCall,
    title: 'Direct Communication',
    text: "You'll hear directly from the person handling the work.",
  },
  {
    icon: Wrench,
    title: 'Practical Repair Recommendations',
    text: 'We recommend what actually needs fixing.',
  },
  {
    icon: Send,
    title: 'Simple Service Requests',
    text: "Request service online and we'll follow up to confirm details.",
  },
]

const processSteps = [
  { title: 'Tell Us What Is Happening', text: 'Share the issue through our contact page.' },
  { title: 'Confirm The Details', text: 'We confirm scope, timing, and next steps with you.' },
  { title: 'Get It Addressed', text: 'We get to work on the plumbing issue you reported.' },
]

const faqs = [
  {
    q: 'Do you charge for estimates?',
    a: "Reach out with details about your plumbing issue and we'll go over next steps, including cost information, before scheduling work.",
  },
  {
    q: 'What areas do you serve?',
    a: "Mike's Plumbing is based in the Phoenix, Arizona area.",
  },
  {
    q: 'Do you handle emergency plumbing issues?',
    a: "Yes. Visit the emergency plumbing page or contact us directly to describe what's happening.",
  },
  {
    q: 'How do I request service?',
    a: "Use the contact page to tell us what's going on, and we'll follow up to confirm details.",
  },
  {
    q: "What if I'm not sure what's wrong?",
    a: "Describe the symptoms, like slow drains or dripping faucets, and we'll help figure out the right service.",
  },
  {
    q: 'Can you fix a slow or clogged drain?',
    a: 'Drain clearing is one of our core services. Visit the drain cleaning page or contact us to get started.',
  },
  {
    q: 'Will someone explain the repair before starting work?',
    a: 'Yes. Explaining the issue and the plan before starting work is part of how we operate.',
  },
]

function Home() {
  const hasServiceAreaCities =
    business.serviceAreaCities.status === 'verified' && business.serviceAreaCities.value.length > 0

  return (
    <>
      <Seo
        title="Plumbing Services in Phoenix, Arizona"
        description="Mike's Plumbing handles drain cleaning, water heater repair, and plumbing repairs for homes in the Phoenix area."
      />
      {/* Hero */}
      <PageContainer>
        <div className="home-hero">
          <div>
            <p className="home-hero__eyebrow">{business.market.value} Plumbing</p>
            <h1 className="home-hero__title">Plumbing problems handled without the runaround.</h1>
            <p className="home-hero__subtitle">
              Mike's Plumbing handles drain clogs, leaks, water heater issues, and fixture repairs for homes across
              the Phoenix area. Tell us what's going on and we'll get you scheduled.
            </p>
            <div className="home-hero__actions">
              <PhoneLink className="btn btn--secondary btn--secondary-onLight" label="Call Now" />
              <PrimaryButton to="/contact">Request Service</PrimaryButton>
            </div>
            <p className="home-hero__note">Based in {business.market.value}.</p>
          </div>

          <div className="home-hero__media">
            <span className="home-hero__measure" aria-hidden="true" />
            <ResponsiveImage
              image={images.plumbingTools}
              alt="Plumber's pipe wrenches, tube cutter, and fittings laid out on a tile floor"
              framed
              priority
            />
            <div className="home-hero__panel">
              <p className="home-hero__panel-eyebrow">Coverage</p>
              <p className="home-hero__panel-value">{business.market.value}</p>
            </div>
          </div>
        </div>

        {/* Compact trust strip */}
        <div className="trust-strip">
          <div className="trust-strip__item">
            <span className="icon-badge" aria-hidden="true">
              <MapPin size={18} />
            </span>
            <span className="trust-strip__label">Local Phoenix Service</span>
          </div>
          <div className="trust-strip__item">
            <span className="icon-badge" aria-hidden="true">
              <FileText size={18} />
            </span>
            <span className="trust-strip__label">Straightforward Estimates</span>
          </div>
          <div className="trust-strip__item">
            <span className="icon-badge" aria-hidden="true">
              <Send size={18} />
            </span>
            <span className="trust-strip__label">Request Service Online</span>
          </div>
        </div>
      </PageContainer>

      {/* Problem selector */}
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

      {/* Core services */}
      <section className="section reveal">
        <PageContainer>
          <SectionHeading
            eyebrow="Services"
            title="Plumbing Services"
            description="Browse the work we handle, organized by the problem you're facing."
          />
          <div className="service-rows">
            {services.map((service, index) => {
              const content = serviceContent[service.id]
              const Icon = content.icon
              const indexLabel = String(index + 1).padStart(2, '0')

              if (content.image) {
                return (
                  <div key={service.id} className="service-row service-row--media">
                    <div className="service-row__content">
                      <span className="service-row__index">{indexLabel}</span>
                      <span className="icon-badge" aria-hidden="true">
                        <Icon size={20} />
                      </span>
                      <span className="service-row__name">{service.name}</span>
                      <p className="service-row__description">{content.description}</p>
                      <Link to={service.route} className="service-row__link">
                        View Service &rarr;
                      </Link>
                    </div>
                    <div className="service-row__media">
                      <ResponsiveImage image={content.image} alt={content.alt} framed />
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={service.id}
                  to={service.route}
                  className={`service-row ${content.urgent ? 'service-row--urgent' : ''}`.trim()}
                >
                  <span className="icon-badge icon-badge--sm" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="service-row__index">{indexLabel}</span>
                    <span className="service-row__name">{service.name}</span>
                    <p className="service-row__description">{content.description}</p>
                  </span>
                  <span className="service-row__link">View Service &rarr;</span>
                </Link>
              )
            })}
          </div>
        </PageContainer>
      </section>

      {/* Emergency interruption */}
      <section className="section section--petrol reveal">
        <PageContainer>
          <div className="split-band">
            <div>
              <SectionHeading
                tone="dark"
                eyebrow="Urgent"
                title="Emergency Plumbing"
                description="If you're dealing with a burst pipe, major leak, or another urgent plumbing issue, reach out and we'll do what we can to help."
              />
              <div className="home-hero__actions">
                <PhoneLink className="btn btn--secondary btn--secondary-onDark" label="Call Now" />
                <PrimaryButton to="/emergency-plumbing">Emergency Plumbing</PrimaryButton>
              </div>
            </div>
            <div className="split-band__media">
              <ResponsiveImage
                image={images.pipePouringWater}
                alt="Water pouring from a metal pipe outlet"
                framed
              />
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Why Mike's Plumbing */}
      <section className="section section--petrol reveal">
        <PageContainer>
          <SectionHeading tone="dark" eyebrow="Why Us" title="Why Mike's Plumbing" />
          <div className="why-grid">
            {whyReasons.map((reason) => {
              const Icon = reason.icon
              return (
                <div key={reason.title} className="why-card">
                  <span className="icon-badge icon-badge--dark" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <p className="why-card__title">{reason.title}</p>
                  <p className="why-card__text">{reason.text}</p>
                </div>
              )
            })}
          </div>
        </PageContainer>
      </section>

      {/* Process */}
      <section className="section section--white reveal">
        <PageContainer>
          <SectionHeading eyebrow="Process" title="How It Works" />
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={step.title} className="process-step">
                <p className="process-step__index">{String(index + 1).padStart(2, '0')}</p>
                <p className="process-step__title">{step.title}</p>
                <p className="process-step__text">{step.text}</p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Local story */}
      <section className="section reveal">
        <PageContainer>
          <div className="story-band">
            <div>
              <SectionHeading
                eyebrow="Local"
                title="Locally Operated in Phoenix"
                description={`Mike's Plumbing operates out of the ${business.market.value} area. Details about our team and history will be added here once confirmed.`}
              />
            </div>
            <div className="story-band__media">
              <ResponsiveImage
                image={images.exteriorPvcPipes}
                alt="Exterior PVC and cast-iron pipe cluster on a building wall"
                framed
              />
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Service area */}
      <section className="section section--white reveal">
        <PageContainer>
          <div className="split-band split-band--reverse">
            <div>
              <SectionHeading
                eyebrow="Coverage"
                title="Service Areas"
                description={`Mike's Plumbing serves ${business.market.value}.`}
              />
              {hasServiceAreaCities ? (
                <ul>
                  {business.serviceAreaCities.value.map((city) => (
                    <li key={city}>{city}</li>
                  ))}
                </ul>
              ) : (
                <div className="notice-panel">
                  <p>A full list of service-area cities will be added once confirmed.</p>
                </div>
              )}
            </div>
            <div className="split-band__media">
              <ResponsiveImage
                image={images.waterMetersValves}
                alt="Row of outdoor water meters and shutoff valves"
                framed
              />
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Reviews (hidden until verified reviews exist) */}
      <ReviewsSection />

      {/* FAQ */}
      <section className="section reveal">
        <PageContainer>
          <SectionHeading eyebrow="FAQ" title="Plumbing Questions" />
          <div className="faq-list">
            {faqs.map((faq) => (
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

      {/* Final CTA */}
      <section className="section section--petrol cta-band reveal">
        <PageContainer>
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="Contact"
            title="Contact Mike's Plumbing"
            description="Tell us what's going on and we'll follow up to schedule service."
          />
          <div className="cta-band__actions">
            <PhoneLink className="btn btn--secondary btn--secondary-onDark" label="Call Now" />
            <PrimaryButton to="/contact">Request Service</PrimaryButton>
          </div>
        </PageContainer>
      </section>
    </>
  )
}

export default Home
