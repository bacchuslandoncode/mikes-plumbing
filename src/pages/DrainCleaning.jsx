import { Check, AlertCircle, ShieldAlert } from 'lucide-react'
import Seo from '../components/ui/Seo'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceDetailLayout from '../components/services/ServiceDetailLayout'
import ServiceProblemList from '../components/services/ServiceProblemList'
import ServiceProcess from '../components/services/ServiceProcess'

const warningSigns = [
  'Water draining slower than usual',
  'A clog that keeps coming back after you clear it yourself',
  'Gurgling sounds from a drain or toilet',
  'Water backing up in a sink, tub, or shower',
  'More than one fixture draining slowly at the same time',
]

const problemsCovered = [
  'Slow-moving drains',
  'Recurring clogs',
  'Minor backups',
  'Gurgling drains tied to a blockage',
  'Multiple affected fixtures in the same area',
]

const processSteps = [
  { title: 'Describe The Drain Issue', text: "Tell us which fixture is affected and what you're noticing." },
  { title: 'We Take A Look', text: 'We check the drain to find where the blockage is.' },
  { title: 'We Clear It', text: "We clear the line and confirm water is draining normally again." },
]

const guidance = [
  "Avoid pouring additional chemical drain cleaner into a drain that's already slow or clogged.",
  'Stop running water into a fixture that has already backed up.',
]

const faqs = [
  {
    q: 'Can I use store-bought drain cleaner first?',
    a: "Chemical drain cleaners can sometimes make a clog harder to clear safely. If a drain stays slow or clogged, contact us instead of adding more.",
  },
  {
    q: 'Why does my drain gurgle?',
    a: 'Gurgling usually means air is trapped behind a blockage. It is worth having the line checked.',
  },
  {
    q: 'What if more than one drain is affected?',
    a: 'Multiple slow drains at once can point to a larger blockage. Contact us to have it looked at.',
  },
]

function DrainCleaning() {
  return (
    <>
      <Seo
        title="Drain Cleaning in Phoenix"
        description="Slow or clogged drains in the Phoenix area? Mike's Plumbing clears blockages and gets water moving again."
      />
      <ServiceDetailLayout
      serviceName="Drain Cleaning"
      serviceId="drain-cleaning"
      hero={{
        eyebrow: 'Service',
        title: 'Drain Cleaning',
        description:
          "Slow, clogged, or backed-up drains usually point to a blockage somewhere in the line. We clear it so water moves the way it should again.",
      }}
      ctaTitle="Dealing With A Slow Or Clogged Drain?"
      ctaDescription="Tell us what's going on and we'll follow up to schedule service."
    >
      <ServiceProblemList title="Signs You Might Need Drain Cleaning" items={warningSigns} icon={AlertCircle} />
      <ServiceProblemList title="What We Handle" items={problemsCovered} icon={Check} />

      <SectionHeading eyebrow="Process" title="How It Works" />
      <ServiceProcess steps={processSteps} />

      <ServiceProblemList title="Before We Arrive" items={guidance} icon={ShieldAlert} />

      <SectionHeading eyebrow="FAQ" title="Drain Cleaning Questions" />
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

export default DrainCleaning
