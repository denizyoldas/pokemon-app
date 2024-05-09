import React from 'react'
import { Image } from '../UI/image'
import { Pokemon } from '@/models/pokemon.model'

interface PokemonCardProps {
  name: string
  data: Pokemon
}

export default function PokemonCard({ name, data }: PokemonCardProps) {
  return (
    <>
      <h1 className="text-4xl text-bold pt-4">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h1>
      <div
        className="m-4"
        style={{ position: 'relative', width: '300px', height: '300px' }}
      >
        <Image
          image={data.sprites.other['official-artwork'].front_default}
          alt={name}
        />
      </div>
      <h3>Weight: {data.weight}</h3>
      <div className="flex-col">
        {data.stats.map((statObject) => {
          const statName = statObject.stat.name
          const statValue = statObject.base_stat

          return (
            <div
              className="flex items-stretch"
              style={{ width: '500px' }}
              key={statName}
            >
              <h3 className="p-3 w-2/4">
                {statName}: {statValue}
              </h3>
              <progress className="w-2/4 m-auto" value={statValue / 100} />
            </div>
          )
        })}
      </div>
    </>
  )
}
