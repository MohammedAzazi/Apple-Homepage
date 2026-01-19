import { useState } from "react"
import { icons } from "./icons"
import NavLinks from "./NavLinks"
import ActionButton from "./ActionButton"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function onClick() {
      console.log("Clicked")
  }

  function toggleMenu() {
      setIsMenuOpen(!isMenuOpen)
  }

  return (
      <nav className="fixed top-0 right-0 left-0 p-3.5 bg-white/72 text-black backdrop-blur-md z-50 w-auto">
          <ul className="text-xs flex justify-center items-center gap-9.5 font-normal">
              
              <ActionButton clickFunc={onClick} {...icons.apple} />

              <div className="hidden lg:flex gap-9.5">
                  <NavLinks section={"Store"} clickFunc={onClick} />
                  <NavLinks section={"Mac"} clickFunc={onClick} />
                  <NavLinks section={"iPad"} clickFunc={onClick} />
                  <NavLinks section={"iPhone"} clickFunc={onClick}/>
                  <NavLinks section={"Watch"} clickFunc={onClick}/>
                  <NavLinks section={"Vision"} clickFunc={onClick}/>
                  <NavLinks section={"AirPods"} clickFunc={onClick}/>
                  <NavLinks section={"TV & Home"} clickFunc={onClick}/>
                  <NavLinks section={"Entertainment"} clickFunc={onClick}/>
                  <NavLinks section={"Accessories"} clickFunc={onClick}/>
                  <NavLinks section={"Support"} clickFunc={onClick}/>
              </div>

              <div className="flex gap-9.5 ml-auto lg:ml-0">
                  <ActionButton clickFunc={onClick} {...icons.search} />
                  <ActionButton clickFunc={onClick} {...icons.bag} />
                  
                  <button 
                      onClick={toggleMenu}
                      className="lg:hidden flex flex-col gap-1 justify-center items-center w-4 h-4"
                  >
                      <span className="w-full h-0.5 bg-black"></span>
                      <span className="w-full h-0.5 bg-black"></span>
                  </button>
              </div>
          </ul>

          {isMenuOpen && (
              <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg overflow-y-auto max-h-[80vh]">
                  <ul className="flex flex-col p-4 gap-2">
                      <NavLinks section={"Store"} clickFunc={onClick} />
                      <NavLinks section={"Mac"} clickFunc={onClick} />
                      <NavLinks section={"iPad"} clickFunc={onClick} />
                      <NavLinks section={"iPhone"} clickFunc={onClick}/>
                      <NavLinks section={"Watch"} clickFunc={onClick}/>
                      <NavLinks section={"Vision"} clickFunc={onClick}/>
                      <NavLinks section={"AirPods"} clickFunc={onClick}/>
                      <NavLinks section={"TV & Home"} clickFunc={onClick}/>
                      <NavLinks section={"Entertainment"} clickFunc={onClick}/>
                      <NavLinks section={"Accessories"} clickFunc={onClick}/>
                      <NavLinks section={"Support"} clickFunc={onClick}/>
                  </ul>
              </div>
          )}
      </nav>
    )
}