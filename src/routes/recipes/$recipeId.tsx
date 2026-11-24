import React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

import { recipeDatabase } from '#/data/recipes_data'

export const Route = createFileRoute('/recipes/$recipeId')({
  component: RouteComponent,
})

function RouteComponent() {
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

  return (
    <>
      <header>
        <h1>{selectedRecipe.name}</h1>
        <div className="badge badge-secondary">{selectedRecipe.category}</div>
        <div className="badge badge-outline">
          ⏱️ ~{selectedRecipe.minutes} Minuten
        </div>
      </header>
      <main>
        <section className="flex">
          <img src={selectedRecipe.imgURL} className="max-w-lg"></img>
          <div>
            <div className="flex gap-5">
              <h2>Portionen</h2>
              <p>{selectedRecipe.servings}</p>
            </div>
            <div>
              <h2>Zutaten</h2>
              {selectedRecipe.ingredients.map((ingredient) => {
                return (
                  <div className="flex justify-between">
                    <p>{ingredient.name}</p>
                    <p>
                      {ingredient.amount} {ingredient.unit}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <section>
          <h2>Zubereitung</h2>
          {selectedRecipe.instructions.map((instruction) => {
            return (
              <ol>
                <li>{instruction}</li>
              </ol>
            )
          })}
        </section>
      </main>
    </>
  )
}
