'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Pokemon {
  name: string
  url: string
}

interface ListItemProps {
  pokemon: Pokemon
}

export default function ListItem({ pokemon }: ListItemProps) {
  return (
    <Link
      className="flex flex-col items-center justify-center rounded-md bg-gray-100 shadow-md transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gray-300"
      href={`/detail/${pokemon.name}`}
    >
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url
          .split('/')
          .filter(Boolean)
          .pop()}.png`}
        alt={pokemon.name}
        width={100}
        height={100}
        className="h-40 w-full object-contain p-2"
      />
      <div className="w-full rounded-b-md bg-gray-400 p-2 text-center">
        {pokemon.name}
      </div>
    </Link>
  )
}
