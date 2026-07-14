import { Check, AlertCircle, ShieldAlert } from 'lucide-react'
import Seo from '../components/ui/Seo'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceDetailLayout from '../components/services/ServiceDetailLayout'
import ServiceProblemList from '../components/services/ServiceProblemList'
import ServiceProcess from '../components/services/ServiceProcess'

const warningSigns = [
  "A faucet that keeps dripping after it's shut off",
  'A handle that feels loose or wobbly',
  'Noticeably low water pressure at one fixture',
  'Water pooling around a connection under a sink',
  "A fixture that's worn out or difficult to operate",
]

const problemsCovered = [
  'Constant dripping',
  'Loose handles',
  'Low pressure at a single fixture',
  'Leaking connections',
  'Fixture replacement',
]

const processSteps = [
  { title: 'Point Out The Fixture', text: 'Let us know which faucet or fixture is giving you trouble.' },
  { title: 'We Inspect The Fixture', text: 'We check the fixture and the connections behind it.' },
  { title: 'We Repair Or Replace It', text: "We fix what's causing the problem, or replace the fixture if that's the better option." },
]

const guidance = [
  'If a connection is actively leaking under a sink, shut off the supply valve for that fixture if you can reach it safely.',
  'Avoid forcing a stuck or wobbly handle, since that can make the repair more involved.',
]

const faqs = [
  {
    q: 'Can a dripping faucet waste a lot of water?',
    a: 'Yes, a steady drip adds up over time. It is worth having it fixed.',
  },
  {
    q: 'Do you replace fixtures or only repair them?',
    a: 'Both. If a fixture is too worn to repair, we can talk through replacing it.',
  },
  {
    q: 'What if the handle is loose but not leaking?',
    a: 'A loose handle is still worth having checked before it turns into a leak.',
  },
]

function FaucetsFixtures() {
  return (
    <>
      <Seo
        title="Faucet and Fixture Repair in Phoenix"
        description="Dripping faucets and worn fixtures repaired for homes in the Phoenix area by Mike's Plumbing."
      />
      <ServiceDetailLayout
      serviceName="Faucets & Fixtures"
      serviceId="faucets-fixtures"
      hero={{
        eyebrow: 'Service',
        title: 'Faucet and Fixture Repair',
        description:
          "A dripping faucet or a loose fixture is usually a quick fix once we know what's causing it. We repair the fixture instead of just masking the symptom.",
      }}
      ctaTitle="Faucet Or Fixture Acting Up?"
      ctaDescription="Tell us what's going on and we'll follow up to schedule service."
    >
      <ServiceProblemList title="Signs A Fixture Needs Repair" items={warningSigns} icon={AlertCircle} />
      <ServiceProblemList title="What We Handle" items={problemsCovered} icon={Check} />

      <SectionHeading eyebrow="Process" title="How It Works" />
      <ServiceProcess steps={processSteps} />

      <ServiceProblemList title="Before We Arrive" items={guidance} icon={ShieldAlert} />

      <SectionHeading eyebrow="FAQ" title="Faucet And Fixture Questions" />
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

export default FaucetsFixtures
