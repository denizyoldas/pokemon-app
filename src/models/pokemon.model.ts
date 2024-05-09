export interface PokemonList {
  name: string
  url: string
}

export interface PokemonListResponse {
  count: number
  next: string
  previous: string
  results: PokemonList[]
}

export interface Pokemon {
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  weight: number
  stats: {
    stat: {
      name: string
    }
    base_stat: number
  }[]
}
