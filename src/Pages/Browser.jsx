import React from 'react'
import Header from '../Components/Browser/Header'
import Banner from '../Components/Browser/Banner'
import Row from '../Components/Browser/Row'
import requests from '../request'
import MovieModal from '../Components/MovieModal'

const Browser = () => {
  return (
    <div className='relative h-screen bg-gradient-to-b lg:h-[140vh]'>
        <Header/>
        <main className='relative pl-4 lg:pl-10 space-y-24'>
           <Banner/>
           <Row title={"Trending Now"} url={requests.fetchTrending}/>
           <Row title={"Actions Movies"} url={requests.fetchActionMovies}/>
           <Row title={"Top Rated"} url={requests.fetchTopRated}/>
           <Row title={"Romance Movies"} url={requests.fetchRomanceMovies}/>
           <Row title={"Horror Movies"} url={requests.fetchHorrorMovies}/>
           <Row title={"Documentaries"} url={requests.fetchDocumantaries}/>
           <Row title={"Comedy Movies"} url={requests.fetchComedyMovies}/>

          <MovieModal/>
        </main>
    </div>
  )
}
// gradient-to-b waa class aan color uga soodhiibano RiTailwindCssFill.config class
//  kaan cid kastoo isticmaasha waxaa la siinayaa backgroundiga

export default Browser