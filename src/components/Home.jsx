import React from 'react';

const Home = () => {
  return (
    <section className='p-4'>
      <h2 className='text-3xl font-bold mb-4'>Trending Now</h2>
      <div className='overflow-hidden rounded-xl shadow-lg'>
        <div className='w-full h-60 bg-cover bg-center' style={{ backgroundImage: "url('https://via.placeholder.com/800x400')" }}></div>
      </div>
    </section>
  );
};

export default Home;