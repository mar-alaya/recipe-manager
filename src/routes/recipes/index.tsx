import { Hero } from '#/components/hero.comp'
import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router'
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
          imgURL="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        />
      </header>
      <main>
        <section className="flex flex-wrap justify-center gap-6 m-4">
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
