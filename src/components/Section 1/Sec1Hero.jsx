import React from 'react'
import Header from '../Header/Header'
import Bg from '../../assets/AllBg.webp'
import AnalyticCard from '../Analytics Card/AnalyticCard'
import TeamList from '../Team List/TeamList'
import Employee from '../Employee/Employee'
import HeroCenter from '../Hero Center Text/HeroCenter'
const Sec1Hero = () => {
  
  return (
    <div className=' flex flex-col relative h-fit justify-start items-center w-full md:h-screen bg-no-repeat bg-cover bg-center' >
      <img
src={Bg}
alt="bg vector"
className="absolute inset-0 w-full h-full object-cover"
loading="eager"
decoding="async"
/>
      <Header/>
      <div>
      <HeroCenter/>
      </div>
      <AnalyticCard/>
      <TeamList/>
      <Employee/>
    </div>
  )
}

export default Sec1Hero
