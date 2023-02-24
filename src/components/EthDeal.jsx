import React from 'react'
import { card } from '../assets'
import styles, {layout} from '../style'
import Button from './Button' 

const EthDeal = () => 
   (
    <section className={`${layout.section}, border-t`}>
      <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              Create your own crowdfunding <br className="sm:block hidden"/>campaign for liberate <br className="sm:block hidden"/> yourself from your abusers
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              you can create a campaign for your own problem such as legal fees incurred for a devorce with a narcissitic partner, 
              raise money for your own mental treatments and host your own gala parties for causes related abuse, etc.. 
            </p>
            <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
       <img src={card} alt="card" className="w-[80%] h-[95%]"/> 
      </div>
     
    </section>
  )


export default EthDeal
