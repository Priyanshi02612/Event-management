import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <div className='logo'>
        EVENT<span style={{ marginTop: '12px' }}>.ly</span>
      </div>

      <div className={showMenu ? 'navLinks showmenu' : 'navLinks'}>
        <div className='links'>
          <Link to='hero' spy={true} smooth={true} duration={500}>
            Home
          </Link>
          <Link to='services' spy={true} smooth={true} duration={500}>
            Services
          </Link>
          <Link to='about' spy={true} smooth={true} duration={500}>
            About
          </Link>
          <Link to='contact' spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </div>
      </div>

      <div className='hamburger' onClick={() => setShowMenu(!showMenu)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
