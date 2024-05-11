import React from 'react'
import cx from 'classnames'

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'text'
}

export default function Button({
  type = 'button',
  variant = 'primary',
  disabled,
  ...other
}: ButtonProps) {
  return (
    <button
      {...other}
      type={type}
      disabled={disabled}
      className={cx('flex items-center justify-center gap-2 rounded', {
        'bg-blue-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-gray-400':
          variant === 'primary',
        'bg-gray-700 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-gray-500':
          variant === 'secondary',
        'text-blue-500 hover:text-gray-400': variant === 'text',
        'cursor-not-allowed bg-gray-400': disabled
      })}
    />
  )
}
