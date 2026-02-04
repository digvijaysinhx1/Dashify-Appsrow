import React from 'react'
import Header from '../Header/Header'
import Bg1600 from '../../assets/AllBg.webp'
import Bg900 from '../../assets/AllBg-mobile.webp'
import AnalyticCard from '../Analytics Card/AnalyticCard'
import TeamList from '../Team List/TeamList'
import Employee from '../Employee/Employee'
import HeroCenter from '../Hero Center Text/HeroCenter'
const Sec1Hero = () => {
  
  return (
    <div className=' flex flex-col relative h-screen justify-start items-center w-full md:h-screen bg-no-repeat bg-cover bg-center' >
      <img
  src={Bg900}
  srcSet={`${Bg900} 900w, ${Bg1600} 1600w`}
  sizes="(max-width: 768px) 100vw, 1600px"
  alt=""
  className="absolute inset-0 w-full h-full object-cover"
  loading="eager"
  decoding="async"
  fetchPriority="high"
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
