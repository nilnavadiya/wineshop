import React from 'react'
import Button from '../../common/Button'

const AboutBanner = () => {
    return (
        <div className='bg-[#d00035] relative'>
            <div className='max-w-6xl mx-auto px-4 lg:px-14 py-12'>
                <div className='text-white text-center'>
                    <span className='text-[25px] font-lobster mb-3'>Winery Offers</span>
                    <h1 className='text-[50px] font-raleway font-bold'>Our Latest Offers</h1>
                    <p className='text-base font-raleway'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
                    </p>
                    <div className='flex justify-center'>
                        <div className='w-24'>
                            <Button id="" type="button" label={"Shop"} abc="bg-white rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBanner