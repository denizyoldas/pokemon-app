import React from 'react'

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="animate-spin h-32 w-32 rounded-full border-b-2 border-t-2 border-gray-900"></div>
    </div>
  )
}
