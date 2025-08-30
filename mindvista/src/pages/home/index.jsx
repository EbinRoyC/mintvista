import React from 'react'
import Navbar from '../../components/navbar'
import { Heroimage } from '../../assets'; // Adjust the path as necessary
import Button from '../../components/button';
const index = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center py-15">
        <div className='max-w-[1250px] w-full flex gap-[50px]'>
          <div className='flex flex-col w-[45%]  justify-center gap-6'>
            <h1 className='font-[500] text-[60px] leading-[1.5] text-gray-800 '>Navigating the digital landscape for success</h1>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
            }} >Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <Button btnname='Book a consultation' className='bg-black-500'/>
          </div>
          <div  className='flex flex-col w-[55%] items-center justify-center'>
            <img src={Heroimage} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default index
