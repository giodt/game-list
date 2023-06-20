import Image from 'next/image'

type Game = {
  id: number
  background_image: string
  rating: number
  name: string
}

const getGames = async (): Promise<Game[]> => {
  const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG}`)
  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  const data = await res.json()
  return data.results
}

export default async function Home() {
  const games = await getGames()
  return (
    <main className='md:m-10 rounded-md grid grid-cols-4 gap-12'>
      {games.map((game) => (
        <div className='bg-white p-8 col-span-4 md:col-span-2' key={game.id}>
          <h1>{game.name}</h1>
          <p className='font-bold text-sm'>{game.rating}</p>
          <div className='aspect-video relative'>
            <Image src={game.background_image} fill className='object-cover rounded-md' alt={game.name} />
          </div>
        </div>
      ))}
    </main>
  )
}
﻿
