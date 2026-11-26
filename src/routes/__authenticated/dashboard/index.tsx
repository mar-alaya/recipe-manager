import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useUser } from '@clerk/react'
import { useEffect, useState } from 'react'

import { RecipeCard } from '#/components/recipecard.comp'

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
      <header>
        <h1>Mein Bereich</h1>
      </header>
      <main>
        <section>
          <h2>Meine Favoriten</h2>
          {favourites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              imgURL={recipe.imgURL}
              name={recipe.name}
              category={recipe.category}
              minutes={recipe.minutes}
              handler={() => navigate({ to: `/recipes/${recipe.id}` })}
            />
          ))}
          <Link to="/recipes" className="btn btn-warning">
            Zu den Rezepte
          </Link>
        </section>
      </main>
    </>
  )
}
