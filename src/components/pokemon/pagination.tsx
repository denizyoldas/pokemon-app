'use client'

import React from 'react'
import Button from '../UI/button'
// import { useRouter } from 'next/navigation'

interface PaginationProps {
  limit: number
  currentCount?: number
}

export default function Pagination({
  limit,
  currentCount = 10
}: PaginationProps) {
  // const { replace } = useRouter()

  const loadMoreHandler = () => {
    // replace(`/?limit=${+currentCount + 10}`)
  }

  return (
    <div className="mt-10 flex items-center justify-center">
      <Button onClick={loadMoreHandler}>Load More</Button>
    </div>
  )
}
