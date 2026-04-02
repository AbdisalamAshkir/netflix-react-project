import { Modal } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { ModalState, MovieState } from '../Atom/Atom';
import ReactPlayer from 'react-player';
import { IoMdPause, IoMdPlay } from "react-icons/io";
import { FaPlus, FaVolumeOff } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import { IoThumbsUpSharp } from "react-icons/io5";
import axios from 'axios';


const MovieModal = () => {
// 
  // waa data globle ah oo meeshaa rabno ka isticmaalano uu na noo ogolaaday atom ku
  const[showModel, setshoModel]=useRecoilState(ModalState);
  const[showMovei, setShowMovei]=useRecoilState(MovieState);
  const [key, setKey]=useState('');
  const [isplay, setisplay]=useState(false);
  const [ismuted, setismuted]=useState(false);
  const [genres, setgenres]=useState([false]);

  
  // waxaan u isticmaalanaa inaan ku close garayno model ka
  const handleClose =()=>{
    setshoModel(false);
    setShowMovei(null);
  }
  useEffect(() => {
		const fetchTrailers = async () => {
			const { data } = await axios.get(
				`https://api.themoviedb.org/3/${
					showMovei?.media_type === "tv" ? "tv" : "movie"
				}/${showMovei?.id}?api_key=${
					import.meta.env.VITE_APP_API_KEY
				}&language=en-US&append_to_response=videos`
			);
      setgenres(data?.genres)
      console.log('data',data)
      
		 setKey( data?.videos.results[0].key);
		};
		fetchTrailers();
	}, [showMovei]);

  return (
       {/* open ka waxaan ku shubna ShowModel sambtoo ah waxaa ku jira True oo aan uga soo shubnay banner ka as a useRecoil ahaan */},
   
   
        <Modal
        className='fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl rounded'
        
  open={showModel}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">
<div>
<div className='relative pt-[56.24%]'>
<ReactPlayer 
width='100%'
height='100%'
style={{position:'absolute', top:0, left:0 }}
url={`https://www.youtube.com/watch?v=${key}`} 
playing={isplay}
muted={ismuted}
/>

         <div className='absolute bottom-10 flex  w-full items-center justify-between  px-10'>
           <div className='flex space-x-2'>
          <button className='flex items-center gap-x-2 rounded bg-white px-8
          text-xl font-bold text-black transition hover:[#e6e6e6]  curser-pointer'> 
          {/* waa button ka aan uga shaqaysiinano inaa video daarno aan damin */}
          {isplay? (    <IoMdPause  onClick={()=>setisplay(false)} className='h-7 w-7 text-black'/>):
            ( <IoMdPlay onClick={()=>setisplay(true)}  className='h-7 w-7 text-black'/>)
            }
        
           
         </button>
   
    
          <button className='flex h-11 w-11 items-center justify-center rounded-full border-2 border-[gray]  bg-[#2a2a2a]/60 
          transition hover:border-white hover:bg-white/10  curser-pointer'> 
                < FaPlus  className='h-7 w-7'/> 
          </button>

          <button  className=' modal-btn curser-pointer'>
               <IoThumbsUpSharp className='h-8 w-8' />
          </button>
         </div>
        <div>
          {ismuted?   (<FaVolumeOff  className='h-10 w-10'  onClick={()=>setismuted(false)} />):
          (<FaVolumeHigh className='h-10 w-10' onClick={()=>setismuted(true)}  />)
         }
       
           </div>
      
       </div>

   </div>
{/* waa qaybta aan ku soobandhigano infomation ka film ka anago adeegsanana info button */}
 <div className='flex flex-col space-y-6 rounded-b-md bg-[#181818] py-8 px-10'>
    <div className='space-y-6 text-lg' >
     <div className='flex items-center space-x-2'>
        <p className='font-semibold text-green-400'>{showMovei?.vote_average * 10} % Match</p>
       <p className='font-light'>{showMovei?.release_date||showMovei?.first_air_date}</p> 
       <div className='flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-x-5'>HD</div>
      </div>
  
          </div>
      <div className='flex flex-col gap-x-10 gap-y-4 font-ligth'>
        <p className='w-5/6'>{showMovei?.overview}</p>

        <div className='flex flex-col space-y-3 text-sm'>
          <span className='text-gray-400'>Genres:</span>
          {genres.map((genr)=>genr.name).join(",")}
        </div>
        <div>
          <span className='text-gray-400'>Original_language:</span>
          {showMovei?.original_language}
        </div>
        <div>
          <span className='text-gray-400'>vote_count:</span>
          {showMovei?.vote_count}
        </div>

      </div>
      </div>
</div>

   </Modal>
 
  )
};

export default MovieModal;


// madal kaan waxaan ka keena material ui ka soo copy garaynasaa
