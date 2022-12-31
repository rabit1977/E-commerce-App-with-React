import React from 'react';

export default function Footer() {
  return (
    <div className='mx-52 px-24'>
      <div className='flex gap-12'>
        <div className='flex-1 flex flex-col text-justify gap-2 text-xs'>
          <h1 className='text-xl font-semibold text-slate-700'>Categories</h1>
          <span className='text-slate-600'>Women</span>
          <span className='text-slate-600'>Men</span>
          <span className='text-slate-600'>Shoes</span>
          <span className='text-slate-600'> Accessories</span>
          <span className='text-slate-600'>New Arrivals</span>
        </div>
        <div className='flex-1 flex flex-col text-justify gap-2 text-xs'>
          <h1 className='text-xl font-semibold text-slate-700'>Links</h1>
          <span className='text-slate-600'>FAQ</span>
          <span className='text-slate-600'>Pages</span>
          <span className='text-slate-600'>Stores</span>
          <span className='text-slate-600'>Compare</span>
          <span className='text-slate-600'>Cookies</span>
        </div>
        <div className='flex-1 flex flex-col text-justify gap-2 text-xs'>
          <h1 className='text-xl font-semibold text-slate-700'>About</h1>
          <span className='text-slate-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            modi et maiores facilis eaque tempora nulla aliquam unde laborum
            voluptatum vel sapiente saepe, dolorum, corporis tenetur nisi
          </span>
        </div>
        <div className='flex-1 flex flex-col text-justify gap-2 text-xs'>
          <h1 className='text-xl font-semibold text-slate-700'>Contact</h1>
          <span className='text-slate-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            cumque! Iusto quam, laboriosam quos fugit amet, rerum fugiat ullam
            temporibus voluptatibus, ad consectetur delectus incidunt velit.
          </span>
        </div>
      </div>
      <div className='flex items-center justify-between mt-12'>
        <div className='flex items-center'>
          <span className='text-[#2879fe] font-bold text-2xl'>Lamastore</span>
          <code className='ml-5 text-sm text-slate-500'>
            @ Copyright 2023. All Rights Reserved
          </code>
        </div>
        <div className=''>
          <img
            src='img/payment.png'
            className='h-16 w-auto'
            alt='payment.png'
          />
        </div>
      </div>
    </div>
  );
}
