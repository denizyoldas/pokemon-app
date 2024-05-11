'use client'

import React from 'react'
import { Image } from '../UI/image'
import { Pokemon } from '@/models/pokemon.model'
import Progress from '../UI/progress'
import { useRouter } from 'next/navigation'
import Button from '../UI/button'

interface PokemonCardProps {
  name: string
  data: Pokemon
}

export default function PokemonCard({ name, data }: PokemonCardProps) {
  const Router = useRouter()

  return (
    <>
      <h1 className="text-bold pt-4 text-center text-4xl">
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
      <h3 className="text-center text-gray-400">Weight: {data.weight}</h3>
      <div className="flex-col">
        {data.stats.map((statObject) => {
          const statName = statObject.stat.name
          const statValue = statObject.base_stat

          return (
            <div
              className="m-4 grid grid-cols-1 items-center gap-4 md:grid-cols-2"
              key={statName}
            >
              <h3>
                {statName}: {statValue}
              </h3>
              <Progress value={statValue} />
            </div>
          )
        })}
        <div className="m-4 flex justify-center">
          <Button variant="text" onClick={() => Router.back()}>
            Back to List
          </Button>
        </div>
      </div>
    </>
  )
}
