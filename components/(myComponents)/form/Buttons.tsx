
'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { Loader2, LoaderIcon } from 'lucide-react'
import { sub } from 'date-fns'

import { SignInButton } from '@clerk/nextjs'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

type btnSize = 'default' | 'sm' | 'lg' | 'icon'

type SubmitButtonProps = {
  className?: string
  text?: string
  size?: btnSize
}


export const SubmitButton = ({ className = '', text = 'submit', size = 'lg' }: SubmitButtonProps) => {

  const { pending } = useFormStatus()
  return (
    <Button type='submit'
      className={`capitalize ${className}`} disabled={pending}
      size={size} >
      {pending
        ? <>
          <LoaderIcon className='animate-spin mr-2  size-4' size={24} /> Please wait...
        </>
        : text
      }
    </Button>
  )
}


export const CardSignInButton = () => {
  return (
    <SignInButton mode='modal'>
      <Button
        type='button'
        size='icon'
        variant='outline'
        className='p-2 cursor-pointer'
        asChild
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  )
}

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type='submit'
      size='icon'
      variant='outline'
      className='p-2 cursor-pointer'
    >
      {pending ? (
        <LoaderIcon className='animate-spin' />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
};