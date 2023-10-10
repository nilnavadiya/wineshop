import React, { useState } from 'react'
import { Tab } from "@headlessui/react";
import Image from 'next/image';
import wine1 from "../Images/wine1.jpeg";
import product2 from "../Images/wine1.jpeg";
import product3 from "../Images/wine1.jpeg";
import product4 from "../Images/wine1.jpeg";



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Shop = () => {
  let [categories] = useState({
    All: [
      {
        img: wine1,
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
    "Red Wine": [
      {
        img: wine1,
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
    "Sparkling Wine": [
      {
        img: wine1,
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
    "Dessert Wine": [
      {
        img: wine1,
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
    "Rose Wine": [
      {
        img: wine1,
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
        img: wine1,
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

  });
  return (
    <div>
       <div className="shopBg w-full h-full py-10">
       
        <div className="max-w-6xl mx-auto">
          <div className="w-full px-2 py-16 sm:px-0">
            <Tab.Group>
              <Tab.List className="flex space-x-3 justify-center mb-12">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        "px-5 whitespace-nowrap rounded-md py-2.5 text-base font-medium font-poppins leading-5",
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
              <Tab.Panels className="mt-2 max-w-7xl">
                {Object.values(categories).map((posts, idx) => (
                  <Tab.Panel key={idx}>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-4">
                      {posts.map((product) => (
                        <div key={product.id}>
                          <div className="w-full h-full pb-5 bg-gradient-to-b from-[#1F1F1F] to-[#000000] rounded-md">
                            <div className="flex justify-center">
                              <Image
                                src={product.img}
                                alt="img"
                                className="object-center rounded-t-md"
                              />
                            </div>

                            <div className="mt-4 flex justify-center text-center">
                              <div>
                                <h3 className="text-base font-medium text-white">
                                  {product.title}
                                </h3>
                                <div
                                  href="/"
                                  className="mt-1 text-sm font-normal text-titleclr"
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

export default Shop