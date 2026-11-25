import { Hero } from '#/components/hero.comp'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { recipeDatabase } from '#/data/recipes_data'
import { RecipeCard } from '#/components/recipecard.comp'

export const Route = createFileRoute('/recipes/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()

  return (
    <>
      <header>
        <Hero
          title="Rezepte"
          subtitle="Lust auf ein gemütliches und unkompliziertes Essen? Such dir aus, worauf du heute Appetit hast."
          imgURL="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        />
      </header>
      <main className="bg-[#FAF7F0]">
        <section className="flex flex-wrap justify-center gap-6 p-4">
          {recipeDatabase.map((recipe) => (
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
        </section>
      </main>
    </>
  )
}
