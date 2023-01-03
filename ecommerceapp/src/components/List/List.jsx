import React from 'react';
import Card from '../Card/Card';

export default function List() {
  const data = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1667477159482-db346abdcd56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      img2: 'https://images.unsplash.com/photo-1667258605672-58960b4e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjI5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Long Sleeve T-shirt',
      isNew: true,
      oldPrice: 20,
      price: 10,
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1667261005389-18a6d91b2c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'John Garot T-shirt',
      isNew: true,
      oldPrice: 30,
      price: 15,
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1667142647252-88f958f168ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Jane joe',
      isNew: false,
      oldPrice: 25,
      price: 13,
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1667318132941-39f7b68bbeb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTk5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Micheal Irish T-shirt',
      isNew: false,
      oldPrice: 32,
      price: 18,
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1667247986917-d6dc31781646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Steeve Johny T-shirt',
      isNew: false,
      oldPrice: 25,
      price: 13,
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1667337779078-475436e7d96f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'John Garot T-shirt',
      isNew: false,
      oldPrice: 30,
      price: 15,
    },
  ];
  return (
    <div className='list flex justify-between flex-wrap'>
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}
