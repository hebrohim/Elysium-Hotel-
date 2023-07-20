import React from "react";
import aboutImg from "../images/aboutImage.png";
const About = () => {
  return (
    <div className=" px-4 py-6 lg:px-24 lg:py-32">
      <img src={aboutImg} className="mb-4" />

      <p className="text-[#8C949F]">About Us</p>
      <h1 className="text-[20px] my-3 font-semibold">
        Where Luxury Meets Perfection
      </h1>
      <p className="text-sm text-[#8C949F]">
        At Elysium, we pride ourselves in providing a truly exceptional
        experience for our guests. Nestled in the heart of Lagos, our luxurious
        hotel offers a perfect blend of elegance, comfort, and serenity. With
        our impeccable service, exquisite amenities, and breathtaking
        surroundings, we strive to create a haven where every moment becomes a
        cherished memory.
      </p>

      <button className="w-[55%] p-4 mt-4 text-white bg-[#F2911B] rounded-lg lg:w-[15%] lg:p-2">
        Book Your Stay Now
      </button>
    </div>
  );
};

export default About;
