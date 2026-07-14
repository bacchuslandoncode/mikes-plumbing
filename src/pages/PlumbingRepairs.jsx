import { Check, AlertCircle, ShieldAlert } from 'lucide-react'
import Seo from '../components/ui/Seo'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceDetailLayout from '../components/services/ServiceDetailLayout'
import ServiceProblemList from '../components/services/ServiceProblemList'
import ServiceProcess from '../components/services/ServiceProcess'
import { images } from '../data/images'

const warningSigns = [
  'A visible leak at a pipe, fixture, or connection',
  'A toilet that keeps running after you flush',
  "A supply line that's damaged or dripping",
  "Water pressure that's dropped somewhere in the home",
  "A connection that's loose or corroded",
]

const problemsCovered = [
  'Visible pipe leaks',
  'Running toilets',
  'Pipe connection issues',
  'Supply-line problems',
  'Minor plumbing repairs',
]

const processSteps = [
  { title: 'Describe The Problem', text: 'Tell us what you are seeing, like a leak or a running toilet.' },
  { title: 'We Find The Cause', text: 'We inspect the affected area to identify the source.' },
  { title: 'We Complete The Repair', text: 'We repair the issue and check that everything is working correctly.' },
]

const guidance = [
  'If you see a leak, shut off the nearest fixture valve or the main water shutoff if you can reach it safely.',
  'Place a container under a small leak to limit water damage until it is repaired.',
]

const faqs = [
  {
    q: 'Is a running toilet worth fixing quickly?',
    a: 'Yes, it can waste a significant amount of water over time.',
  },
  {
    q: 'What should I do if I find a leak?',
    a: 'Shut off the water to that fixture if you can, and contact us to schedule a repair.',
  },
  {
    q: 'Do you handle supply-line issues?',
    a: 'Yes, damaged or leaking supply lines are part of what we repair.',
  },
]

function PlumbingRepairs() {
  return (
    <>
      <Seo
        title="Leak and Plumbing Repair in Phoenix"
        description="Visible leaks, running toilets, and general plumbing repairs handled by Mike's Plumbing in the Phoenix area."
      />
      <ServiceDetailLayout
      serviceName="Plumbing Repairs"
      serviceId="plumbing-repairs"
      hero={{
        eyebrow: 'Service',
        title: 'Leak and Plumbing Repair',
        description:
          "From a visible leak to a running toilet, general plumbing problems need a straightforward fix. We find the cause and repair it.",
        image: images.plumbingTools,
        imageAlt: "Plumber's pipe wrenches, tube cutter, and fittings laid out on a tile floor",
        priority: true,
      }}
      ctaTitle="Have A Leak Or Plumbing Repair?"
      ctaDescription="Tell us what's going on and we'll follow up to schedule service."
    >
      <ServiceProblemList title="Signs You Need A Plumbing Repair" items={warningSigns} icon={AlertCircle} />
      <ServiceProblemList title="What We Handle" items={problemsCovered} icon={Check} />

      <SectionHeading eyebrow="Process" title="How It Works" />
      <ServiceProcess steps={processSteps} />

      <ServiceProblemList title="Before We Arrive" items={guidance} icon={ShieldAlert} />

      <SectionHeading eyebrow="FAQ" title="Plumbing Repair Questions" />
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.q} className="faq-item">
            <summary>
              <span>{faq.q}</span>
            </summary>
            <p className="faq-item__answer">{faq.a}</p>
          </details>
        ))}
      </div>
      </ServiceDetailLayout>
    </>
  )
}

export default PlumbingRepairs
