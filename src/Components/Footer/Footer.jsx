import React from 'react'
import FooterDate from '../../content/footerLinks.json'
import FooterLink from './FooterLink'

const Footer = () => {
  return (
    <div  className='mt-10 mb-16  sm:mx-auto  sm:max-w-screen-lg'>
        <h1 className='text-[#6c6c6c]'>Questions? Contact US</h1>
        <div className='mx-10 grid grid-cosls-2 sm:grid-cols-4'>
         {FooterDate.columns.map((data)=>(
            <FooterLink links={data}/>
         ))}

        </div>
        <div className='my-1 text-sm  text-[#6c6c6c]'>
            <p>This is in Somalia </p>

            </div>
    </div>
  )
}

export default Footer