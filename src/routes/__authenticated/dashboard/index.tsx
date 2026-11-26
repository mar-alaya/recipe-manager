import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useUser } from '@clerk/react'
import { useEffect, useState } from 'react'

import { FavouriteCard } from '#/components/favouritecard.comp'

export const Route = createFileRoute('/__authenticated/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { user } = useUser()
  const userID = user?.id
  console.log(userID)

  const [favourites, setFavourites] = useState([])

  useEffect(() => {
    setFavourites(JSON.parse(localStorage.getItem(userID)))
  }, [userID])

  console.log(favourites)

  const navigate = useNavigate()

  return (
    <>
      <header className="flex min-h-[30vh] flex-col items-center justify-center bg-[url('/background.png')] px-6 py-10 text-center">
        <h1 className="mb-5 font-serif text-4xl font-bold sm:text-5xl">
          Mein Bereich
        </h1>
      </header>
      <main className="bg-[#FAF7F0]">
        <section className="p-4">
          <h2 className="mb-3 text-2xl font-bold">Meine Favoriten</h2>
          <div className="flex flex-wrap gap-5">
            {favourites.map((recipe) => (
              <FavouriteCard
                key={recipe.id}
                id={recipe.id}
                imgURL={recipe.imgURL}
                name={recipe.name}
                handler={() => navigate({ to: `/recipes/${recipe.id}` })}
              />
            ))}
          </div>
          <Link to="/recipes" className="btn btn-warning">
            Zu den Rezepte
          </Link>
        </section>
      </main>
    </>
  )
}
