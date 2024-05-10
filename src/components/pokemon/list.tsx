'use client'

import { PokemonListResponse } from '@/models/pokemon.model'
import ListItem from './list-item'
import Button from '../UI/button'
import { useState } from 'react'
import { getPokemonList } from '@/services'

interface PokemonListProps {
  data: PokemonListResponse
}

export default function PokemonList({ data }: PokemonListProps) {
  const [pokemonList, setPokemonList] = useState(data.results)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)

  const loadMoreHandler = async () => {
    setIsLoading(true)
    const newData = await getPokemonList(page)
    setPokemonList([...pokemonList, ...newData.results])
    setPage(page + 1)
    setIsLoading(false)
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
        {pokemonList?.map((pokemon) => (
          <ListItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Button onClick={loadMoreHandler} disabled={isLoading}>
          Load More
        </Button>
      </div>
    </div>
  )
}
