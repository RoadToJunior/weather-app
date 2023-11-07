import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  return (
    <div className='w-full h-screen bg-black'>
        <div className='flex justify-center items-center'>
            <div className='text-red'>abc</div>
            <input type="text" />
            <BsSearch className=''/>
        </div>
    </div>
  )
}

export default Search