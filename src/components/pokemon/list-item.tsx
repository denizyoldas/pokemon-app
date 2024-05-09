'use client'
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
      className="flex flex-col items-center justify-center p-4 m-4 bg-gray-100 rounded-md shadow-md"
      href={`/${pokemon.name}`}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url
          .split('/')
          .filter(Boolean)
          .pop()}.png`}
        alt={pokemon.name}
        width={100}
        height={100}
      />
      <div>{pokemon.name}</div>
    </Link>
  )
}
