import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export const Scroll = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the products:', error);
        setError('Failed to fetch products.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="relative z-10 max-w-7xl overflow-hidden">
      <div className="scroll-content flex space-x-16 animate-loop-scroll">
        {products.map(product => (
          <div key={product._id} className="inline-block p-4">
            <img src={product.image} alt={product.name} className="w-48 h-48 object-cover" />
            <p className="mt-2 text-center">{product.name}</p>
            <p className="text-center">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};