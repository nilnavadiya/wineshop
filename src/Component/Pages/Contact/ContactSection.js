import React from 'react'
import hero from '../../../assets/images/about-hero.jpg'


const ContactSection = ({ title }) => {
    return (
        <div className='w-full h-[280px] lg:h-full relative'>
            <img src={hero} className="w-full h-full object-cover" />
            <div className='absolute w-full h-full flex items-center top-0'>
                <div className='max-w-7xl mx-auto px-4 lg:px-14'>
                    <h1 className='text-white text-center font-bold'>{title}</h1>
                    <p className='text-white text-center'>
                        <a href='/' className='text-white no-underline cursor-pointer'>Home</a><span className='text-xl font-bold'> / </span><span>Contact</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactSection