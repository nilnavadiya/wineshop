import React from 'react'
import image from '../../../assets/images/about_time.png'

const AboutDetails = () => {
    return (
        <div className='bg-[#f5f5f5]'>
            <div className='max-w-7xl mx-auto px-4 lg:px-14 py-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='flex justify-center'>
                        <img src={image} className='w-[400px] h-[600px] object-cover'/>
                    </div>
                    <div>
                        <h4 className='text-2xl font-lobster text-[#d00035]'>Timeless classic</h4>
                        <h1 className='texl-5xl font-raleway font-bold'>Traditional Wine Varieties For Connoisseurs</h1>
                        <div>
                            <p>From the very beginning of our winery, we have concentrated on the production of classic wines.</p>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutDetails