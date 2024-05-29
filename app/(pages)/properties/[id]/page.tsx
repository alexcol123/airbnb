import FavoriteToggleButton from "@/components/(myComponents)/card/FavoriteToggleButton"
import PropertyRating from "@/components/(myComponents)/card/PropertyRating"
import Amenities from "@/components/(myComponents)/properties/Amenities"
import BookingCalendar from "@/components/(myComponents)/properties/BookingCalendar"
import BreadCrumbs from "@/components/(myComponents)/properties/BreadCrumbs"
import Description from "@/components/(myComponents)/properties/Description"
import ImageContainer from "@/components/(myComponents)/properties/ImageContainer"
import PropertyDetails from "@/components/(myComponents)/properties/PropertyDetails"
import ShareButton from "@/components/(myComponents)/properties/ShareButton"
import UserInfo from "@/components/(myComponents)/properties/UserInfo"
import PropertyReviews from "@/components/(myComponents)/reviews/PropertyReviews"
import SubmitReview from "@/components/(myComponents)/reviews/SubmitReview"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { fetchPropertyDetails } from "@/utils/actions"
import dynamic from "next/dynamic"
import { redirect } from "next/navigation"



const DynamicMap = dynamic(
  () => import('@/components/(myComponents)/properties/PropertyMap'),
  {
    ssr: false,
    loading: () => <Skeleton className='h-[400px] w-full' />,
  }
);

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {



  const property = await fetchPropertyDetails(params.id)

  if (!property) {
    redirect('/')
  }

  const { baths, bedrooms, beds, guests } = property

  const details = { baths, bedrooms, beds, guests }

  const firstName = property.profile.firstName
  const profileImage = property.profile.profileImage



  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className="flex justify-between items-center mt-4">
        <h1 className="text-4xl font-bold capitalize">
          {property.tagline}
        </h1>

        <div className="flex items-center gap-x-4">
          {/* share button */}
          <ShareButton propertyId={property.id} name={property.name} />
          <FavoriteToggleButton propertyId={property.id} />
        </div>

      </header>

      <ImageContainer mainImage={property.image} name={property.name} />

      <section className='lg:grid lg:grid-cols-12 gap-x-12 mt-12'>
        <div className='lg:col-span-8'>
          <div className="lg:col-span-8" >
            <div className="flex gap-x-4 items-center">
              <h1 className="text-xl">{property.name}</h1>
              <PropertyRating inPage propertyId={property.id} />

            </div>
            <PropertyDetails details={details} />
            <UserInfo profile={{ profileImage, firstName }} />
            <Separator className="mt-4" />
            <Description description={property.description} />
            <Amenities amenities={property.amenities} />
            <DynamicMap countryCode={property.country} />
          </div>
        </div>

        <div className='lg:col-span-4 flex flex-col items-center'>
          {/* Calendar */}

          <BookingCalendar />
   
        </div>

      </section>
      <SubmitReview propertyId={property.id} />
      <PropertyReviews propertyId={property.id} />

    </section>
  )
}
export default PropertyDetailsPage