import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">Fallen Whispers</div>
      <ul className="nav-menu">
        <li><a href="#storyline">Storyline</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li className='nav-download'><a href="https://www.ubisoft.com/en-gb/game/assassins-creed" target='_blank'>Download</a></li>
      </ul>


    </div>
  )
}

export default Navbar