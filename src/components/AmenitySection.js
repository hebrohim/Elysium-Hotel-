import React from "react";
import amenity from "../images/AmenityMobile.png";
import amenityDesktop from "../images/AmenityDesktop.png";
import SingleOffer from "./Offer";
import pool from "../images/pool.png";
import spa from "../images/spa.png";
import wifi from "../images/wifi.png";
import room from "../images/247.png";
import restaurant from "../images/restaurant.png";
import businessCenter from "../images/businessCenter.png";
const AmenitySection = () => {
  return (
    <div className="px-6 py-4 lg:pl-0 lg:translate-y-[-14%]">
      <div className="lg:translate-y-24 lg:flex lg:flex-row-reverse ">
        <div>
        <p className="text-[#8C949F] text-[20px]  ">Our Amenities</p>
        <p className="text-[20px] my-2 font-bold">
          Unmatched Comfort and Convenience
        </p>
        </div>
        
      </div>
      <div className=" lg:flex  lg:justify-center lg:items-center">
        <img src={amenity} className="w-full lg:hidden" />
        <img src={amenityDesktop} className=" w-[60%] ml-0 hidden lg:block" />

        <section className=" mt-3 lg:h-[70vh] lg:overflow-y-scroll lg:ml-10">
          <SingleOffer
            image={pool}
            tittle="Outdoor Pool"
            content="Refreshing pool surrounded by nature."
          />

          <SingleOffer
            image={spa}
            tittle="Spa and Wellness"
            content="Relax and rejuvenate with treatments."
          />

          <SingleOffer
            image={wifi}
            tittle="Free WiFi"
            content="Relax and rejuvenate with treatments."
          />

          <SingleOffer
            image={room}
            tittle="24/7 Room Service"
            content="Savour delectable meals in-house."
          />

          <SingleOffer
            image={restaurant}
            tittle="On-Site Restaurant"
            content="Savour delectable meals in-house."
          />

          <SingleOffer
            image={businessCenter}
            tittle="Business Center"
            content="Fully equipped for your work needs."
          />
        </section>
      </div>
    </div>
  );
};

export default AmenitySection;
