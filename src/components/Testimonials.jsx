import React from 'react'
import { useState } from 'react'
import "../App.css";
const Testimonials = () => {
    const [CurrentIndex,setCurrentIndex]=useState(0);
    const testimonials = [
        {
            quote:"This is the best product",
            author:"Jane Doe"
        },
        {
            quote:"This is the best product wow",
            author:"test"
        },
    ];
    const handlePrevClick=()=>{
        setCurrentIndex((CurrentIndex+testimonials.length-1)%testimonials.length);
    }
    const handleNextClick=()=>{
        setCurrentIndex((CurrentIndex+1)%testimonials.length);
    }
  return (
      <div className='testimonials'>
         <div className='testimonials-quote'>
             {testimonials[CurrentIndex].quote}
         </div>
         <div className='testimonials-author'>
            -{testimonials[CurrentIndex].author}
         </div>
         <div className='testimonials-nav'>
              <button onClick={handlePrevClick}>
                Prev
              </button>
              <button onClick={handleNextClick}>Next</button>
         </div>
      </div>
  )
}

export default Testimonials
