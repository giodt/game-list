import { Skeleton } from '../../components/ui/skeleton'

export default function Loading() {
  return (
    <main className="md:m-10 rounded-md grid grid-cols-4 gap-12">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
        <div className="bg-white p-8 col-span-4 md:col-span-2" key={id}>
          <Skeleton className="h-6 w-1/3 bg-zinc-200 mb-2" />
          <Skeleton className="h-6 w-1/4 bg-zinc-200 mb-4" />
          <Skeleton className="aspect-video w-full bg-zinc-300 rounded-md" />
        </div>
      ))}
    </main>
  )
}
