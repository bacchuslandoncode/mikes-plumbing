import PageContainer from '../ui/PageContainer'
import SectionHeading from '../ui/SectionHeading'
import PrimaryButton from '../ui/PrimaryButton'
import PhoneLink from '../ui/PhoneLink'

function ServiceCTA({ title = 'Ready To Get This Fixed?', description, tone = 'petrol' }) {
  const isPetrol = tone === 'petrol'

  return (
    <section className={`section cta-band ${isPetrol ? 'section--petrol' : 'section--white'}`.trim()}>
      <PageContainer>
        <SectionHeading
          tone={isPetrol ? 'dark' : 'light'}
          align="center"
          eyebrow="Contact"
          title={title}
          description={description}
        />
        <div className="cta-band__actions">
          <PhoneLink
            className={`btn btn--secondary ${isPetrol ? 'btn--secondary-onDark' : 'btn--secondary-onLight'}`}
            label="Call Now"
          />
          <PrimaryButton to="/contact">Request Service</PrimaryButton>
        </div>
      </PageContainer>
    </section>
  )
}

export default ServiceCTA
