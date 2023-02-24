import React from 'react'
import {Single, double, triple} from '../assets'
import styles from '../style'
import {PriceTable} from '../constants'

const Cards = () => 
 (

<section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative border-t`}>
      
<div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full pink__gradient"/>

     <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
         About Subscription 
        </h1>
        <div className="w-full md:mt-0 mt-6">
           <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              With a solidarity and unity, love and peace, the world is going to be a better place and easy to live with 
           </p>
        </div>
      </div>
      <div className="w-full py-[10rem] px-4  ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
   
      {PriceTable.map((price)=>(  
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-[20px] hover:scale-105 duration-300 bg-[#222222]">
                <img src={price.icon} className='w-[47px] mx-auto mt-[-3rem] rounded-[10px] bg-white' alt="/"/>
                    <h2 className='text-2xl font-bold text-center py-5 text-[#da1919]'>{price.title}</h2>
                    <p className="text-center text-4xl font-bold mb-2 text-[#da1919]">${price.price}/ month</p>
                <div className="text-center font-medium text-white">
                    <p>{price?.paragraph1}</p>
                    <p>{price?.paragraph2}</p>
                    <p>{price?.paragraph3}</p>
                    <p>{price?.paragraph4}</p>
                </div>
                <button>Subscribe</button>
            </div>
      ))}
      
 </div>
</div>   

</section >
      
  )


export default Cards
