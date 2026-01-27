import React from 'react'
import Header from '../Header/Header'
import Bg from '../../assets/AllBg.png'
import AnalyticCard from '../Analytics Card/AnalyticCard'
const Sec1Hero = () => {
  return (
    <section className='flex flex-col justify-start items-center h-screen w-auto bg-no-repeat bg-cover bg-center' style={{backgroundImage:`url(${Bg})`}}>
      <Header/>
      {/* <AnalyticCard/> */}
    </section>
  )
}

export default Sec1Hero
