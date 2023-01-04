import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className='text-base'>
      <div className='flex justify-between py-2.5 px-7 items-center'>
        <div className='flex items-center gap-5'>
          <div className='flex items-center'>
            <img
              src='/img/en.flag.png'
              className='w-8 h-5'
              alt='english flag'
            />
            <KeyboardArrowDownIcon />
          </div>
          <div className='flex items-center'>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className='flex items-center'>
            <Link to='/products/1'>Women</Link>
          </div>
          <div className='flex items-center'>
            <Link to='/products/2'>Men</Link>
          </div>
          <div className='flex items-center tracking-wide'>
            <Link to='/products/3'>Children</Link>
          </div>
        </div>
        <div className='text-3xl'>
          <Link to='/'>LAMASTORE</Link>
        </div>
        <div className='flex items-center gap-6'>
          <div className='flex items-center'>
            <Link to='/'>Homepage</Link>
          </div>
          <div className='flex items-center'>
            <Link to='/'>About</Link>
          </div>
          <div className='flex items-center'>
            <Link to='/'>Contact</Link>
          </div>
          <div className='flex items-center'>
            <Link to='/'>Stores</Link>
          </div>
          <div className='flex items-center gap-4 text-slate-700 cursor-pointer'>
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className='relative' onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span className='text-xs w-4 h-4 rounded-full bg-[#2879fe] text-white absolute flex items-center justify-center -right-1 -top-1'>
                0
              </span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
}
