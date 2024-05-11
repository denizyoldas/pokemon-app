import { PokemonListResponse } from '@/models/pokemon.model'
import ListItem from './list-item'
// import { useState } from 'react'
// import { getPokemonList } from '@/services'
import Pagination from './pagination'

interface PokemonListProps {
  data: PokemonListResponse
}

export default function PokemonList({ data }: PokemonListProps) {
  // const [pokemonList, setPokemonList] = useState(data.results)
  // const [page, setPage] = useState(1)

  // const loadMoreHandler = async () => {
  //   const newData = await getPokemonList(page)
  //   setPokemonList([...pokemonList, ...newData.results])
  //   setPage(page + 1)
  // }

  return (
    <div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
        {data.results?.map((pokemon) => (
          <ListItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Pagination
          count={data.count}
          limit={Number(process.env.LIST_LIMIT)}
          // loadMoreHandler={loadMoreHandler}
          // standard
        />
      </div>
    </div>
  )
}
