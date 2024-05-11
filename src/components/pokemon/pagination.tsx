'use client'

import React from 'react'
import Button from '../UI/button'
import { useRouter, useSearchParams } from 'next/navigation'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import cx from 'classnames'
import { twMerge } from 'tailwind-merge'

interface PaginationProps {
  count: number
  limit: number
  standard?: boolean
  loadMoreHandler?: () => void
}

export default function Pagination({
  count,
  limit,
  standard = false,
  loadMoreHandler
}: PaginationProps) {
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const [active, setActive] = React.useState(
    Number(searchParams.get('page') || 1)
  )
  const pageCount = Math.ceil(count / limit)
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1)
  const showPages = pages.filter(
    (page) => page === active || page === active - 1 || page === active + 1
  )

  const next = () => {
    if (active === pageCount) return

    setActive(active + 1)

    replace(`?page=${active + 1}`)
  }

  const prev = () => {
    if (active === 1) return

    setActive(active - 1)
    replace(`?page=${active - 1}`)
  }

  const onPageChange = (page: number) => {
    setActive(page)
    replace(`?page=${page}`)
  }

  if (standard) {
    return <Button onClick={loadMoreHandler}>Load More</Button>
  }

  return (
    <div className="flex items-center gap-4">
      <Button variant="secondary" disabled={active === 1} onClick={prev}>
        <SlArrowLeft />
      </Button>
      <div>
        {/* Page <strong className="text-gray-300">{active}</strong> of{' '}
        <strong className="text-gray-300">{pageCount}</strong> */}
        <ul className="flex gap-2">
          {showPages.map((page) => (
            <li
              key={page}
              className={twMerge(
                cx(
                  'cursor-pointer rounded bg-gray-700 px-3 py-1 transition-colors duration-300 ease-in-out hover:bg-gray-300',
                  {
                    'bg-gray-300 text-gray-700': page === active
                  }
                )
              )}
              onClick={() => onPageChange(page)}
            >
              {page}
            </li>
          ))}
        </ul>
      </div>
      <Button
        variant="secondary"
        onClick={next}
        disabled={active === pageCount}
      >
        <SlArrowRight />
      </Button>
    </div>
  )
}
