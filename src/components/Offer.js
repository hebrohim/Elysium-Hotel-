import React from 'react'

const SingleOffer = ({image,tittle,content}) => {
console.log(tittle)
  
  return (
    <div className='w-full flex justify-between p-2 mb-3 bg-[#f3f1f1] rounded-lg'>

        <img src={image} className='mr-5'/>
        <div className=' w-[90%] '>
        <h1 className='font-bold'>{tittle}</h1>
        <p className='text-[#8C949F] leading-5 mt-1'>{content}</p>

        </div>
    </div>
  )
}

export default SingleOffer