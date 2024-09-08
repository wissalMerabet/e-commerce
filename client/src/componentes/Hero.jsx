import React from 'react'

export const Hero = () => {
  return (

    <div className="container mx-auto flex flex-col-reverse h-svh  p-20 md:flex-row space-x-10 ">

        <div className="md:w-1/2 flex flex-col text-center md:text-left justify-center space-y-4" >
            <h1 className="text-3xl md:text-5xl font-bold text-red-600">Welcome to Our Store </h1>
            <p>Welcome to Our Store Welcome to Our Store Welcome to Our Store Welcome to Our Store Welcome to Our Store </p>
            <a href="" className="bg-red-600 p-2 rounded-2xl self-center md:self-start text-white">view more</a>
        </div>

        <div className="md:w-1/2" >
            <img src="../assets/hero.png" alt="" width="500" height="300" className=""/>
        </div>




    </div>
  );
}
