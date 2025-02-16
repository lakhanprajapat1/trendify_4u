import React from 'react';

const products = [
  { id: 1, name: 'Trendy Shirt', price: 25 },
  { id: 2, name: 'Stylish Jeans', price: 40 },
  { id: 3, name: 'Cool Jacket', price: 60 }
];

const Products = () => {
  return (
    <section className='p-4'>
      <h2 className='text-3xl font-bold mb-4'>Our Products</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {products.map((product) => (
          <div key={product.id} className='border p-4 rounded-xl'>
            <h3 className='text-xl font-semibold'>{product.name}</h3>
            <p className='text-lg'>${product.price}</p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded mt-2'>Explore Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;