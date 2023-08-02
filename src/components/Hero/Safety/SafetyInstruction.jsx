import React from 'react';
import HeroSafetyImage from '../../../assets/images/Hero/Hero-safety.png';

const SafetyInstruction = () => {
    return(
        <div className='text-white bg-blue-500 flex justify-center items-center'>
            <img src={HeroSafetyImage} className='w-[400px] block' alt="" />
            <div className='max-w-lg'>
                <h1 className='text-3xl font-bold'>
                Your safety is our priority
                </h1>
                <p className='py-2'>
                At BlaBlaCar, we're working hard to make our platform as secure as it can be. But when scams do happen, we want you to know exactly how to avoid and report them. Follow our tips to help us keep you safe.
                </p>
                <div className='flex justify-center mt-4'>
                    <button className='bg-white hover:bg-gray-200 text-blue-500 font-bold px-4 py-2  border rounded-full'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SafetyInstruction;