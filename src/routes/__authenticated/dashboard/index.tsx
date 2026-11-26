import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/__authenticated/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem(userID)) || [],
  )

  console.log(favourites)

  return (
    <>
      <header>
        <h1>Mein Bereich</h1>ä
      </header>
      <main>
        <section>
          <h2>Meine Favoriten</h2>
          <p>Keine Favoriten jetzt.</p>
          <Link to="/recipes" className="btn btn-warning">
            Zu den Rezepte
          </Link>
        </section>
      </main>
    </>
  )
}
