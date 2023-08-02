import React from 'react'
import HeroIntroCards from './Hero/IntroCards/HeroIntroCards';
import TopBanner from './Hero/TopBanner/TopBanner';
import SafetyInstruction from './Hero/Safety/SafetyInstruction';
import OfferRide from './Hero/OfferRide/OfferRide';
import RideCards from './Hero/WhereToGO/RideCards';
import WhereToGo from './Hero/WhereToGO/WhereToGo';
import HelpCenter from './Hero/HelpCenter/HelpCenter';


function Hero() {
  return (
    <div>
      
      {/* TopBanner */}
      <div>
        <TopBanner/>
      </div>

      {/* IntroCards */}
      <div>
        <HeroIntroCards/>
      </div>
      
      {/* safety instructions */}
      <div>
        <SafetyInstruction/>  
      </div>

      {/* Offer Ride */}
      <div>
        <OfferRide/>
      </div>

      {/* Where to go */}
      <WhereToGo/>

      {/* Help Center */}
      <HelpCenter/>
    </div>
  )
}

export default Hero