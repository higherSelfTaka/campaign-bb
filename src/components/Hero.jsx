import React from 'react'
import styles from '../style'
import {discount, robot, image} from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
           <img src={discount} alt="discount" 
           className="w-[32px] h-[32px]"
           />
           <p className={`${styles.paragraph} ml-2`}>
           <span className="text-[#d74646]">Abuses </span>
           are worldwide {" "}
           <span className="text-[#d74646]">Persecusion </span>
           are real in Japan 
           </p>
          
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold 
          ss:text-[58px] text-[52px] text-[#7b7878]
          ss:leading-[100px] leading-[75px]
          ">
           Raise Ethereum  <br className="sm:block hidden"/> {" "}
            <span className="text-gradient-red">for victims  </span> 
          </h1>

         　<div className="ss:flex hidden md:mr-4 mr-0 ml-4">
          <GetStarted />
         </div>
        </div>

        <h1 className="font-poppins font-semibold 
          ss:text-[58px] text-[52px] text-[#7b7878]
          ss:leading-[80px] leading-[60px] w-full
          ">
         of Abuses
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] text-[#ffffff]`}>
        Help US! We are a group of victims of various abuses including sexual harassments / abuses / rapes and 
        economic abuses. 
        </p>

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 red__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted/>
    </div>

    </section>
  )
}

export default Hero
