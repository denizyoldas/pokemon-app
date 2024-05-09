import PokemonCard from '@/components/pokemon/detail-card'
import { getPokemon } from '@/services'

interface PokemonPageProps {
  params: {
    pokemonName: string
  }
}

export default async function PokemonPage({ params }: PokemonPageProps) {
  const response = await getPokemon(params.pokemonName)
  return (
    <div>
      <PokemonCard name={params.pokemonName} data={response} />
    </div>
  )
}
