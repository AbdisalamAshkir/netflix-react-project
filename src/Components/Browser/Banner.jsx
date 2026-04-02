import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requests from '../../request';
import BASE_IMAGE_UR from '../../constants'
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { useRecoilState } from 'recoil';
import { ModalState, MovieState } from '../../Atom/Atom';

const Banner = () => {
  const [tranding,settranding]=useState([]);
  const[showModel, setshoModel]=useRecoilState(ModalState)
  const[showMovei, setShowMovei]=useRecoilState(MovieState)

  useEffect(()=>{

    const fetchNetflixOriginals= async ()=>{
      console.log('key',import.meta.env.API_KEY)
    //  axios ka waa install garayna waxaana u isticmaalanaa badalka fetch
      const {data}= await axios.get(requests.fetchRomanceMovies);
    settranding(
      data.results[Math.floor(Math.random() * data.results.length)]
    );

    };
    fetchNetflixOriginals();
  },[])
  return (
   <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 '>
    <div  className='absolute top-0 left-0 -z-10 h-[95vh] w-screen'>
      <img src={`${BASE_IMAGE_UR + tranding.backdrop_path || tranding.posters_path}`} 
       alt=''  className='h-screen w-screen object-cover'/>

    </div>
    <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>{tranding.title || tranding.name || tranding.original_name}</h1>
    <p className='max-w-xs text-sm md:mx-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>{tranding.overview}</p>

    {/* labdaan button waa kuwa qoraalka ka horeeya */}
    <div className='flex items-center space-x-2'>
      <button 
      onClick={()=>{
        setshoModel(true);
        setShowMovei(tranding)
        // trading kaan aa u dhiibtay waxaa uu sidaa film ka la marayo

      }}
      className='flex items-center rounded  bg-white py-1 text-black transition hover:bg-gray-200 md:px-7 md:py-2 md:text-lg'> 
        <CiPlay1  className='h-6 w-6'/>Play</button>
      <button className='flex items-center rounded bg-[#5a7272] px-5 py-1 hover:bg-[#5a7272] md:px-7 md:py-2 md:text-lg'> 
        <CiCircleInfo  className='h-6 w-6'/>More Info</button>

    </div>
 </div>
  )
}

export default Banner