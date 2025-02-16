import React from 'react';

const Header = () => {
  return (
    <nav className='bg-gray-800 p-4 text-white flex justify-between'>
      <h1 className='text-2xl font-bold'>Trendify_4u</h1>
      <ul className='flex space-x-4'>
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};

export default Header;  