import React, { useEffect, useRef, useState } from 'react'
import { FaChevronRight,FaChevronLeft  } from "react-icons/fa6";
import BASE_IMAGE_URL from '../../constants';
import axios from 'axios';
import { GiHidden } from 'react-icons/gi';

const Row = ({title,url}) => {
    const [Movies,setmovei]=useState([]);
    const [isscrol,setisscrol]=useState(false);
    const rowRef=useRef(null);

    // useRef waxaan u is ticmaalanaa inaa helno meesha lamarayo

    useEffect(()=>{
  
      const  fetchMovie = async ()=>{
    
      //  axios ka waa install garayna waxaana u isticmaalanaa badalka fetch
        const {data}= await axios.get(url);
      setmovei(
        data.results);
  
      };
      fetchMovie();
    },[]);

    //  waa function ka aan uga shaqaysiinano labada falaarood
    const HandelScrol = (direction)=>{
      setisscrol(true);

      if(rowRef.current){
        const {clientWidth, scrollLeft}=rowRef.current;

       const  scrollTo=
        direction==='left'? scrollLeft - clientWidth : scrollLeft + clientWidth;

        rowRef.current.scrollTo({left:scrollTo, behavior :'smooth'});
      }

    };
  return (
    <div className='h-40'>
        <h1 className='text-lg font-semibold'>{title}</h1>
        <div className='group relative  md:ml-2'>

        <FaChevronLeft   onClick={()=>HandelScrol("left")} 
         className={`${
          !isscrol && "hidden"
        } absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}/>
        <div 
        ref={rowRef}
        className='flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2'>
            { Movies && Movies.map(Movies =>(
                <div className='relative h-28 min-w-[180px] cursor-pointer  md:h-36 md:mix-w-[260px] md:hover:scale-105'>
                        <img src={`${BASE_IMAGE_URL + Movies.backdrop_path || Movies.posters_path}`}
                        className='rounded-sm object-cover'/>
                </div>
            ))}
        </div>
        <FaChevronRight  onClick={()=>HandelScrol("right")}  className='absolute top-0 right-2 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition 
         group-hover:opacity-100'/>

        </div>
    </div>
  )
}

export default Row;