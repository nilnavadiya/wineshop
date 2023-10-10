import React from "react";
import product1 from "../../../assets/images/product-1.png";
import product2 from "../../../assets/images/product-2.png";
import product3 from "../../../assets/images/product-3.png";
import product4 from "../../../assets/images/product-4.png";
import product5 from "../../../assets/images/product-5.png";
import product6 from "../../../assets/images/product-6.png";
import product7 from "../../../assets/images/product-7.png";
import product8 from "../../../assets/images/product-8.png";

const OurProduction = () => {
  const productsData = [
    {
      key: 1,
      img: product1,
      title: "Oraganic",
      subtitle: "Cottage Red",
      oldPrice: "$39.00",
      newPrice: "$29.00",
    },
    {
      key: 1,
      img: product2,
      title: "Oraganic",
      subtitle: "Dry Riesling",
      oldPrice: "$28.00",
      newPrice: "$25.00",
    },
    {
      key: 1,
      img: product3,
      title: "Oraganic",
      subtitle: "Dry Riesling",
      oldPrice: "$28.00",
      newPrice: "$25.00",
    },
    {
      key: 1,
      img: product4,
      title: "Oraganic",
      subtitle: "Dry Riesling",
      oldPrice: "$28.00",
      newPrice: "$25.00",
    },
    {
      key: 1,
      img: product5,
      title: "Oraganic",
      subtitle: "Dry Riesling",
      oldPrice: "$28.00",
      newPrice: "$25.00",
    },
    {
      key: 1,
      img: product6,
      title: "Oraganic",
      subtitle: "Dry Riesling",
      oldPrice: "$28.00",
      newPrice: "$25.00",
    },
    {
      key: 1,
      img: product7,
      title: "Oraganic",
      subtitle: "Dry Riesling",
      oldPrice: "$28.00",
      newPrice: "$25.00",
    },
    {
      key: 1,
      img: product8,
      title: "Oraganic",
      subtitle: "Dry Riesling",
      oldPrice: "$28.00",
      newPrice: "$25.00",
    },
  ];

  return (
    <>
      <div className="bg-black pb-16">
        <div className="relative overflow-hidden bg-cover bg-no-repeat productBg">
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div data-aos="zoom-in">
                <div className="px-6 text-center text-white md:px-12">
                  <h1 className="mt-2 mb-6 text-2xl text-[#d00035] font-mwdium font-lobster  ">
                    Own Producton
                  </h1>
                  <p className="mt-2 text-3xl lg:text-5xl text-raleway font-bold ">
                    Featured Products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black w-full h-24 blur-xl absolute -translate-y-12"></div>
        <div className="mx-auto max-w-7xl  px-4 lg:px-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-5">
            {productsData.map((value, id) => (
              <div className="h-fit group" key={id}>
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={value.img}
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h2 className="mt-3 text-base font-raleway capitalize text-[#d00035]">
                    {value.title}
                  </h2>
                  <h1 className="text-white mt-2 font-raleway font-bold text-lg">
                    {value.subtitle}
                  </h1>
                  <del className="text-[#4d4d4d] font-raleway text-lg">
                    {value.oldPrice}
                  </del>
                  <p className="text-xl mt-2 ml-2  font-raleway font-bold inline-block text-white">
                    {value.newPrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProduction;
