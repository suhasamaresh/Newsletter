import React from 'react';
import Pagination from './Pagination';
import Image from 'next/image';
import Card from './Card';

const CardList = () => {
  return (
    <div className='pl-10 md:pl-10 lg:pl-40 xl:flex-[5_5_0%]'>
        <h1 className='font-bold text-3xl mb-4'>Recent Posts</h1>
        <div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      <Pagination />
    </div>
  );
};

export default CardList;
