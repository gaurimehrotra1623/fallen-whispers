"use client"

import "./Navbar.css"
import { useState } from "react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="nav">
      <div className="nav-logo">Fallen Whispers</div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "change" : ""}`}></div>
        <div className={`bar ${menuOpen ? "change" : ""}`}></div>
        <div className={`bar ${menuOpen ? "change" : ""}`}></div>
      </div>
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#storyline" onClick={() => setMenuOpen(false)}>
            Storyline
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </li>
        <li className="nav-download">
          <a
            href="https://www.ubisoft.com/en-gb/game/assassins-creed"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Download
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar

