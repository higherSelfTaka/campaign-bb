import React from 'react'
import styles from './style'
import {Stats, BBnet, Business,Hero, EthDeal, Client, CTA,  Footer, Cards, Navbar, Testimonial} from './components'

const App = () => (
    // <div className="bg-primary w-full overflow-hidden">
       <div className="bg-[#121212] w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-[#222222] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         <Hero />
        </div>
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        
          <Stats/>
      
          <Business/>
          <BBnet/>
          <EthDeal/>
          <Testimonial/>
          <Client/>
          <Cards/>
          {/* <CTA/>
          <Footer/> */}
        </div>
      </div>
    </div>
)


export default App
