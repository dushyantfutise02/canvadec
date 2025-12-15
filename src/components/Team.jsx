import React from 'react'
import User from './User'
import Title from './Title'
import img from "../assets/user/dk.png";
import data from "../data.ts";

const Team = () => {
  
  return (
    <div className='flex flex-col gap-5 '>
      {/* header  */}
        <Title title="Our Team"/>
        <div className='grid grid-cols-2 gap-30 items-center place-self-center'>
          <User name={""} desc={"about"} img={img}/>
          <User name={"Dushyant Kumar"} desc={"about"} img={img}/>
          <User name={"Dushyant Kumar"} desc={"about"} img={img}/>
          <User name={"Dushyant Kumar"} desc={"about"} img={img}/>
        </div>
        
    </div>
  )
}

export default Team