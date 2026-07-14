import { Check, AlertCircle, ShieldAlert } from 'lucide-react'
import Seo from '../components/ui/Seo'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceDetailLayout from '../components/services/ServiceDetailLayout'
import ServiceProblemList from '../components/services/ServiceProblemList'
import ServiceProcess from '../components/services/ServiceProcess'

const warningSigns = [
  'No hot water at all',
  'Hot water that runs out quickly or fluctuates in temperature',
  'Water pooling or dripping near the tank',
  'Popping, rumbling, or banging noises from the unit',
  'Hot water that looks discolored or rusty',
]

const problemsCovered = [
  'No hot water',
  'Inconsistent water temperature',
  'A leaking tank',
  'Unusual noises from the water heater',
  'Discolored hot water',
]

const processSteps = [
  { title: "Tell Us What You're Noticing", text: 'Describe the symptoms, like no hot water or strange noises.' },
  { title: 'We Diagnose The Unit', text: 'We inspect the water heater to find the cause.' },
  { title: 'We Make The Repair', text: 'We repair the issue and confirm the unit is working properly.' },
]

const guidance = [
  'If you see water pooling near the tank, avoid touching the unit and shut off the water supply to the tank if you can do so safely.',
  'Keep the area around the water heater clear of stored items.',
]

const faqs = [
  {
    q: 'Is a leaking tank an emergency?',
    a: "A leaking tank can get worse over time. If it's actively leaking, contact us or visit our emergency plumbing page.",
  },
  {
    q: 'Why does my hot water run out fast?',
    a: 'This can point to a sizing issue or a problem with the unit itself. We can take a look and explain what is going on.',
  },
  {
    q: 'Can strange noises mean something is wrong?',
    a: 'Popping or rumbling noises are usually worth having checked.',
  },
]

function WaterHeaters() {
  return (
    <>
      <Seo
        title="Water Heater Repair in Phoenix"
        description="No hot water or a leaking tank? Mike's Plumbing diagnoses and repairs water heaters for homes in the Phoenix area."
      />
      <ServiceDetailLayout
      serviceName="Water Heaters"
      serviceId="water-heaters"
      hero={{
        eyebrow: 'Service',
        title: 'Water Heater Repair',
        description:
          "No hot water or a tank that isn't working right can throw off your whole day. We diagnose the problem and repair what's causing it.",
      }}
      ctaTitle="Water Heater Not Working Right?"
      ctaDescription="Tell us what's going on and we'll follow up to schedule service."
    >
      <ServiceProblemList title="Signs Your Water Heater Needs Attention" items={warningSigns} icon={AlertCircle} />
      <ServiceProblemList title="What We Handle" items={problemsCovered} icon={Check} />

      <SectionHeading eyebrow="Process" title="How It Works" />
      <ServiceProcess steps={processSteps} />

      <ServiceProblemList title="Before We Arrive" items={guidance} icon={ShieldAlert} />

      <SectionHeading eyebrow="FAQ" title="Water Heater Questions" />
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

export default WaterHeaters
