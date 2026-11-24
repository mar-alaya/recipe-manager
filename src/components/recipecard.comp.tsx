export function RecipeCard({ id, imgURL, name, category, minutes, handler }) {
  return (
    <>
      <div className="card bg-[#3c7238c4] w-96 shadow-md border border-[#DED3C2]">
        <figure>
          <img src={imgURL} alt={id} />
        </figure>
        <div className="	card-body gap-4 p-5">
          <h2 className="card-title">{name}</h2>
          <div className="flex flex-wrap items-center gap-2">
            <div className="	badge border-0 bg-[#E6EDDF] text-[#3C563A] font-semibold capitalize">
              {category}
            </div>
            <div className="badge bg-[#f2f8ec]">⏱️ ~{minutes} Minuten</div>
          </div>
          <button className="btn btn-warning" onClick={handler}>
            + Info
          </button>
        </div>
      </div>
    </>
  )
}
