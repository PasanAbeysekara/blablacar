// AnotherComponent.js
import React from 'react';
import HeroReusableIntroCard from './HeroReusableIntroCard';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';

const HeroIntroCards = () => {
  return (
    <div className='flex flex-wrap justify-center mx-auto'>
      <HeroReusableIntroCard title="Your pick of rides at low prices" content="No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices." icoName={<AttachMoneyOutlinedIcon/>} />
      <HeroReusableIntroCard title="Trust who you travel with" content="We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform." icoName={<SecurityOutlinedIcon/>}/>
      <HeroReusableIntroCard title="Scroll, click, tap and go!" content="Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes." icoName={<FlashOnOutlinedIcon/>}/>
    </div>
  );
};

export default HeroIntroCards;
