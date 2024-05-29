'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { createReviewAction } from '@/utils/actions';
import { SubmitButton } from '../form/Buttons';
import FormContainer from '../form/FormContainer';
import RatingInput from '../form/RatingInput';
import TextAreaInput from '../form/TextAreaInput';
import { Card } from '@/components/ui/card';

function SubmitReview({ propertyId }: { propertyId: string }) {

  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);

  return (
    <div className='mt-8'>

      {isReviewFormVisible && (
        <Card className='p-8 my-8'>
          <FormContainer action={createReviewAction}>
            <input type='hidden' name='propertyId' value={propertyId} />
            <RatingInput name='rating' />
            <TextAreaInput
              name='comment'
              labelText='your thoughts on this property'
              defaultValue='Amazing place !!!'
            />
            <SubmitButton text='Submit' className='mt-4' />

            <Button className='ml-8' variant={'secondary'} type='button' onClick={() => setIsReviewFormVisible((prev) => !prev)}>
              Cancel
            </Button>

          </FormContainer>
        </Card>
      )}


      {!isReviewFormVisible && (
      <Button type='button' onClick={() => setIsReviewFormVisible((prev) => !prev)}>
        Leave a Review
      </Button>)
      }

    </div>
  );
}

export default SubmitReview;