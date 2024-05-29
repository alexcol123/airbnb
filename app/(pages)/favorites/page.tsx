import EmptyList from "@/components/(myComponents)/home/EmptyList"
import PropertiesList from "@/components/(myComponents)/home/PropertiesList"
import { fetchFavorites } from "@/utils/actions"

async function FavoritesPage() {

  const favorites = await fetchFavorites()

  if (favorites.length === 0) {
    return <EmptyList />
  }

  return (
    <PropertiesList properties={favorites} />
  )
}
export default FavoritesPage