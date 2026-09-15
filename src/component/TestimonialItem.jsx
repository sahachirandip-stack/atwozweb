import Image from 'next/image';
import React from 'react'

const TestimonialItem =  ({data}) => {
    const itemData = data;
  return (
    <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
        <Image src={itemData.image}
        width={100}
        height={100}
        alt={itemData.name}
        className='mb-4' />
                    <p className="mb-4">{itemData.content}</p>
                    <h5>{itemData.name}</h5>
                    <span className="text-primary">{itemData.designation}</span>
                </div>
  )
}

export default TestimonialItem
