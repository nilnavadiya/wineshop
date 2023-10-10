import React from 'react'
import blog01 from '../../../assets/images/blogImg1.jpg'
import blog02 from '../../../assets/images/blogImg2.jpg'
import blog03 from '../../../assets/images/blogImg3.jpg'
import Product1 from '../../../assets/images/01.jpg'
import Product2 from '../../../assets/images/02.jpg'
import Product3 from '../../../assets/images/03.jpg'
import Product4 from '../../../assets/images/04.jpg'
import Product5 from '../../../assets/images/05.jpg'

const Blogs = () => {
    const blogDetails = [
        {
            date: "10",
            month: "nov",
            img: blog01,
            title: "Understanding Red Wine Labels",
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
            time: "2 mins ago",
        },
        {
            date: "10",
            img: blog02,
            month: "nov",
            title: "Understanding Red Wine Labels",
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
            time: "5 mins ago",
        },
        {
            date: "10",
            month: "nov",
            img: blog03,
            title: "vel purus accumsan pellentesq",
            discription:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
            time: "6 mins ago",
        },
        {
            date: "10",
            month: "nov",
            img: Product1,
            title: "Understanding Red Wine Labels",
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
            time: "2 mins ago",
        },
        {
            date: "10",
            img: Product2,
            month: "nov",
            title: "Fusce interdum nunc id conse",
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
            time: "5 mins ago",
        },
        {
            date: "10",
            month: "nov",
            img: Product4,
            title: "Nunc condimentum urna m",
            discription:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
            time: "6 mins ago",
        },

        {
            date: "10",
            month: "nov",
            img: blog02,
            title: "Understanding Red Wine Lab",
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
            time: "2 mins ago",
        },
        {
            date: "10",
            img: Product3,
            month: "nov",
            title: "Curabitur ultrices nulla in ipsum",
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
            time: "5 mins ago",
        },
        {
            date: "10",
            month: "nov",
            img: Product2,
            title: "vel purus accumsan pellente",
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
            time: "6 mins ago",
        },
    ];
    return (
        <div className='bg-[#f5f5f5] py-12'>
            <div className='max-w-7xl mx-auto px-4 lg:px-14'>
                <div className="flex h-full items-center justify-center">
                    <div className="px-6 text-center text-black md:px-12">
                        <p className="mt-2 text-5xl text-raleway font-bold ">
                            Our Blogs
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
                                        className="w-full h-[332px] object-cover"
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

export default Blogs