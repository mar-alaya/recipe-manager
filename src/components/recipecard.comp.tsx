export function RecipeCard({ id, imgURL, name, category, minutes, handler }) {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={imgURL} alt={id} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-end">
            <div className="badge badge-secondary">{category}</div>
            <div className="badge badge-outline">⏱️ ~{minutes} Minuten</div>
          </div>
          <button className="btn" onClick={handler}>
            + Info
          </button>
        </div>
      </div>
    </>
  )
}
