'use client';
import { SignInButton, useAuth } from '@clerk/nextjs';

import FormContainer from '../form/FormContainer';

import { SubmitButton } from '../form/Buttons';
import { createBookingAction } from '@/utils/actions';
import { useProperty } from '@/utils/store';
import { Button } from '@/components/ui/button';




function ConfirmBooking() {
  const { userId } = useAuth();
  const { propertyId, range } = useProperty((state) => state);
  const checkIn = range?.from as Date;
  const checkOut = range?.to as Date;

  console.log(userId)



  if (!userId)
    return (
      <SignInButton mode='redirect'>
        <Button type='button' className='w-full'>
        Sign In,  To Book Property
        </Button>
      </SignInButton>
    );

  const createBooking = createBookingAction.bind(null, {
    propertyId,
    checkIn,
    checkOut,
  });
  return (
    <section>
      <FormContainer action={createBooking}>
        <SubmitButton text='Reserve' className='w-full' />
      </FormContainer>
    </section>
  );
}
export default ConfirmBooking;