import React from 'react';
import { cities } from '../data/data';

const TopButtons = () => {
  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city) => (
        <button key={city.id} className='text-white text-lg font-medium'>{city.name}</button>
      ))}
    </div>
  )
}

export default TopButtons;