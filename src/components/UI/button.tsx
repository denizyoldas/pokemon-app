import React from 'react'

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ type = 'button', ...other }: ButtonProps) {
  return (
    <button
      {...other}
      type={type}
      className="rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-gray-400"
    />
  )
}
