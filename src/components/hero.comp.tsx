export function Hero({ title, subtitle, imgURL }) {
  return (
    <>
      <div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage: `url(${imgURL})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{subtitle}</p>
          </div>
        </div>
      </div>
    </>
  )
}
