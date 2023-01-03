import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ item }) {
  return (
    <Link className='link' to={`/product/${item.id}`}>
      <div className='w-72 flex flex-col gap-2.5 mb-8'>
        <div className={`group w-full h-96 overflow-hidden relative`}>
          {item.isNew && (
            <span className='absolute group-hover:z-40 z-20 top-1.5 left-1.5 bg-white px-2 py-1 text-sm rounded text-teal-500 font-medium tracking-wide hover:text-teal-600 hover:font-semibold'>
              New Season
            </span>
          )}
          <img
            src={item.img}
            className={`w-full h-full object-cover absolute z-10 `}
          ></img>
          <img
            src={item.img2}
            className='absolute group-hover:z-30 w-full h-full  object-cover  '
          ></img>
        </div>
        <h2 className='text-sm font-medium tracking-wide'>{item.title}</h2>
        <div className='flex gap-5 text-xs'>
          <h3 className='font-medium line-through text-slate-500'>
            ${item.oldPrice}
          </h3>
          <h3 className='font-medium'>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
}
