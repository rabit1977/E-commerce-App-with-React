import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  ];
  return (
    <div className='flex py-5 px-12 gap-12'>
      <div className='flex flex-1 gap-5'>
        <div className='flex-1'>
          <img
            className='w-full max-h-24 min-w-[80px] object-cover cursor-pointer mb-2.5'
            src={images[0]}
            alt=''
            onClick={(e) => setSelectedImg(1)}
          />
          <img
            className='w-full max-h-24 min-w-[80px] object-cover cursor-pointer mb-2.5'
            src={images[1]}
            alt=''
            onClick={(e) => setSelectedImg(0)}
          />
        </div>
        <div className='flex [flex:5]'>
          <img
            className='w-full max-h-[800px] object-cover cursor-pointer'
            src={images[selectedImg]}
            alt=''
          />
        </div>
      </div>
      <div className='flex flex-1 flex-col gap-6'>
        <h1>Title</h1>
        <span className='price text-3xl text-[#2879fe] font-medium'>$199</span>
        <p className='text-lg font-light text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          dolorem corrupti nemo facere perspiciatis provident corporis
          doloribus, amet magnam nulla cum soluta, molestiae nobis nihil vero,
          in adipisci totam itaque.
        </p>
        <div className='quantity items-center'>
          <div className='flex items-center gap-4 mb-6'>
            <button
              className='flex items-center justify-center cursor-pointer border p-3 rounded hover:bg-slate-300  bg-slate-200'
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              <RemoveIcon />
            </button>
            {quantity}
            <button
              className='flex items-center justify-center border p-3 rounded hover:bg-slate-300  bg-slate-200'
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              <AddIcon />
            </button>
          </div>
          <button className='add w-60 p-2.5 bg-[#2879fe] text-white flex items-center justify-center rounded gap-2 font-medium mb-6 hover:bg-[#2879fe]/90'>
            <AddShoppingCartIcon /> ADD TO CART
          </button>
          <div className='links flex gap-5 '>
            <div className='item items-center flex gap-2 text-[#2879fe] text-sm cursor-pointer font-semibold hover:text-[#2879fe]/80'>
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
            <div className='item items-center flex gap-2 text-[#2879fe] text-sm cursor-pointer font-semibold hover:text-[#2879fe]/80'>
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className='info flex flex-col gap-2.5 text-gray-500 text-sm mt-8 mb-3'>
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shpirt</span>
            <span>Tag: T_Shpirt, Women, Top</span>
          </div>
          <hr />
          <div className='info flex flex-col gap-2.5 text-gray-500 text-sm mt-8'>
            <span>DESCRIPTION</span>
            <hr className='w-52' />
            <span>ADDITIONAL INFORMATION</span>
            <hr className='w-52' />
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
