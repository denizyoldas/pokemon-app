import PokemonList from '@/components/pokemon/list'
import { getPokemonList } from '@/services'

interface HomeProps {
  searchParams?: {
    limit?: number
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const data = await getPokemonList(searchParams?.limit)

  return <PokemonList data={data} />
}
