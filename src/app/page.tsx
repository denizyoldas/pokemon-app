import PokemonList from '@/components/pokemon/list'
import { getPokemonList } from '@/services'

export default async function Home() {
  const data = await getPokemonList()

  return <PokemonList data={data} />
}
