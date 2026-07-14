import { AlertTriangle, ShieldAlert, MapPin, Plus } from 'lucide-react'
import Seo from '../components/ui/Seo'
import PageContainer from '../components/ui/PageContainer'
import SectionHeading from '../components/ui/SectionHeading'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import PrimaryButton from '../components/ui/PrimaryButton'
import SecondaryButton from '../components/ui/SecondaryButton'
import PhoneLink from '../components/ui/PhoneLink'
import ResponsiveImage from '../components/ui/ResponsiveImage'
import ServiceProblemList from '../components/services/ServiceProblemList'
import ServiceProcess from '../components/services/ServiceProcess'
import ServiceCTA from '../components/services/ServiceCTA'
import { business } from '../data/business'
import { images } from '../data/images'

const examples = [
  'An active pipe or fixture leak',
  "An overflowing toilet that won't stop",
  'A water heater that is actively leaking',
  'A major drain backup affecting your home',
  'A sudden loss of normal plumbing use',
  "Water appearing somewhere it shouldn't be",
]

const beforeHelpArrives = [
  'Shut off the nearest fixture valve when it is safe to do so.',
  'Use the main water shutoff when necessary and when you can reach it safely.',
  'Keep people away from standing water near electrical outlets or equipment.',
  'Stop using a backed-up fixture.',
  'Avoid repeatedly testing a blocked drain or toilet.',
  'Avoid pouring additional chemical drain cleaner into the plumbing system.',
]

const afterContactSteps = [
  { title: "Tell Us What's Happening", text: 'Describe the issue so we understand what is going on.' },
  { title: 'We Confirm Details', text: 'We go over next steps with you.' },
  { title: 'We Address The Issue', text: 'We work to get the plumbing issue resolved.' },
]

function EmergencyPlumbing() {
  const hasPhone = business.phone.status === 'verified' && Boolean(business.phone.value)
  const hasAvailability = business.is24HourAvailable.status === 'verified' && business.is24HourAvailable.value

  const faqs = [
    {
      q: 'What counts as a plumbing emergency?',
      a: 'Active leaks, major backups, and situations causing water damage are usually considered urgent. If you are not sure, contact us and describe what is happening.',
    },
    {
      q: 'Is emergency service available any time?',
      a: hasAvailability
        ? "Yes, we're available 24/7 for plumbing emergencies."
        : 'Contact us to check on availability for your situation.',
    },
    {
      q: 'What should I do while I wait for help?',
      a: 'See the guidance above for steps you can safely take before we arrive.',
    },
    {
      q: 'Will there be extra costs for an emergency call?',
      a: "Contact us and we'll go over cost information before any work is scheduled.",
    },
    {
      q: 'What happens after I contact you?',
      a: 'We confirm details with you and get started on addressing the issue.',
    },
  ]

  return (
    <>
      <Seo
        title="Emergency Plumbing in Phoenix"
        description="Dealing with a plumbing emergency in the Phoenix area? Contact Mike's Plumbing for urgent leaks and drain issues."
      />
      <section className="section--petrol reveal">
        <PageContainer>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Emergency Plumbing' }]} />
          <div className="emergency-hero">
            <div className="emergency-hero__content">
              <p className="emergency-hero__eyebrow">Emergency Plumbing</p>
              <h1 className="emergency-hero__title">Plumbing Emergency?</h1>
              <p className="emergency-hero__text">
                If you're dealing with an active leak, a backed-up drain, or another urgent plumbing issue, contact
                us right away.
              </p>
              <div className="emergency-hero__actions">
                <PhoneLink className="btn btn--primary btn--large" label="Call Now" />
                {hasPhone ? (
                  <SecondaryButton to="/contact" tone="onDark">
                    Request Service
                  </SecondaryButton>
                ) : (
                  <PrimaryButton to="/contact" className="btn--large">
                    Request Service
                  </PrimaryButton>
                )}
              </div>
              <p className="emergency-hero__availability">
                {hasAvailability
                  ? 'Available 24/7 for plumbing emergencies.'
                  : 'Contact us to check on availability for your situation.'}
              </p>
            </div>
            <div className="emergency-hero__media">
              <ResponsiveImage
                image={images.pipePouringWater}
                alt="Water pouring from a metal pipe outlet"
                framed
                priority
              />
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Emergency examples */}
      <section className="section section--white reveal">
        <PageContainer>
          <SectionHeading eyebrow="Examples" title="Common Plumbing Emergencies" />
          <ServiceProblemList items={examples} icon={AlertTriangle} />
          <p className="urgency-note">
            These are common examples, not a rule for every situation. If you're unsure whether your issue is
            urgent, contact us and describe what's happening.
          </p>
        </PageContainer>
      </section>

      {/* Before help arrives */}
      <section className="section reveal">
        <PageContainer>
          <SectionHeading eyebrow="While You Wait" title="Before Help Arrives" />
          <ServiceProblemList items={beforeHelpArrives} icon={ShieldAlert} />
        </PageContainer>
      </section>

      {/* What happens after contacting */}
      <section className="section section--white reveal">
        <PageContainer>
          <SectionHeading eyebrow="Next Steps" title="What Happens After You Contact Us" />
          <ServiceProcess steps={afterContactSteps} />
        </PageContainer>
      </section>

      {/* Service area reminder */}
      <section className="section section--petrol area-reminder reveal">
        <PageContainer>
          <div className="area-reminder__inner">
            <span className="icon-badge icon-badge--dark" aria-hidden="true">
              <MapPin size={18} />
            </span>
            <span className="area-reminder__label">Serving {business.market.value}</span>
          </div>
        </PageContainer>
      </section>

      {/* FAQ */}
      <section className="section reveal">
        <PageContainer>
          <SectionHeading eyebrow="FAQ" title="Emergency Plumbing Questions" />
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

      <ServiceCTA
        title="Still Dealing With A Plumbing Emergency?"
        description="Contact us and we'll help however we can."
      />
    </>
  )
}

export default EmergencyPlumbing
