


function Button({
  text,
  color = 'bg-orange-500',
  textColor = 'text-white',
  className = '',
}) {
  return (
    <button
      type="button"
      className={`${color} ${textColor} ${className} rounded-xl px-6 py-3 text-sm font-semibold shadow-[0_10px_20px_rgba(234,88,12,0.28)] transition duration-200 hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400`}
    >
      {text}
    </button>
  )
}

export default Button
