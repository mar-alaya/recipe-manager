export function HeroCTA() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D)',
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Deine Rezepte. Genau die richtige Menge.
          </h1>
          <p className="mb-5">
            Ob du für dich allein oder für Besuch kochst: Wähle ein Rezept,
            stell die gewünschte Anzahl an Portionen ein und sieh sofort, wie
            viel du von jeder Zutat brauchst.
          </p>
          <button className="btn btn-primary">Rezepte entdecken</button>
        </div>
      </div>
    </div>
  )
}
