import Skeleton from '@components/UI/skeleton'

export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} />
      ))}
    </div>
  )
}
