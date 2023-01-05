import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Cart() {
  const data = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1667477159482-db346abdcd56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      img2: 'https://images.unsplash.com/photo-1667258605672-58960b4e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjI5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Long Sleeve T-shirt',
      isNew: true,
      oldPrice: 20,
      price: 10,
      desc: 'This is my first thing',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1667261005389-18a6d91b2c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'John Garot T-shirt',
      isNew: true,
      oldPrice: 30,
      price: 15,
      desc: 'This is my second thing',
    },
  ];
  return (
    <div className='cart absolute right-3f bg-white p-5 shadow-xl'>
      <h1 className='mb-4 text-slate-500 font-normal text-lg'>
        Product in your cart
      </h1>
      {data?.map((item) => (
        <div
          className='item flex items-center justify-between gap-5 mb-7 '
          key={item.id}
        >
          <img className='w-20 h-24 object-cover' src={item.img} alt='' />
          <div className='details text-lg font-medium'>
            <h1 className='mb-4 text-slate-500 font-normal text-lg'>
              {item.title}
            </h1>
            <p className='text-xs mb-2'>{item.desc.substring(0, 100)}</p>
            <div className='price text-sm text-[#2879fe]'>
              1 x ${item.price}
            </div>
          </div>
          <div className='p-1 hover:bg-red-100 rounded-full cursor-pointer'>
            <DeleteOutlineIcon className='delete text-red-500' />
          </div>
        </div>
      ))}
      <div className='total flex justify-between font-medium text-lg mb-3'>
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button className='add w-60 p-2.5 bg-[#2879fe] text-white flex items-center justify-center rounded gap-2 font-medium mb-2 hover:bg-[#2879fe]/90'>
        PROCEED TO CHECKOUT
      </button>
      <span className='rese text-xs text-red-500 font-bold hover:text-red-500/80 cursor-pointer'>
        Reset Cart
      </span>
    </div>
  );
}
