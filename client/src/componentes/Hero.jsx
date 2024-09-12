import React from 'react';

export const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse space-y-16 space-x-0 md:space-y-0 h-svh p-10 md:flex-row md:space-x-28 items-center">
      <div className="md:w-1/2 flex flex-col text-center md:text-left justify-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-Green mt-4">Welcome to Our Store</h1>
        <p>Discover Your Signature Style: Shop the Latest Trends and Timeless Classics at Moda. Where Fashion Meets Comfort</p>
        <a href="#products" className="border-2 border-Green p-2 font-semibold rounded-full self-center md:self-start text-black hover:bg-Green hover:text-white">view more</a>
      </div>

      <div className="md:w-1/2 ">
        <img src="../assets/imhHero.png" alt="Fashionable Shopper" className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] object-cover" />
      </div>
    </div>
  );
};
