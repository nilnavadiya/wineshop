import React from "react";
import icon1 from "../../../assets/images/icon1.png";
import icon2 from "../../../assets/images/icon2.png";
import icon3 from "../../../assets/images/icon3.png";
import icon4 from "../../../assets/images/icon4.png";
import icon5 from "../../../assets/images/icon5.png";
import icon6 from "../../../assets/images/icon6.png";
import mainWine from "../../../assets/images/main-wine.png";

const MakeWine = () => {
  const WineSpecial = [
    {
      key: 1,
      img: icon1,
      title: "Harvesting",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi.",
    },
    {
      key: 2,
      img: icon2,
      title: "Corkscrews",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi.",
    },
    {
      key: 3,
      img: icon3,
      title: "Fermentation",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi.",
    },
  ];
  const WineData = [
    {
      key: 1,
      img: icon4,
      title: "Ecological Safety",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi.",
    },
    {
      key: 2,
      img: icon5,
      title: "Amazing Taste",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi.",
    },
    {
      key: 3,
      img: icon6,
      title: "Catering Bowls",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi.",
    },
  ];
  return (
    <div className="bg-white">
      <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
        <div className="px-6 text-center text-white md:px-12">
          <h1 className="mt-2 mb-6 text-2xl text-[#d00035] font-mwdium font-lobster  ">
            100% natural
          </h1>
          <p className="mt-2 text-3xl lg:text-5xl font-bold  text-black">
            What Makes Our Wine Special ?
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-12">
          <div className="grid items-center mx-auto xl:gap-y-6">
            {WineSpecial.map((value) => (
              <div data-aos="fade-left">
                <div className="group flex gap-y-6 w-full h-full p-2">
                  <div>
                    <img src={value.img} alt="" className="w-14 h-14" />
                  </div>
                  <div>
                    <div className="ml-5">
                      <h3 className="block font-bold text-gray-800 hover:text-[#d00035] text-[26px] font-lobster">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-base dark:text-gray-400">
                        {value.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div data-aos="zoom-in-up">
            <div className="flex mx-auto justify-center">
              <img src={mainWine} alt="" className="max-w-xs" />
            </div>
          </div>
          <div className="grid items-center mx-auto xl:gap-y-6">
            {WineData.map((value) => (
              <div data-aos="fade-right">
                <div className="group flex gap-y-6 w-full h-full p-2">
                  <div>
                    <img src={value.img} alt="" className="w-14 h-14" />
                  </div>
                  <div>
                    <div className="ml-5">
                      <h3 className="block font-bold text-gray-800 hover:text-[#d00035] text-[26px] font-lobster">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-base dark:text-gray-400">
                        {value.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeWine;
