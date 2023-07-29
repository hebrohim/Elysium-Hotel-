import { React, useState } from "react";
import welcome from "../images/welcome.png";
import { customerData } from "./CustomersData";
import rating from "../images/starRating.png";
 const TestimonySection = () => {
  const [slideIndex, setslideIndex] = useState(0);
  let { name, comment, image, id } = customerData[slideIndex];

  // previous slide
  // const previousSlide = () =>{
  //     if(slideIndex > 0){
  //    setslideIndex(slideIndex -1)

  // }
  // else{
  //     setslideIndex(customerData.length -1)
  // }
  // }

  //   //next slide
  //   const nextSlide = () =>{
  //     if (slideIndex !== customerData.length -1){
  //         setslideIndex(slideIndex + 1)

  //     }
  //     else{
  //         setslideIndex(0)
  //     }
  // }
  return (
    <div className='text-white flex justify-center items-center bg-[linear-gradient(to_bottom_right,rgba(85,66,8,0.90),rgba(85,66,8,0.90),rgba(85,66,8,0.60)),url("./images/HeroSectionImage.png")] bg-cover bg-no-repeat h-[70vh] px-4 '>
      <section className="h-4/5 bg-[linear-gradient(to_bottom_right,#1f1b17,#acabaa)] rounded-[15px] px-6 py-4 lg:bg-black">
        <h1 className="text-center mb-3">What Our Guests Say</h1>
        <div className=" p-4 h-4/5 border-2 border-white rounded-lg flex flex-col items-center">
          <img src={image} />
          <h3>{name}</h3>
          <div className="flex">
            <img src={rating} />
            <img src={rating} />
            <img src={rating} />
            <img src={rating} />
            <img src={rating} />
          </div>

          <p>{comment}</p>
        </div>

        {/* <button className="border-2" onClick={previousSlide}>previous</button>
<button className="border-2" onClick={nextSlide}>next</button> */}
        <div className="mt-2 flex justify-center items-center">
                {customerData.map((customer) => {
            return (
              <div
                key={customer.id}
                className="border-2 border-white mr-1 bg-white w-3 h-3 rounded-full"
                id={customer.id - 1 == slideIndex ? "active" : null}
                onClick={() => {
                  setslideIndex(customer.id - 1);
                }}
              ></div>
            );
          })}

          
        </div>
      </section>
    </div>
  );
};

export default TestimonySection;
