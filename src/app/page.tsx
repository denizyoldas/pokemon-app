import PokemonList from '@/components/pokemon/list'
import { getPokemonList } from '@/services'

interface HomeProps {
  searchParams?: {
    page?: number
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const data = await getPokemonList(searchParams?.page || 0)

  return <PokemonList data={data} />
}
