import React from 'react'
import Homehero from '../Components/Homehero';
import Features from '../Components/Features/Features';
import Faqs from '../Components/Faqs/Faqs';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <div className='relative'>

      <Homehero/>
      <Features/>
      <Faqs/>
      <Footer/>

    </div>
  )
}

export default Home;