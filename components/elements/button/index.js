export default function Button({ className, title, type, ariaLabel }) {
  return (
    <>
      <button className={`${className}`} type={type} aria-label={ariaLabel}>
        {title}
      </button>
    </>
  )
}
