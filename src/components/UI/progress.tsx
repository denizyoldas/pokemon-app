import React from 'react'
import cx from 'classnames'

interface ProgressProps {
  value: number
  className?: string
}
export default function Progress({ className, value }: ProgressProps) {
  const getColor = (value: number) => {
    if (value <= 50) {
      return 'bg-red-500'
    } else if (value > 50 && value <= 75) {
      return 'bg-yellow-500'
    } else {
      return 'bg-green-500'
    }
  }

  return (
    <div
      className="m-auto flex h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-700"
      role="progressbar"
    >
      <div
        className={cx(
          'flex flex-col justify-center overflow-hidden whitespace-nowrap rounded-full text-center text-xs text-white transition duration-500',
          getColor(value),
          className
        )}
        style={{ width: `${Number(value)}%` }}
      ></div>
    </div>
  )
}
