import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useState } from 'react';
import HelpReusableCard from './HelpReusableCard';

const HelpCenter = () => {
  
    const qns = [
      { title:"How do I book a carpool ride?",content:"You can book a carpool ride on our mobile app, or on blablacar.com. Simply search for your destination, choose the date you want to travel and pick the carpool that suits you best! Some rides can be booked instantly, while other rides require manual approval from the driver. Either way, booking a carpool ride is fast, simple and easy."},
      { title: "How do I publish a carpool ride?",content:'Offering a carpool ride on BlaBlaCar is easy. To publish your ride, use our mobile app or blablacar.com. Indicate your departure and arrival points, the date and time of your departure, how many passengers you can take and the price per seat. You’ll also need to choose how you want to accept bookings (either automatically or manually), and you have the option of adding any important details you think your passengers should know about. Then tap ‘Publish ride’ and you’re done!' },
      { title: 'How do I cancel my carpool ride?',content:'If you have a change of plans, you can always cancel your carpool ride from the ‘Your rides’ section of our app. The sooner you cancel, the better. That way the driver has time to accept new passengers. The amount of your refund will depend on how far in advance you cancel. If you cancel more than 24 hours before departure, for example, you’ll receive a full refund, excluding the service fee.' },
      { title: 'What are the benefits of travelling by carpool?',content:'There are multiple advantages to carpooling, over other means of transport. Travelling by carpool is usually more affordable, especially for longer distances. Carpooling is also more eco-friendly, as sharing a car means there will be fewer cars on the road, and therefore fewer emissions. Taking a carpool ride is also a safe way to travel in the current times. Because there are only a few people in a car, you have fewer points of contact and there’s less risk than other travel options.' },
      { title: 'How much does a carpool ride cost? ',content:'The costs of a carpool ride can vary greatly, and depend on factors like distance, time of departure, the demand of that ride and more. It is also up to the driver to decide how much to charge per seat, so it’s hard to put an exact price tag on a ride. Check out some of our top carpool destinations to get an idea of price, or start searching for your next carpool ride on blablacar.com.' },
      { title: 'How do I start carpooling? ',content:'Carpooling with BlaBlaCar is super easy, and free! Simply sign up for an account and tell us some basic details about yourself. Once you have a BlaBlaCar account, you can start booking or publishing rides directly on our app or website.' },
    ];
  
    return (
      <div className='flex justify-center'>
        <div className='bg-white text-blue-950 max-w-[1000px]'>
          <div className='flex justify-center py-6'>
            <h1 className='text-3xl font-semibold'>Carpool Help Centre</h1>
          </div>
          <div className='flex justify-center items-center'>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {qns.map((qn) => (
                    <div className='px-2'>
                        <h1 className='text-lg font-bold py-3'>
                            {qn.title}
                        </h1>
                        <HelpReusableCard children={qn.content}/>
                    </div>
                  ))}
              </div>   
          </div>
      </div>
      </div>
      
    );
  };

export default HelpCenter;