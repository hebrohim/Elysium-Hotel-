import React from "react";
import aboutImg from "../images/aboutImage.png";
import aboutImgDesktop from"../images/aboutImageDesktop.png"
const About = () => {
  return (
    <div className=" bg-[#f3f1f1] px-4 py-6 lg:px-24  lg:flex lg:translate-y-[-13%] lg:py-20 ">
      <img src={aboutImg} className=" w-full mb-4 lg:hidden" />
      <img src={aboutImgDesktop} className="hidden lg:block h-[600px]"/>
<div className="  flex flex-col justify-center lg:ml-8">
      <p className="text-[#8C949F] lg:text-lg">About Us</p>
      <h1 className="text-[20px] my-3 font-semibold">
        Where Luxury Meets Perfection
      </h1>
      <p className="text-sm text-[#8C949F] text-justify lg:text-md">
        At Elysium, we pride ourselves in providing a truly exceptional
        experience for our guests. Nestled in the heart of Lagos, our luxurious
        hotel offers a perfect blend of elegance, comfort, and serenity. With
        our impeccable service, exquisite amenities, and breathtaking
        surroundings, we strive to create a haven where every moment becomes a
        cherished memory.
      </p>

      <button className=" p-4 mt-4 text-white bg-[#F2911B] rounded-lg lg:px-2 lg:w-[50%] lg:text-sm">
        Book Your Stay Now
      </button>

      </div>
    </div>
  );
};

export default About;
