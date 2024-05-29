
import {
  deleteReviewAction,
  fetchPropertyReviewsByUser,
} from '@/utils/actions';
;
import EmptyList from '@/components/(myComponents)/home/EmptyList';
import Title from '@/components/(myComponents)/properties/Title';
import ReviewCard from '@/components/(myComponents)/reviews/ReviewCard';
import FormContainer from '@/components/(myComponents)/form/FormContainer';
import { IconButton } from '@/components/(myComponents)/form/Buttons';

async function ReviewsPage() {
  const reviews = await fetchPropertyReviewsByUser();
  if (reviews.length === 0) return <EmptyList />;

  return (
    <>
      <Title text='Your Reviews' />
      <section className='grid md:grid-cols-2 gap-8 mt-4 '>
        {reviews.map((review) => {
          const { comment, rating } = review;
          const { name, image } = review.property;
          const reviewInfo = {
            comment,
            rating,
            name,
            image,
          };
          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
}

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });
  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType='delete' />
    </FormContainer>
  );
};

export default ReviewsPage;