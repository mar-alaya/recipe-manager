import { useEffect, useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

import { recipeDatabase } from '#/data/recipes_data'
import { Show, useUser } from '@clerk/react'

export const Route = createFileRoute('/__public/recipes/$recipeId')({
  component: RouteComponent,
})

function RouteComponent() {
  // Params um die URL zu erreichen

  const { recipeId } = Route.useParams()
  const selectedRecipe = recipeDatabase.find((recipe) => recipe.id === recipeId)

  if (!selectedRecipe) {
    return (
      <main>
        <h1>Dieses Rezept haben wir noch nicht auf dem Zettel.</h1>
        <p>Schau doch mal, welche Rezepte wir schon für dich haben.</p>
        <Link to="/recipes" className="btn">
          Zu der Rezepte
        </Link>
      </main>
    )
  }

  // Edit Servings Flow

  const [servings, setServings] = useState(1)

  function handleAddServings() {
    setServings(servings + 1)
  }

  function handleQuitServings() {
    if (servings >= 1) {
      setServings(servings - 1)
    }
  }

  // Favourites Flow

  const { user } = useUser()
  const userID = user?.id

  const [isFavourite, setisFavourite] = useState(false)
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem(userID)) || [],
  )

  function handleFavourite(favourite) {
    setisFavourite(!isFavourite)
    favourite = selectedRecipe
    setFavourites((prevFavourites) => {
      return [...prevFavourites, favourite]
    })
  }

  useEffect(() => {
    localStorage.setItem(userID, JSON.stringify(favourites))
  }, [favourites, userID])

  return (
    <>
      <header className="flex min-h-[40vh] flex-col items-center justify-center bg-[url('/background.png')] px-6 py-10 text-center">
        <h1 className="mb-5 font-serif text-4xl font-bold sm:text-5xl">
          {selectedRecipe.name}
        </h1>
        <div className="flex flex-wrap justify-center gap-3">
          <div className="badge border-0 bg-[#E6EDDF] font-semibold capitalize text-[#3C563A]">
            {selectedRecipe.category}
          </div>
          <div className="badge border-0 bg-[#f2f8ec]">
            ⏱️ ~{selectedRecipe.minutes} Minuten
          </div>
        </div>
      </header>

      <main className="bg-[#FAF7F0] px-6 py-8 text-[#29251F] sm:py-12">
        <section className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-start">
          <img
            src={selectedRecipe.imgURL}
            className="rounded-2xl lg:w-1/2"
          ></img>
          <div className=" rounded-2xl border border-[#DED3C2] bg-[#FFFDF8] p-5 lg:flex-1">
            <h2 className="mb-3 font-serif text-2xl font-bold">Portionen</h2>
            <div className="mb-5 border-b border-[#DED3C2] pb-5">
              <div className="flex items-center gap-3">
                <button
                  className="btn btn-warning"
                  onClick={handleQuitServings}
                  disabled={servings < 1}
                >
                  -
                </button>
                <p className="min-w-8 text-center text-lg font-semibold">
                  {servings}
                </p>
                <button className="btn btn-warning" onClick={handleAddServings}>
                  +
                </button>
              </div>
            </div>
            <div>
              <h2 className="mb-3 font-serif text-2xl font-bold">Zutaten</h2>
              {selectedRecipe.ingredients.map((ingredient) => {
                return (
                  <div className="flex justify-between gap-4 border-b border-[#DED3C2] py-3">
                    <p>{ingredient.name}</p>
                    <p className="shrink-0 whitespace-nowrap text-right font-semibold ">
                      {ingredient.amount * servings} {ingredient.unit}
                    </p>
                  </div>
                )
              })}
            </div>
            <Show when={'signed-in'}>
              <button
                className="btn btn-warning my-5"
                onClick={handleFavourite}
              >
                {isFavourite
                  ? '❤︎ Aus Favoriten entfernen'
                  : '♡ Zu Favoriten hinzufügen '}
              </button>
            </Show>
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-6xl">
          <h2 className="mb-4 font-serif text-2xl font-bold">Zubereitung</h2>
          {selectedRecipe.instructions.map((instruction) => {
            return (
              <ol className="mt-3 list-disc pl-5">
                <li>{instruction}</li>
              </ol>
            )
          })}
        </section>
      </main>
    </>
  )
}
