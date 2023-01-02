import React from 'react';
import Card from '../Card/Card';

export default function FeaturedProducts({ type }) {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2:'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Long Sleeve T-shirt',
      isNew: true,
      oldPrice: 20,
      price: 10,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'John Garot T-shirt',
      isNew: true,
      oldPrice: 30,
      price: 15,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Steeve Johny T-shirt',
      isNew: false,
      oldPrice: 25,
      price: 13,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Micheal Irish T-shirt',
      isNew: false,
      oldPrice: 32,
      price: 18,
    },
  ];

  return (
    <div className='my-24 mx-48'>
      <div className='flex  items-center justify-between w-full mb-12'>
        <h1 className='flex capitalize w-1/3 text-xl font-bold'>
          {type}products
        </h1>
        <p className='flex w-2/3 text-slate-600 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsam
          iste dicta maxime excepturi, ipsum dolore? Cum eius quibusdam magnam
          corrupti necessitatibus quaerat, distinctio, sapiente magni hic
          consequuntur veritatis blanditiis.
        </p>
      </div>
      <div className='flex justify-center gap-12'>
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
