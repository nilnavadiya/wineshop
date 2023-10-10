import React from "react";
import payment from "../../../assets/images/payment.png";
import eco from "../../../assets/images/eco-frirndly.png";
import shipping from "../../../assets/images/shipping.png";
import discount from "../../../assets/images/discount.png";
import winebg3 from "../../../assets/images/winebg3.jpg";

const WhyTrust = () => {
  const WhyChoose = [
    {
      icon: payment,
      title: "Secured Payment",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
    {
      icon: eco,
      title: "Eco-Friendly",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
    {
      icon: shipping,
      title: "Fast & Free Shipping",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
    {
      icon: discount,
      title: "Discount System",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
  ];

  return (
    <div className="relative mt-16">
      <div className="flex flex-col w-full h-full ">
        <img
          src={winebg3}
          alt=""
          className="absolute object-cover w-full h-full overflow-hidden"
        />

        <div className="max-w-7xl mx-auto py-12">
          <h1 className="relative text-4xl font-bold font-raleway text-center mb-6 text-white">
            Why Trust Us?
          </h1>
          <div data-aos="fade-left">
            <div className="grid gap-8 row-gap-0 lg:grid-cols-4 mt-12">
              {WhyChoose.map((data, idx) => (
                <div className="relative text-center" key={idx}>
                  <div className="flex items-center justify-center w-[80px] h-[80px] mx-auto mb-4 rounded-full bg-white ">
                    <img src={data.icon} alt="" className="w-[50px] h-[50px]" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-center">
                      <p className="mb-1 text-xl text-white font-raleway font-semibold sm:mx-auto hover:text-[#d00035]">
                        {data.title}
                      </p>
                      <p className="text-white text-xl font-semibold mb-3">
                        ------
                      </p>
                      <h1 className="text-white text-raleway font-normal text-[15px]">
                        {data.details}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTrust;
