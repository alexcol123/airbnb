import {SubmitButton} from "@/components/(myComponents)/form/Buttons"

import FormContainer from "@/components/(myComponents)/form/FormContainer"
import FormInput from "@/components/(myComponents)/form/FormInput"

import { createProfileAction } from "@/utils/actions"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"





const CreateProfilePage = async () => {

  const user = await currentUser()

  if (user?.privateMetadata?.hasProfile) {
    redirect('/profile')
  }

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize" >new user</h1>
      <div className="border p-8 rounded-md ">

        <FormContainer action={createProfileAction}>
          <div className=" grid md:grid-cols-2  gap-4 mt-4 ">
            <FormInput name="firstName" id="firstName" label="first name" placeholder="John" />
            <FormInput name="lastName" id="lastName" label="last name" placeholder="Doe" />
            <FormInput name="username" id="username" label="Username" placeholder="username" />
          </div>
          <SubmitButton text="Create Profile" className="mt-8" />

        
        </FormContainer>

      </div>
    </section>
  )
}
export default CreateProfilePage