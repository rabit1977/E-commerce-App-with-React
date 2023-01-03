import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';

export default function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  return (
    <div className='py-7 px-8 flex gap-8'>
      <div className='left flex-1 sticky h-full top-10'>
        <div className='mb-7'>
          <h2 className='font-normal mb-3'>Product Categories</h2>
          <div className='mb-1'>
            <input type='checkbox' name='checkbox' id='1' value={1} />
            <label className='ml-1.5' htmlFor='1'>
              Shoes
            </label>
          </div>
          <div className='mb-1'>
            <input type='checkbox' name='checkbox' id='2' value={2} />
            <label className='ml-1.5' htmlFor='2'>
              Skirts
            </label>
          </div>
          <div className='mb-1'>
            <input type='checkbox' name='checkbox' id='3' value={3} />
            <label className='ml-1.5' htmlFor='3'>
              Coats
            </label>
          </div>
        </div>
        <div className='mb-7'>
          <h2 className='font-normal mb-3'>Filter by price</h2>
          <div className='mb-1 flex items-center gap-2'>
            <span>0</span>
            <input
              type='range'
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='mb-7'>
          <h2 className='font-normal mb-3'>Sort by</h2>
          <div className='mb-1'>
            <input
              type='radio'
              name='price'
              id='asc'
              value='asc'
              onChange={(e) => setSort('asc')}
            />
            <label className='ml-1.5' htmlFor='asc'>
              Price (Lowest first)
            </label>
          </div>
          <div className='mb-1'>
            <input
              type='radio'
              name='price'
              id='desc'
              value='desc'
              onChange={(e) => setSort('desc')}
            />
            <label className='ml-1.5' htmlFor='desc'>
              Price (Highest first)
            </label>
          </div>
        </div>
      </div>
      <div className='[flex:3]'>
        <img
          src='https://images.unsplash.com/photo-1667400104714-53da4894bf18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
          className='w-full h-80 object-cover mb-12'
          alt=''
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
}
