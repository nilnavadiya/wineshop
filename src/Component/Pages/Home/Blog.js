import React from 'react'
import blog01 from '../../../assets/images/blogImg1.jpg'
import blog02 from '../../../assets/images/blogImg2.jpg'
import blog03 from '../../../assets/images/blogImg3.jpg'

const Blog = () => {
    const blogDetails = [
        {
            date: "27",
            month: "march",
            img: blog01,
            title: "How Often Should You Have Your Brake System Inspected?",
            discription:
                "Your vehicle’s brake system is a critical component for your safety on the road. Regular inspections and the maintenance are essential to ensure.",
            time: "6 mins ago",
        },
        {
            date: "27",
            month: "march",
            img: blog02,
            title: "How Often Should You Have Your Brake System Inspected?",
            discription:
                "Your vehicle’s brake system is a critical component for your safety on the road. Regular inspections and the maintenance are essential to ensure.",
            time: "6 mins ago",
        },
        {
            date: "27",
            month: "march",
            img: blog03,
            title: "How Often Should You Have Your Brake System Inspected?",
            discription:
                "Your vehicle’s brake system is a critical component for your safety on the road. Regular inspections and the maintenance are essential to ensure.",
            time: "6 mins ago",
        },
    ];
    return (
        <div className='bg-[#f5f5f5] py-12'>
            <div className='max-w-7xl mx-auto px-4 lg:px-14'>
                <div className="flex h-full items-center justify-center">
                    <div className="px-6 text-center text-black md:px-12">
                        <h1 className="mt-2 mb-6 text-2xl text-[#d00035] font-medium font-lobster">
                            News & Articles
                        </h1>
                        <p className="mt-2 text-5xl text-raleway font-bold ">
                            Our Latest Blogs
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    {blogDetails.map((value, id) => (
                        <div className="rounded overflow-hidden shadow-lg">
                            <a href="/"></a>
                                <div className="relative">
                                    <a href="/">
                                        <img
                                            className="w-full"
                                            src={value.img}
                                            alt="Sunset in the mountains"
                                        />
                                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                </a>
                                <a href="/">
                                    <div className="text-sm absolute top-0 right-0 bg-[#d00035] px-4 text-white h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#d00035] transition duration-500 ease-in-out">
                                        <span className="font-bold">{value.date}</span>
                                        <small>{value.month}</small>
                                    </div>
                                </a>
                            </div>
                            <div className="px-6 py-4">
                                <a
                                    href="#"
                                    className="font-bold font-raleway text-xl inline-block text-[#000] hover:text-[#d00035] transition duration-500 ease-in-out no-underline mb-3"
                                >
                                    {value.title}
                                </a>
                                <p className="text-gray-500 text-base">{value.discription}</p>
                            </div>
                            <div className="px-6 py-2 flex flex-row items-center">
                                <span
                                    href="#"
                                    className="py-1 text-sm font-normal text-gray-900 mr-1 flex flex-row items-center"
                                >
                                    <svg
                                        height="13px"
                                        width="13px"
                                        version="1.1"
                                        id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 512 512"
                                        xmlSpace="preserve"
                                    >
                                        <g>
                                            <g>
                                                <path
                                                    d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                                                ></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <span className="ml-1">{value.time}</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog