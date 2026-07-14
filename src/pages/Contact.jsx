import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo'
import PageContainer from '../components/ui/PageContainer'
import SectionHeading from '../components/ui/SectionHeading'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import PrimaryButton from '../components/ui/PrimaryButton'
import PhoneLink from '../components/ui/PhoneLink'
import ResponsiveImage from '../components/ui/ResponsiveImage'
import { business } from '../data/business'
import { images } from '../data/images'

const initialValues = {
  name: '',
  phone: '',
  email: '',
  address: '',
  issue: '',
  urgency: '',
  contactMethod: '',
}

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (values.phone.trim() && !/^[\d\s()+-]{7,}$/.test(values.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (!values.issue.trim()) {
    errors.issue = 'Please describe the plumbing issue.'
  }

  if (!values.urgency) {
    errors.urgency = 'Please select an urgency level.'
  }

  if (!values.contactMethod) {
    errors.contactMethod = 'Please select a preferred contact method.'
  }

  return errors
}

function encodeForNetlify(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

function ContactForm() {
  const formId = useId()
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setStatus('submitting')

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForNetlify({ 'form-name': 'contact-request', ...values }),
      })
      setStatus('success')
      setValues(initialValues)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form__success" role="status">
        <p>Thanks, your request was sent. We'll follow up to confirm the details.</p>
      </div>
    )
  }

  return (
    <form
      name="contact-request"
      method="POST"
      action="/"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="contact-form"
      noValidate
    >
      <input type="hidden" name="form-name" value="contact-request" />
      <p className="form-honeypot" aria-hidden="true">
        <label htmlFor={`${formId}-bot-field`}>
          Leave this field blank
          <input id={`${formId}-bot-field`} name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="contact-form__field">
        <label htmlFor={`${formId}-name`}>
          Name<span className="contact-form__required">*</span>
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${formId}-name-error` : undefined}
        />
        {errors.name ? (
          <p className="contact-form__error" id={`${formId}-name-error`}>
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="contact-form__field">
        <label htmlFor={`${formId}-phone`}>Phone</label>
        <input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={handleChange}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
        />
        {errors.phone ? (
          <p className="contact-form__error" id={`${formId}-phone-error`}>
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div className="contact-form__field">
        <label htmlFor={`${formId}-email`}>
          Email<span className="contact-form__required">*</span>
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
        />
        {errors.email ? (
          <p className="contact-form__error" id={`${formId}-email-error`}>
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="contact-form__field">
        <label htmlFor={`${formId}-address`}>Service Address Or ZIP Code</label>
        <input
          id={`${formId}-address`}
          name="address"
          type="text"
          autoComplete="postal-code"
          value={values.address}
          onChange={handleChange}
        />
      </div>

      <div className="contact-form__field contact-form__field--full">
        <label htmlFor={`${formId}-issue`}>
          Plumbing Issue<span className="contact-form__required">*</span>
        </label>
        <textarea
          id={`${formId}-issue`}
          name="issue"
          value={values.issue}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={Boolean(errors.issue)}
          aria-describedby={errors.issue ? `${formId}-issue-error` : undefined}
        />
        {errors.issue ? (
          <p className="contact-form__error" id={`${formId}-issue-error`}>
            {errors.issue}
          </p>
        ) : null}
      </div>

      <div className="contact-form__field">
        <label htmlFor={`${formId}-urgency`}>
          Urgency<span className="contact-form__required">*</span>
        </label>
        <select
          id={`${formId}-urgency`}
          name="urgency"
          value={values.urgency}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={Boolean(errors.urgency)}
          aria-describedby={errors.urgency ? `${formId}-urgency-error` : undefined}
        >
          <option value="">Select one</option>
          <option value="Not urgent">Not urgent</option>
          <option value="Somewhat urgent">Somewhat urgent</option>
          <option value="Emergency, can't wait">Emergency, can't wait</option>
        </select>
        {errors.urgency ? (
          <p className="contact-form__error" id={`${formId}-urgency-error`}>
            {errors.urgency}
          </p>
        ) : null}
      </div>

      <div className="contact-form__field">
        <label htmlFor={`${formId}-contactMethod`}>
          Preferred Contact Method<span className="contact-form__required">*</span>
        </label>
        <select
          id={`${formId}-contactMethod`}
          name="contactMethod"
          value={values.contactMethod}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={Boolean(errors.contactMethod)}
          aria-describedby={errors.contactMethod ? `${formId}-contactMethod-error` : undefined}
        >
          <option value="">Select one</option>
          <option value="Phone">Phone</option>
          <option value="Email">Email</option>
          <option value="Either">Either</option>
        </select>
        {errors.contactMethod ? (
          <p className="contact-form__error" id={`${formId}-contactMethod-error`}>
            {errors.contactMethod}
          </p>
        ) : null}
      </div>

      <div className="contact-form__submit">
        <PrimaryButton type="submit">{status === 'submitting' ? 'Sending...' : 'Send Request'}</PrimaryButton>
        {status === 'error' ? (
          <p className="contact-form__status">Something went wrong. Please try again or contact us directly.</p>
        ) : null}
      </div>
    </form>
  )
}

function Contact() {
  const hasHours = business.businessHours.status === 'verified' && business.businessHours.value

  return (
    <>
      <Seo
        title="Contact Mike's Plumbing"
        description="Request plumbing service or ask a question. Mike's Plumbing serves the Phoenix, Arizona area."
      />
      <PageContainer>
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
        <div className="page-header">
          <SectionHeading
            eyebrow="Contact"
            title="Contact Mike's Plumbing"
            description="Tell us what's going on and we'll follow up to schedule service."
          />
          <PhoneLink className="btn btn--secondary btn--secondary-onLight" label="Call Now" />
        </div>
      </PageContainer>

      {/* Emergency callout */}
      <section className="section section--petrol">
        <PageContainer>
          <SectionHeading
            tone="dark"
            eyebrow="Urgent"
            title="Dealing With A Plumbing Emergency?"
            description="Visit our emergency plumbing page for what to do next."
          />
          <Link to="/emergency-plumbing" className="btn btn--primary">
            Emergency Plumbing
          </Link>
        </PageContainer>
      </section>

      {/* Form + details */}
      <section className="section section--white">
        <PageContainer>
          <div className="split-band split-band--top">
            <div>
              <SectionHeading eyebrow="Request Service" title="Send Us A Message" />
              <ContactForm />
            </div>
            <div className="contact-aside">
              <div className="split-band__media">
                <ResponsiveImage image={images.waterDropBlue} alt="Water droplet and ripple, decorative" framed />
              </div>

              <div className="contact-aside__block">
                <SectionHeading eyebrow="Hours" title="When We're Available" />
                <div className="notice-panel">
                  <p>{hasHours ? business.businessHours.value : "Hours will be added here once confirmed."}</p>
                </div>
              </div>

              <div className="contact-aside__block">
                <SectionHeading eyebrow="Coverage" title="Primary Service Area" />
                <p className="page-header__note">Mike's Plumbing serves the {business.market.value} area.</p>
              </div>

              <div className="contact-aside__block">
                <SectionHeading eyebrow="What To Expect" title="After You Reach Out" />
                <p className="page-header__note">
                  We'll follow up to confirm the details of your request and go over next steps before anything is
                  scheduled.
                </p>
              </div>

              <div className="contact-aside__block">
                <SectionHeading eyebrow="Privacy" title="How We Use Your Information" />
                <p className="page-header__note">
                  Information you share here is used only to respond to your request and is not sold to third
                  parties.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  )
}

export default Contact
