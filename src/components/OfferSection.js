import React from "react";
import offer from "../images/offerImageMobile.png";
import offerDesktop from "../images/offer.png"
import SingleOffer from "./Offer";
import family from "../images/family.png";
import extended from "../images/extended.png";
import business from "../images/business.png";
import romance from "../images/romance.png";
import seasonal from "../images/seasonal.png";
import businessCenter from "../images/businessCenter.png";
const OfferSection = () => {
  return (
    <div className="px-6 py-4 lg:pr-0 lg:translate-y-[-14%]">
        <div className="lg:translate-y-24">
        <p className="text-[#8C949F] ">
          Unforgettable Offers Await
        </p>
        <p className="text-[20px] my-2 font-semibold">
        
          Discover Exclusive Deals Now
        </p>
        </div>
      <div className=" lg:flex lg:flex-row-reverse lg:justify-center lg:items-center">

        <img src={offer} className="w-full lg:hidden" />
        <img src={offerDesktop} className=" w-[60%] ml-10 hidden lg:block" />
     

      <section className=" mt-3 lg:h-[70vh] lg:overflow-y-scroll">
        <SingleOffer
          image={family}
          tittle="Family Fun Package"
          content="Unforgettable family moments. Kids stay and eat free!"
        />

        <SingleOffer
          image={extended}
          tittle="Extended Stay Special"
          content="Stay longer, save more. Extra night on us!"
        />

        <SingleOffer
          image={business}
          tittle="Business Travel Offer"
          content="Work and relax. Exclusive perks for corporate travelers."
        />

        <SingleOffer
          image={romance}
          tittle="Romance Package"
          content="Love in style. Indulge in a romantic getaway."
        />

        <SingleOffer
          image={seasonal}
          tittle="Seasonal Promotion"
          content="Limited-time offers and festive surprises."
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

export default OfferSection;
