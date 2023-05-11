import React from 'react';

const SmallHeader = () => {
    return (
        <div className='bg-[#ECEAE3] '>
            <div className='md:grid md:grid-cols-4 md:gap-9 px-24 py-12'>
            <div className=''>
                <img src={'https://i.ibb.co/DpVs0Sx/1.png'} className="w-16 h-16 mb-4" />
                <h1 className='text-xl font-semibold italic'>Awesome Aroma</h1>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className=''>
                <img src={'https://i.ibb.co/2k5nbGg/2.png'} className="w-16 h-16 mb-4"/>
                <h1 className='text-xl font-semibold italic'>High Quality</h1>
                <p>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className=''>
                <img src={'https://i.ibb.co/Jnb1JVv/3.png'} className="w-16 h-16 mb-4" />
                <h1 className='text-xl font-semibold italic'>Pure Grades</h1>
                <p>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className=''>
                <img src={'https://i.ibb.co/hdy5R9F/4.png'} alt="" />
                <h1 className='text-xl font-semibold italic'>Proper Roasting</h1>
                <p>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
        </div>
    );
};

export default SmallHeader;