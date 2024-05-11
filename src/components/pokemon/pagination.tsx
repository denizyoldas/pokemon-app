'use client'

import React from 'react'
import Button from '../UI/button'
import { useRouter } from 'next/navigation'

interface PaginationProps {
  currentCount: number
  limit: number
  standard?: boolean
  loadMoreHandler?: () => void
}

export default function Pagination({
  currentCount,
  limit,
  standard = false,
  loadMoreHandler
}: PaginationProps) {
  const { replace } = useRouter()
  const [active, setActive] = React.useState(1)
  const pageCount = Math.ceil(currentCount / limit)

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

  if (standard) {
    return <Button onClick={loadMoreHandler}>Load More</Button>
  }

  return (
    <div className="flex items-center gap-8">
      <Button onClick={prev} disabled={active === 1}>
        Prev
      </Button>
      <div>
        Page <strong className="text-gray-300">{active}</strong> of{' '}
        <strong className="text-gray-300">{pageCount}</strong>
      </div>
      <Button onClick={next} disabled={active === pageCount}>
        Next
      </Button>
    </div>
  )
}
