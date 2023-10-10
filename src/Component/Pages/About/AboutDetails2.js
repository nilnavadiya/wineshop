import React, { useState } from 'react'
import { Tab } from "@headlessui/react";
import product1 from '../../../assets/images/01.jpg'
import product2 from '../../../assets/images/02.jpg'
import product3 from '../../../assets/images/03.jpg'
import product4 from '../../../assets/images/04.jpg'
import product5 from '../../../assets/images/05.jpg'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ShopFilter = () => {
    let [categories] = useState({
        All: [
            {
                img: product1,
                title: "Dorylus Series",
                detail: "Budget Gaming",
            },
            {
                img: product2,
                title: "Pharaoh Series",
                detail: "Enthusiast Gaming",
            },
            {
                img: product3,
                title: "Solenopsis Series",
                detail: "Extreme Gaming",
            },
            {
                img: product4,
                title: "Metallica Series",
                detail: "Streaming",
            },
            {
                img: product5,
                title: "Metallica Series",
                detail: "Streaming",
            },
            {
                img: product1,
                title: "Dorylus Series",
                detail: "Budget Gaming",
            },
            {
                img: product2,
                title: "Pharaoh Series",
                detail: "Enthusiast Gaming",
            },
            {
                img: product4,
                title: "Metallica Series",
                detail: "Streaming",
            },
        ],
        "Red Wine": [
            {
                img: product1,
                title: "Dorylus Series",
                detail: "Budget Gaming",
            },
            {
                img: product2,
                title: "Pharaoh Series",
                detail: "Enthusiast Gaming",
            },
            {
                img: product3,
                title: "Solenopsis Series",
                detail: "Extreme Gaming",
            },
        ],
        "Sparkling Wine": [
            {
                img: product1,
                title: "Dorylus Series",
                detail: "Budget Gaming",
            },
        ],
        "Dessert Wine": [
            {
                img: product1,
                title: "Dorylus Series",
                detail: "Budget Gaming",
            },
            {
                img: product2,
                title: "Pharaoh Series",
                detail: "Enthusiast Gaming",
            },
            {
                img: product3,
                title: "Solenopsis Series",
                detail: "Extreme Gaming",
            },
        ],
        "Rose Wine": [
            {
                img: product1,
                title: "Dorylus Series",
                detail: "Budget Gaming",
            },
            {
                img: product2,
                title: "Pharaoh Series",
                detail: "Enthusiast Gaming",
            },
            {
                img: product3,
                title: "Solenopsis Series",
                detail: "Extreme Gaming",
            },
            {
                img: product4,
                title: "Metallica Series",
                detail: "Streaming",
            },
        ],
        "White Wine": [
            {
                img: product3,
                title: "Solenopsis Series",
                detail: "Extreme Gaming",
            },
            {
                img: product4,
                title: "Metallica Series",
                detail: "Streaming",
            },
            {
                img: product5,
                title: "Metallica Series",
                detail: "Streaming",
            },
        ],

    });
    return (
        <div>
            <div className="shopBg w-full h-full py-10">
                <div className="max-w-7xl mx-auto px-4 lg:px-14">
                    <div className="w-full px-2 py-16 sm:px-0">
                        <Tab.Group>
                            <Tab.List className="grid grid-cols-3 lg:grid-cols-6 gap-x-3  justify-center mb-12">
                                {Object.keys(categories).map((category) => (
                                    <Tab
                                        key={category}
                                        className={({ selected }) =>
                                            classNames(
                                                "px-3 whitespace-nowrap rounded-md py-2.5 my-4 lg:my-0 text-base font-medium font-raleway leading-5",
                                                "focus:outline-none",
                                                selected
                                                    ? "bg-[#d00035] text-white"
                                                    : "text-white font-medium border-none bg-[#212529]"
                                            )
                                        }
                                    >
                                        {category}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels className="mt-2">
                                {Object.values(categories).map((posts, idx) => (
                                    <Tab.Panel key={idx}>
                                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
                                            {posts.map((product) => (
                                                <div key={product.id}>
                                                    <div className="w-full h-full pb-5  rounded-md">
                                                        <div className="flex w-full h-[300px] justify-center">
                                                            <img
                                                                src={product.img}
                                                                alt="img"
                                                                className="w-full h-full object-cover rounded-md"
                                                            />
                                                        </div>

                                                        <div className="mt-4 flex justify-center text-center">
                                                            <div>
                                                                <h3 className="text-xl  font-raleway font-bold text-black">
                                                                    {product.title}
                                                                </h3>
                                                                <div
                                                                    href="/"
                                                                    className="mt-1 text-sm font-raleway font-normal text-black"
                                                                >
                                                                    {product.detail}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShopFilter