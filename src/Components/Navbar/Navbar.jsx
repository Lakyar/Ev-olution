import './Navbar.css'
import AOS from 'aos'

import '../../../node_modules/aos/dist/aos.css'
AOS.init();

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo" data-aos-duration="2000" data-aos="fade-down">EV-oluion</div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact' >Contact</li>
      </ul>
    </div>
  )
}

export default Navbar