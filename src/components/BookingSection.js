import {React,useState} from "react";
import calendar from"../images/calendarIcon.png"

const BookingSection = () => {
  const [active, setActive] = useState(true)
  return (
    <div className="px-4 py-6 bg-[#45370c]">
      <p className="text-white pb-1">Check-in</p>
      <section className="border-2 rounded-lg">
        <div className="flex items-center justify-center p-4">
        <input
          className=" text-white bg-inherit w-full"
          placeholder="Check-in-Date"
          type="text"
          onFocus={(event) => {
            event.target.type = "date";
            setActive(false)
          }}
          onBlur={(event) => {
            event.target.type = "text";
            setActive(true)
          }}
          
        />

{active?<img  src={calendar}/>:null}
        </div>
      </section>

      <p className="text-white pb-1">Check-Out</p>
      <section className="border-2 rounded-lg">
        <div className="flex items-center justify-center p-4">
        <input
          className=" text-white bg-inherit w-full placeholder-light"
          placeholder="Check-Out Date"
          type="text"
          onFocus={(event) => {
            event.target.type = "date";
            setActive(false)
          }}
          onBlur={(event) => {
            event.target.type = "text";
            setActive(true)
          }}
          
        />

{active?<img  src={calendar}/>:null}
        </div>
      </section>


      <p className="text-white pb-1">Adults</p>
        <select className=" w-full p-4 text-white bg-inherit border-2 rounded-lg flex items-center justify-center focus:outline-none">
          <option className = "bg-inherit" value={1}>1</option>
          <option className = "bg-inherit" value={1}>2</option>
          <option className = "bg-inherit" value={1}>3</option>
          <option className = "bg-inherit" value={1}>4</option>
          <option className = "bg-inherit" value={1}>5</option>
          <option className = "bg-inherit" value={1}>6</option>
          <option className = "bg-inherit" value={1}>7</option>
          <option className = "bg-inherit" value={1}>8</option>
          <option className = "bg-inherit" value={1}>9</option>
          <option className = "bg-inherit" value={1}>10</option>
        </select>



        <p className="text-white pb-1">Children</p>
        <select className=" w-full p-4 text-white bg-inherit border-2 rounded-lg flex items-center justify-center focus:outline-none">
          <option className = "bg-inherit" value={1}>1</option>
          <option className = "bg-inherit" value={1}>2</option>
          <option className = "bg-inherit" value={1}>3</option>
          <option className = "bg-inherit" value={1}>4</option>
          <option className = "bg-inherit" value={1}>5</option>
          <option className = "bg-inherit" value={1}>6</option>
          <option className = "bg-inherit" value={1}>7</option>
          <option className = "bg-inherit" value={1}>8</option>
          <option className = "bg-inherit" value={1}>9</option>
          <option className = "bg-inherit" value={1}>10</option>
        </select>


        <button className="w-full p-4 mt-4 text-white bg-[#F2911B] rounded-lg ">Book now</button>


      

  
 
      {/* </section> */}
    </div>
  );
};

export default BookingSection;
