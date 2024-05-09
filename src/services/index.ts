import { PokemonListResponse } from '@/models/pokemon.model'
import API from './api'

const getPokemonList = async (limit = 10): Promise<PokemonListResponse> => {
  const response = await API.get(`pokemon?limit=${limit}`)
  return response.data
}

const getPokemon = async (name: string) => {
  const response = await API.get(`pokemon/${name}`)
  return response.data
}

export { getPokemonList, getPokemon }
