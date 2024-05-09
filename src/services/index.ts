'use server'

import { PokemonListResponse } from '@/models/pokemon.model'
import API from './api'

const getPokemonList = async (offset = 0): Promise<PokemonListResponse> => {
  const response = await API.get(
    `pokemon?limit=${process.env.LIST_LIMIT}&offset=${offset}`
  )
  return response.data
}

const getPokemon = async (name: string) => {
  const response = await API.get(`pokemon/${name}`)
  return response.data
}

export { getPokemonList, getPokemon }
