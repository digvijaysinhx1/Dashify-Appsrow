import React from 'react'
import Header from '../Header/Header'
import Bg from '../../assets/AllBg.png'
import AnalyticCard from '../Analytics Card/AnalyticCard'
import TeamList from '../Team List/TeamList'
import Employee from '../Employee/Employee'
import HeroCenter from '../Hero Center Text/HeroCenter'
const Sec1Hero = () => {
  
  return (
    <section className=' flex flex-col h-full justify-start items-center w-full md:h-screen bg-no-repeat bg-cover bg-center' style={{backgroundImage:`url(${Bg})`}}>
      <Header/>
      <div>
      <HeroCenter/>
      </div>
      <AnalyticCard/>
      <TeamList/>
      <Employee/>
    </section>
  )
}

export default Sec1Hero
