import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Contact() {
  return (
    <div className='bg-blue-500 text-white p-4 flex justify-center text-sm mb-8'>
      <div className='w-1/2 flex items-center justify-between'>
        <span>BE IN TOUCH WITH US</span>
        <div className='mail'>
          <input
            type='text'
            placeholder='Enter your e-mail'
            className='p-2.5 border-none rounded-l-lg '
          />
          <button className='p-2.5 text-white bg-slate-800 rounded-r-lg border-none'>
            JOIN US
          </button>
        </div>
        <div className='flex gap-2.5'>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
}
