export default function NavLinks({ section, clickFunc }) {
  return (
    <li>
        <a onClick={clickFunc} className="text-darkgray-900 transition delay-50 duration-300 ease-in-out no-underline hover:text-black" href="#">{section}</a>
    </li>
  )
}
