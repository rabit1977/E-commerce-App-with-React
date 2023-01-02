import { Link } from '@mui/material';
import React from 'react';

export default function Categories() {
  return (
    <div className='flex h-[80vh] gap-2.5 m-2.5'>
      <div className='flex-1 flex flex-col gap-2.5'>
        <div className='flex-1 flex gap-2.5 relative overflow-hidden'>
          <img
            className='w-full h-full object-cover'
            src='https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
          />
          <button className='absolute min-w-[100px] w-fit h-12 inset-0 m-auto cursor-pointer tracking-wide border-0 uppercase font-medium bg-white rounded shadow-lg'>
            <Link
              style={{ textDecoration: 'none' }}
              className='link'
              to='/products/1'
            >
              <p className='text-slate-600 hover:text-slate-900 text-xs'>
                Sale
              </p>
            </Link>
          </button>
        </div>
        <div className='flex-1 flex relative overflow-hidden'>
          <img
            className='w-full h-full object-cover'
            src='https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
          />
          <button className='absolute min-w-[100px] w-fit h-12 inset-0 m-auto cursor-pointer tracking-wide border-0 uppercase font-medium bg-white rounded shadow-lg'>
            <Link
              style={{ textDecoration: 'none' }}
              className='link'
              to='/products/1'
            >
              <p className='text-slate-600 hover:text-slate-900 text-xs'>
                Woman
              </p>
            </Link>
          </button>
        </div>
      </div>
      <div className='flex-1 flex'>
        <div className='relative'>
          {' '}
          <img
            className='w-full h-full object-cover'
            src='https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
          />
          <button className='absolute min-w-[100px] w-fit h-12 inset-0 m-auto cursor-pointer tracking-wide border-0 uppercase font-medium bg-white rounded shadow-lg'>
            <Link
              style={{ textDecoration: 'none' }}
              className='link'
              to='/products/1'
            >
              <p className='text-slate-600 hover:text-slate-900 text-xs'>
                New Season
              </p>
            </Link>
          </button>
        </div>
      </div>
      <div className='flex-col relative space-y-2.5 mb-2.5' style={{ flex: 2 }}>
        <div className='flex-1 h-1/2 flex gap-2.5'>
          <div className='flex-1 flex'>
            <div className='flex-1 flex relative'>
              <img
                className='w-full h-full object-cover'
                src='https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
              <button className='absolute min-w-[100px] w-fit h-12 inset-0 m-auto cursor-pointer tracking-wide border-0 uppercase font-medium bg-white rounded shadow-lg'>
                <Link
                  style={{ textDecoration: 'none' }}
                  className='link'
                  to='/products/1'
                >
                  <p className='text-slate-600 hover:text-slate-900 text-xs'>
                    Man
                  </p>
                </Link>
              </button>
            </div>
          </div>
          <div className='flex-1 flex'>
            <div className='flex-1 flex relative'>
              {' '}
              <img
                className='w-full h-full object-cover'
                src='https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
              <button className='absolute min-w-[100px] w-fit h-12 inset-0 m-auto cursor-pointer tracking-wide border-0 uppercase font-medium bg-white rounded shadow-lg'>
                <Link
                  style={{ textDecoration: 'none' }}
                  className='link'
                  to='/products/1'
                >
                  <p className='text-slate-600 hover:text-slate-900 text-xs'>
                    Accessories
                  </p>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='h-1/2 flex'>
          <div className='flex-1 relative gap-2.5'>
            <img
              className='w-full h-full object-cover'
              src='https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <button className='absolute min-w-[100px] w-fit h-12 inset-0 m-auto cursor-pointer tracking-wide border-0 uppercase font-medium bg-white rounded shadow-lg'>
              <Link
                style={{ textDecoration: 'none' }}
                className='link'
                to='/products/1'
              >
                <p className='text-slate-600 hover:text-slate-900 text-xs'>
                  Shoes
                </p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
