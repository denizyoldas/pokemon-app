'use client'

import { PokemonListResponse } from '@/models/pokemon.model'
import ListItem from './list-item'
import Button from '../UI/button'
import { useState } from 'react'
import { getPokemonList } from '@/services'

interface PokemonListProps {
  data: PokemonListResponse
  currentCount?: number
}

export default function PokemonList({ data, currentCount }: PokemonListProps) {
  const [pokemonList, setPokemonList] = useState(data.results)
  const loadMoreHandler = async () => {
    const newData = await getPokemonList(1)
    setPokemonList([...pokemonList, ...newData.results])
  }

  console.log('env', process.env.LIST_LIMIT)

  return (
    <div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
        {pokemonList?.map((pokemon) => (
          <ListItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Button onClick={loadMoreHandler}>Load More</Button>
      </div>
    </div>
  )
}
