import FormInput from "@/components/(myComponents)/form/FormInput"
import FormContainer from '@/components/(myComponents)/form/FormContainer'
import { createPropertyAction } from '@/utils/actions'
import {SubmitButton} from "@/components/(myComponents)/form/Buttons"
import PriceInput from "@/components/(myComponents)/form/PriceInput"
import CategoriesInput from "@/components/(myComponents)/form/CategoriesInput"
import TextAreaInput from "@/components/(myComponents)/form/TextAreaInput"
import CountriesInput from "@/components/(myComponents)/form/CountriesInput"
import ImageInput from "@/components/(myComponents)/form/ImageInput"
import CounterInput from "@/components/(myComponents)/form/CounterInput"
import AmenitiesInput from "@/components/(myComponents)/form/AmenitiesInput"

function CreateProperty() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Create a new property
      </h1>
      <div className="border p-8 rounded">
        <h3 className="text-lg mb-4 font-medium" >General Info</h3>

        <FormContainer action={createPropertyAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput name='name' label='Name (20 limit)' defaultValue="Cabin in Cancun" />
            <FormInput name='tagline' label='Tagline (30 limit)' defaultValue="Dream getaway awaits you here." />

            <PriceInput defaultValue={0} />
            <CategoriesInput />
          </div>
          <TextAreaInput name={'description'} labelText={'Description (10-1000 words)'} />


          <div className="grid sm:grid-cols-2 gap-8 mt-4 ">
            <CountriesInput defaultValue='MX' />
            <ImageInput />
          </div>


          <h3 className='text-lg mt-8 mb-4 font-medium'>Accommodation Details</h3>
          <CounterInput detail='guests' />
          <CounterInput detail='bedrooms' />
          <CounterInput detail='beds' />
          <CounterInput detail='baths' />


          <h3 className='text-lg mt-10 mb-5 font-medium'>Ammenities </h3>

          <AmenitiesInput />

          <SubmitButton text='create rental' className="mt-12" />

        </FormContainer>
      </div>
    </div>
  )
}
export default CreateProperty