import React from 'react'
import card1 from '../../../assets/images/home-card1.jpg'
import card2 from '../../../assets/images/home-card2.jpg'

const HomeCards = () => {
    return (
        <div className='max-w-7xl mx-auto py-[80px] px-4 lg:px-14'>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
            <div data-aos="fade-left">

                <div className="zoom-effect-container w-full h-[300px] relative overflow-hidden">
                    <div className="image-card absolute w-full h-full top-0 left-0">
                        <img src={card1} className='w-full h-full object-cover rounded-xl' alt="Card Image" />
                    </div>
                    
                    <div className='absolute inset-0 flex items-center'>
                        <h1 className='text-white px-4'>
                            <span className='text-[35px] font-bold'>20% Off Lorem Ipsum</span>
                            <span className='text-xl font-raleway block'>on all weekend sale</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right">

                <div className="zoom-effect-container w-full h-[300px] relative overflow-hidden">
                    <div className="image-card absolute w-full h-full top-0 left-0">
                        <img src={card2} className='w-full h-full object-cover rounded-xl' alt="Card Image" />
                    </div>
                    <div className='absolute inset-0 flex items-center'>
                        <h1 className='text-white px-4'>
                            <span className='text-[35px] font-bold'>Free Shipping Lorem Ipsum</span>
                            <span className='text-xl font-raleway block'>on order over $50</span>
                        </h1>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HomeCards