import React from 'react';

export default function Products() {
  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          <div className='inputItem'>
            <input type='checkbox' name='checkbox' id='1' value={1} />
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' name='checkbox' id='2' value={2} />
            <label htmlFor='2'>Skirts</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' name='checkbox' id='3' value={3} />
            <label htmlFor='3'>Coats</label>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Filter by price</h2>
          <div className='inputItem'>
            <span>0</span>
            <input type='range' min={0} max={1000} name='' id='' />
            <span>1000</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input type='radio' name='price' id='asc' value='asc' />
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className='inputItem'>
            <input type='radio' name='price' id='desc' value='desc' />
            <label htmlFor='desc'>Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img src="" className='catImg' alt="" />
      </div>
    </div>
  );
}
