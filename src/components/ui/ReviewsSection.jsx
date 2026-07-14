import { business } from '../../data/business'
import PageContainer from './PageContainer'
import SectionHeading from './SectionHeading'

// Renders nothing until business.reviews carries real, verified entries.
// Kept as a real component so verified reviews can be dropped in later
// without rebuilding the homepage section order.
function ReviewsSection() {
  const reviews = business.reviews

  if (!reviews || reviews.status !== 'verified' || !Array.isArray(reviews.value) || reviews.value.length === 0) {
    return null
  }

  return (
    <section className="section section--white">
      <PageContainer>
        <SectionHeading eyebrow="Reviews" title="What Customers Say" />
        <ul className="review-list">
          {reviews.value.map((review) => (
            <li key={review.id} className="review-item">
              <p className="review-item__quote">{review.quote}</p>
              <p className="review-item__name">{review.name}</p>
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  )
}

export default ReviewsSection
