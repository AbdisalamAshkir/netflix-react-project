import React from 'react'
import FacsData from '../../content/faq.json'
import Fac from './Fac';

const Faqs = () => {
  return (
    <div>
        <h1 className=' flex justify-center items-center  text-3xl my-2'>Frequently Ask Question</h1>
        {FacsData.map((faq) =>(
            <Fac key={faq.id} {...faq}/>
        ))}
    </div>

  )
  
}

export default Faqs;