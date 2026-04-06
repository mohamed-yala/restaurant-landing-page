

function DishCard({
  img,
  title,
  description,
  price,
  isWhiteBackground = true,
}) {
  return (
    <article className="relative pt-16">
      <img
        src={img}
        alt={title}
        className="absolute left-1/2 top-0 z-20 h-36 w-36 -translate-x-1/2 rounded-full object-cover"
      />

      <span className="absolute right-8 top-7 z-30 rounded-full bg-slate-900 px-2 py-2 text-sm font-semibold text-white shadow-[0_10px_18px_rgba(15,23,42,0.2)]">
        ${price}
      </span>

      <div
        className={` w-full rounded-tl-[30px] rounded-br-[30px] rounded-tr-[10px] border-2 border-white px-3 pb-12 pt-28 text-center ${
          isWhiteBackground ? 'bg-white shadow-[0_14px_28px_rgba(15,23,42,0.05)]' : 'bg-transparent'
        }`}
      >
        <h3 className="font-serif text-[15px] font-semibold leading-tight text-slate-900  max-[1064px]:text-[13px] max-[983px]:text-[15px]">{title}</h3>
        <p className="mx-auto mt-4 max-w-[190px] text-[14px] leading-6 text-slate-500  max-[1064px]:text-[12px]  max-[1064px]:leading-5  max-[1064px]:max-w-[180px] max-[983px]:text-[14px] max-[983px]:leading-5 max-[983px]:max-w-[200px]">{description}</p>
      </div>

    </article>
  )
}

export default DishCard
