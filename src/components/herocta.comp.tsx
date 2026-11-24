import { Link } from '@tanstack/react-router'

export function HeroCTA() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D)',
      }}
    >
      <div className="hero-content text-left w-full max-w-none justify-start px-6 md:px-16">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">
            Rezepte mit genau die richtige Menge.
          </h1>
          <p className="mb-5">
            Ob du für dich allein oder für Besuch kochst: Wähle ein Rezept,
            stell die gewünschte Anzahl an Portionen ein und sieh sofort, wie
            viel du von jeder Zutat brauchst.
          </p>
          <Link to="/recipes" className="btn btn-warning">
            Rezepte entdecken
          </Link>
        </div>
      </div>
    </div>
  )
}
