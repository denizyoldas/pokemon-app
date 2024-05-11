import { PokemonListResponse } from '@/models/pokemon.model'
import ListItem from './list-item'
import Pagination from './pagination'

interface PokemonListProps {
  data: PokemonListResponse
}

export default function PokemonList({ data }: PokemonListProps) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
        {data.results?.map((pokemon) => (
          <ListItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Pagination count={data.count} limit={Number(process.env.LIST_LIMIT)} />
      </div>
    </div>
  )
}
