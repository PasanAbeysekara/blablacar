import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useState } from 'react';

const WhereToGo = () => {
    const initialRides = [
      // Your initial ride card data here (three cards)
      { id: 1, departure: 'Colombo',destination:'Gampaha' },
      { id: 2, departure: 'Kandy ',destination:'Matale' },
      { id: 3, departure: 'Galle',destination:'Mathara' },
    ];
  
    const additionalRides = [
      // Additional ride card data here (multiple of three cards)
      { id: 4, departure: 'Colombo',destination:'Negombo' },
      { id: 5, departure: 'Negombo ',destination:'Chilaw' },
      { id: 6, departure: 'Jaffna ',destination:'Vavuniya' },
      { id: 7, departure: 'Galle ',destination:'Colombo' },
      { id: 8, departure: 'Ella ',destination:'Nuwara Eliya' },
      { id: 9, departure: 'Colombo  ',destination:'Kandy' },
      { id: 10, departure: 'Moratuwa',destination:'Colombo' },
      { id: 11, departure: 'Ja-Ela ',destination:'Colombo' },
      { id: 12, departure: 'Kandy  ',destination:'Gampaha' },
      { id: 13, departure: 'Galle ',destination:'Hikkaduwa' },
      { id: 14, departure: 'Anuradhapura  ',destination:'Dambulla' },
      { id: 15, departure: 'Mount Lavinia  ',destination:'Colombo ' },
      // ... (add more ride cards as needed)
    ];
  
    const [showAdditionalRides, setShowAdditionalRides] = useState(false);
    const allRides = [...initialRides, ...(showAdditionalRides ? additionalRides : [])];
  
    const toggleAdditionalRides = () => {
      setShowAdditionalRides((prevState) => !prevState);
    };
  
    return (
      <div className='bg-blue-950'>
          <div className='flex justify-center py-6'>
            <h1 className='text-white text-3xl font-semibold'>Where do you want to go?</h1>
          </div>
          <div className='flex justify-center items-center'>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {allRides.map((ride) => (
                    <button key={ride.id} className='flex justify-center p-4 bg-white hover:bg-gray-200 text-blue-950 font-semibold px-4 py-2  border rounded-md'>
                        <span>{ride.departure}</span>
                        <ArrowRightAltIcon sx={{ color: 'gray', marginLeft:'10px', marginRight:'10px' }}/>
                        <span>{ride.destination}</span>
                    </button>
                  ))}
              </div>
              
          </div>
          <div className='flex justify-center pb-4'>
              {additionalRides.length > 0 && (
                  <button
                      onClick={toggleAdditionalRides}
                      className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-full"
                  >
                      {showAdditionalRides ? 'See Fewer Rides' : 'See Our Most Popular Rides'}
                  </button>
              )}
          </div>
          
      </div>
      
    );
  };

export default WhereToGo;