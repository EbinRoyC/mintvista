import React,{useEffect } from 'react'
import Navbar from '../../components/navbar'
import { Heroimage } from '../../assets'; // Adjust the path as necessary
import Button from '../../components/button';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file

const index = () => {
const navigate = useNavigate();

  const formfunction = () => {
console.log("button clicked");

navigate('/form')
  }

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Animation runs only once
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center py-15">
        <div className='max-w-[1250px] w-full flex gap-[50px]'>
          <div className='flex flex-col w-[45%]  justify-center gap-6'>
            <h1    data-aos="fade-up"  className='font-[500] text-[60px] leading-[1.5] text-gray-800 '>Navigating the digital landscape for success</h1>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
            }} >Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <Button onClick={formfunction}  btnname='Book a consultation' className='bg-green-500 hover:bg-green-700'/>
          </div>
          <div  className='flex flex-col w-[55%] items-center justify-center'>
            <img    data-aos="flip-left" src={Heroimage} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default index
