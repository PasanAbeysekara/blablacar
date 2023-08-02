import React from 'react'
import HeroBackground from '../../../assets/2-hero-background.jpg'
import SearchBar from '../../SearchBar';

const TopBanner = () => {
    return (
        <div className='relative w-full'>
          {/* set background image as hero-backgourn.jpg in src/assets folder */}
          <img src={HeroBackground} className='w-full block' alt="" />
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-cover bg-center">
              <div className="absolute flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-20">
                  <h1 className="text-5xl font-bold text-white">Your pick of rides at low prices</h1>
                  <div className='shadow-md'>
                      <SearchBar/>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default TopBanner;