import React from 'react';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section className='hero'>
      <img src='/restaurant.jpg' alt='restaurant' />

      <div className='item'>
        <h3>Dream Maker</h3>

        <div>
          <h3>Your personal dream maker</h3>

          <p>
            We believe that it is all about the BIG DREAMS and the samll
            details!
          </p>

          <Link to='contact' spy={true} smooth={true} duration={500} className='book-now'>
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
