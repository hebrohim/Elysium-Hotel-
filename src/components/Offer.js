import React from 'react'

const SingleOffer = ({image,tittle,content}) => {

  
  return (
    <div className='w-full text-sm flex justify-between p-2 mb-3 bg-[#f3f1f1] rounded-lg'>

       <div className='mr-2'><img src={image} className='h-full object-cover rounded-lg'/></div> 
        <div className='w-[90%] '>
        <h1 className='font-bold'>{tittle}</h1>
        <p className='text-[#8C949F] leading-4 mt-1'>{content}</p>

        </div>
    </div>
  )
}

export default SingleOffer