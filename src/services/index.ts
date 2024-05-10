'use server'

import { PokemonListResponse } from '@/models/pokemon.model'
import API from './api'

const getPokemonList = async (page = 0): Promise<PokemonListResponse> => {
  const response = await API.get(
    `pokemon?limit=${process.env.LIST_LIMIT}&offset=${page * Number(process.env.LIST_LIMIT)}`
  )
  return response.data
}

const getPokemon = async (name: string) => {
  const response = await API.get(`pokemon/${name}`)
  return response.data
}

export { getPokemonList, getPokemon }
