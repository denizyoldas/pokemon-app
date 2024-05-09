import { PokemonListResponse } from '@/models/pokemon.model'
import ListItem from './list-item'

interface PokemonListProps {
  data: PokemonListResponse
}

export default function PokemonList({ data }: PokemonListProps) {
  return (
    <div className="flex flex-wrap justify-center">
      {data?.results.map((pokemon) => (
        <ListItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  )
}
