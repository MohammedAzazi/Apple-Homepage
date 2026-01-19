export default function ActionButton({ paths, viewBox, className, clickFunc }) {
  return (
    <li>
      <a href="#" className="block" onClick={clickFunc}>
        <svg
          className={`${className} fill-current text-gray-900 transition delay-50 duration-300 ease-in-out hover:text-black`}
          viewBox={viewBox}
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.isArray(paths) ? (
            paths.map((path, index) => <path key={index} d={path} />)
          ) : (
            <path d={paths} />
          )}    
        </svg>
      </a>
    </li>
  )
}