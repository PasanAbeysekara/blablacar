import React, { useState } from 'react';

const RideCards = () => {
  const initialRides = [
    // Your initial ride card data here (three cards)
    { id: 1, name: 'Ride 1' },
    { id: 2, name: 'Ride 2' },
    { id: 3, name: 'Ride 3' },
  ];

  const additionalRides = [
    // Additional ride card data here (multiple of three cards)
    { id: 4, name: 'Ride 4' },
    { id: 5, name: 'Ride 5' },
    { id: 6, name: 'Ride 6' },
    // ... (add more ride cards as needed)
  ];

  const [showAdditionalRides, setShowAdditionalRides] = useState(false);
  const allRides = [...initialRides, ...(showAdditionalRides ? additionalRides : [])];

  const toggleAdditionalRides = () => {
    setShowAdditionalRides((prevState) => !prevState);
  };

  return (
    <div className='bg-green-200'>
        <div className='flex justify-center items-center'>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {allRides.map((ride) => (
                <div key={ride.id} className="border p-4">
                    {ride.name}
                </div>
                ))}
            </div>
        </div>
        <div className='flex justify-center'>
            {additionalRides.length > 0 && (
                <button
                    onClick={toggleAdditionalRides}
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    {showAdditionalRides ? 'See Fewer Rides' : 'See More Rides'}
                </button>
            )}
        </div>
        
    </div>
    
  );
};

export default RideCards;
