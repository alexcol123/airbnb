
import LoadingCards from "@/components/(myComponents)/card/LoadingCards"
import CategoriesList from "@/components/(myComponents)/home/CategoriesList"
import PropertiesContainer from "@/components/(myComponents)/home/PropertiesContainer"
import { Suspense } from "react"

export type SearchParams = {
  category?: string
  search?: string
}

function HomePage({ searchParams }: { searchParams: SearchParams }) {

  return (
    <section>
      <CategoriesList category={searchParams.category} search={searchParams.search} />

      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer category={searchParams.category} search={searchParams.search} />
      </Suspense>


    </section>
  )
}
export default HomePage