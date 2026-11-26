export function FavouriteCard({ id, imgURL, name, handler }) {
  return (
    <>
      <div
        className="card w-50 shadow-md my-5 hover:shadow-xl bg-base-100 cursor-pointer"
        onClick={handler}
      >
        <figure className="px-10 pt-10">
          <img src={imgURL} alt={id} className="rounded-xl" />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
        </div>
      </div>
    </>
  )
}
