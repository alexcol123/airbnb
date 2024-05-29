import {SubmitButton} from "@/components/(myComponents)/form/Buttons"

import FormContainer from "@/components/(myComponents)/form/FormContainer"
import FormInput from "@/components/(myComponents)/form/FormInput"
import { updateProfileAction, fetchProfile, updateProfileImageAction } from "@/utils/actions"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import ImageInputContainer from "@/components/(myComponents)/form/ImageInputContainer"





async function ProfilePage() {
  const profile = await fetchProfile();



  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>user profile</h1>
      <div className='border p-8 rounded-md '>
        <ImageInputContainer
          image={profile.profileImage}
          name={profile.username}
          action={updateProfileImageAction}
          text='Update Profile Image'
        />
        <FormContainer action={updateProfileAction}>
          <div className='grid md:grid-cols-2 gap-4 mt-4'>
            <FormInput
              type='text'
              name='firstName'
              label='First Name'
              defaultValue={profile.firstName}
            />
            <FormInput
              type='text'
              name='lastName'
              label='Last Name'
              defaultValue={profile.lastName}
            />
            <FormInput
              type='text'
              name='username'
              label='Username'
              defaultValue={profile.username}
            />
          </div>
          <SubmitButton text='update profile' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
}
export default ProfilePage;
