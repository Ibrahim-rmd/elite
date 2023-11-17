import React from 'react'
import styles from '../style'
import {robot,discount, elite} from '../assets'

const Hero = () => (
  <section id='home' className={`flex-1 md:flex-row  flex-col ${styles.paddingY} `}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img
          src={discount} alt="discount"
          className='w-[32px] h-[32px]'
        />

        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>Fast Track</span> Process & {" "}
          <span className='text-white'>Dedicated PRO Officer</span> @ AED 8,500
        </p>
      </div>


      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          Get a full time <br className='sm:block hidden' /> {" "}
          <span className='text-gradient'>Maid</span> {" "}
          Or Maid Visa
        </h1>

        


</div>
<p className={`${styles.paragraph} max-w-[470px] mt-5`}>Online in 5 minutes • Cancel anytime</p>
      </div>





  </section>
)

export default Hero