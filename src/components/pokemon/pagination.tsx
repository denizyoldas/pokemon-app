'use client'

import React from 'react'
import Button from '../UI/button'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft
} from 'react-icons/md'

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
  const pageCount = Math.round(count / limit)
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
      <Button
        variant="secondary"
        disabled={active === 1}
        onClick={() => onPageChange(1)}
      >
        <MdKeyboardDoubleArrowLeft />
      </Button>
      <Button variant="secondary" disabled={active === 1} onClick={prev}>
        <MdKeyboardArrowLeft />
      </Button>
      <div>
        <ul className="flex gap-2">
          {showPages.map((page) => (
            <li
              key={page}
              className={twMerge(
                cx(
                  'cursor-pointer rounded bg-gray-700 px-3 py-1 hover:bg-gray-300',
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
        <MdKeyboardArrowRight />
      </Button>
      <Button
        variant="secondary"
        disabled={active === pageCount}
        onClick={() => onPageChange(pageCount)}
      >
        <MdKeyboardDoubleArrowRight />
      </Button>
    </div>
  )
}
