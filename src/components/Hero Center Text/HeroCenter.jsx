import React from 'react'
import HeroHeading from './HeroHeading'
import HeroPara from './HeroPara'
import GetBtn from '../GetBtn'
import MultiImages from './MultiImages'

const HeroCenter = () => {
  return (
    <div>
      <HeroHeading/>
      <HeroPara/>
      <div className="cta flex">
        <GetBtn/>
        <GetBtn/>
      </div>
      <MultiImages/>
    </div>
  )
}

export default HeroCenter
