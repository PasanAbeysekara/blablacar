import React from 'react';
import HeroOfferRideImage from '../../../assets/images/Hero/Hero-offer-ride.png';


const OfferRide = () => {
    return(
        <div className='flex justify-center items-center'>
            <div className='max-w-lg'>
                <h1 className='text-3xl font-bold text-blue-950'>
                Driving in your car soon?
                </h1>
                <p className='text-gray-500 py-2'>
                Good news, drivers: get rewarded for your good habits! Earn the Carpool Bonus by completing 3 carpools in 3 months. See eligibility conditions.
                </p>
                <div className='flex justify-center mr-3'>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2  border rounded-full'>
                        Offer a Ride
                    </button>
                </div>
            </div>
            <img src={HeroOfferRideImage} className='w-[400px] block' alt="" />
        </div>
    );
}

export default OfferRide;