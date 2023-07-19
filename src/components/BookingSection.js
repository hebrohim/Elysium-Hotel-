import { React, useState } from "react";
import calendar from "../images/calendarIcon.png";

const BookingSection = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="text-base px-4 py-6 bg-[#45370c] lg:flex lg:gap-8 lg:justify-between lg:items-center lg:bg-transparent lg:rounded-lg lg:border-[1px] lg:border-white lg:translate-y-[-150%] lg:px-4 lg:py-2 lg:mx-24">
      <div>
        <p className="text-white pb-1">Check-in</p>
        <section className="border-[1px] rounded-lg px-3 ">
          <div className="flex items-center justify-between p-4 lg:p-2">
            <input
              className="w-full text-white bg-inherit placeholder-[#ffffff81] lg:w-32"
              placeholder="Check-in-Date"
              type="text"
              onFocus={(event) => {
                event.target.type = "date";
                setActive(false);
              }}
              onBlur={(event) => {
                event.target.type = "text";
                setActive(true);
              }}
            />

            {active ? <img src={calendar} /> : null}
          </div>
        </section>
      </div>

      <div>
        <p className="text-white pb-1">Check-Out</p>
        <section className="border-[1px] rounded-lg px-3 ">
          <div className=" flex items-center justify-between p-4 lg:p-2">
            <input
              className=" text-white bg-inherit placeholder-[#ffffff81] lg:w-32"
              placeholder="Check-Out Date"
              type="text"
              onFocus={(event) => {
                event.target.type = "date";
                setActive(false);
              }}
              onBlur={(event) => {
                event.target.type = "text";
                setActive(true);
              }}
            />

            {active ? <img src={calendar} /> : null}
          </div>
        </section>
      </div>

      <div>
        <p className="text-white pb-1">Adults</p>
        <select className=" focus:bg-[#45370c] w-full p-4 text-white bg-inherit border-[1px] rounded-lg flex items-center justify-center focus:outline-none lg:p-2 lg:w-32">
          <option className="bg-inherit" value={1}>
            1
          </option>
          <option className="bg-inherit" value={1}>
            2
          </option>
          <option className="bg-inherit" value={1}>
            3
          </option>
          <option className="bg-inherit" value={1}>
            4
          </option>
          <option className="bg-inherit" value={1}>
            5
          </option>
          <option className="bg-inherit" value={1}>
            6
          </option>
          <option className="bg-inherit" value={1}>
            7
          </option>
          <option className="bg-inherit" value={1}>
            8
          </option>
          <option className="bg-inherit" value={1}>
            9
          </option>
          <option className="bg-inherit" value={1}>
            10
          </option>
        </select>
      </div>

      <div>
        <p className=" text-white pb-1">Children</p>
        <select className="focus:bg-[#45370c] w-full p-4 text-white bg-inherit border-[1px] rounded-lg flex items-center justify-center focus:outline-none lg:p-2 lg:w-32">
          <option className="bg-inherit" value={1}>
            1
          </option>
          <option className="bg-inherit" value={1}>
            2
          </option>
          <option className="bg-inherit" value={1}>
            3
          </option>
          <option className="bg-inherit" value={1}>
            4
          </option>
          <option className="bg-inherit" value={1}>
            5
          </option>
          <option className="bg-inherit" value={1}>
            6
          </option>
          <option className="bg-inherit" value={1}>
            7
          </option>
          <option className="bg-inherit" value={1}>
            8
          </option>
          <option className="bg-inherit" value={1}>
            9
          </option>
          <option className="bg-inherit" value={1}>
            10
          </option>
        </select>
      </div>

      <button className="w-full p-4 mt-4 text-white bg-[#F2911B] rounded-lg lg:w-[15%] lg:p-2">
        Book now
      </button>

      {/* </section> */}
    </div>
  );
};

export default BookingSection;
