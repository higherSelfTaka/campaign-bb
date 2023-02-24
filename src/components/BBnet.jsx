import React from 'react'
import {apple, bill, bbsns,Imac, google} from '../assets'
import styles, {layout} from '../style'

const BBnet = () => 
 (
    <section id="product" className={`${layout.sectionReverse} border-t`}>
      <div className={layout.sectionImgReverse}>
         <img src={bbsns} alt="bbsns"
        className="w-[80%] h-[80%] p-1 relative z-[5] border-[4px] border-[#d74646]" 
        /> 

        
        <div className="absolute z-[3] -left-1/2
        top-0 w-[50%] h-[50%] rounded-full red__gradient"/>
        <div className="absolute z-[0] -left-1/2
        bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
      </div>

      <div className={layout.sectionInfo}>
         <h2 className={`${styles.heading2} ml-5`}>SNS for our souls <br className="sm:block hidden"/>not recognition</h2>
         <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-5`}>
          You can check other stories and episodes, learn about various psychosis and its related treatments and you can raise money 
          for your own personal problems without any rewards. We are helping each other as a victim community of abuses.
          We are also developing smart phone application! please check the progress 
         by our youtube channel https://www.youtube.com/channel/UCJksVZ-pdLfgOX0t2naPqng 
         </p>
         
         <div className="flex flex-row flex-wrap sm:mt-10 mt-6 ml-5">
           <img src={apple} alt="apple_store" className="w-[128px] h-[42px]
           object-contain mr-5 cursor-pointer"/>
            <img src={google} alt="google_play" className="w-[128px] h-[42px]
           object-contain mr-5 cursor-pointer"/>
         </div>

      </div>
    </section>
  )


export default BBnet
