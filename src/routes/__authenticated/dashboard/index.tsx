import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/__authenticated/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <header>
        <h1>Mein Bereich</h1>
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
