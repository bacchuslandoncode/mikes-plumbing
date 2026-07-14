import Seo from '../components/ui/Seo'
import PageContainer from '../components/ui/PageContainer'
import SectionHeading from '../components/ui/SectionHeading'
import PrimaryButton from '../components/ui/PrimaryButton'

function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." />
      <PageContainer>
        <div className="page-header">
          <SectionHeading level={1} eyebrow="404" title="Page Not Found" description="The page you're looking for doesn't exist." />
          <PrimaryButton to="/">Back to Home</PrimaryButton>
        </div>
      </PageContainer>
    </>
  )
}

export default NotFound
