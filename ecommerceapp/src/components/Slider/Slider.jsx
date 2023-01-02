import React, { useState } from 'react';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    '/img/image1.jpeg',
    '/img/image2.jpeg',
    '/img/image3.jpeg',
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className='relative h-[calc(100vh-80px)] w-screen overflow-hidden'>
      <div
        className={`transition ease-in-out duration-700 w-[300vw] h-full flex translate-x-[${
          -currentSlide * 100
        }vw]`}
      >
        <img className='w-screen h-full object-cover' src={data[0]} alt='' />
        <img className='w-screen h-full object-cover' src={data[1]} alt='' />
        <img className='w-screen h-full object-cover' src={data[2]} alt='' />
      </div>
      <div className='absolute w-min left-0 right-0 mx-auto flex bottom-24 gap-3'>
        <div
          className='w-12 h-12 border flex items-center justify-center text-white cursor-pointer'
          onClick={prevSlide}
        >
          <WestOutlinedIcon />
        </div>
        <div
          className='w-12 h-12 border flex items-center justify-center text-white cursor-pointer'
          onClick={nextSlide}
        >
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
}
