import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import categorie from "../data/Categories.json";

export const Categories = () => {

  

  return (
    <div className="container mx-auto m-20" id="categories" >
      <h1 className="text-3xl font-bold text-center text-Green">
        Categories
      </h1>

      <div className="flex flex-col md:flex-row  space-y-3 space-x-0 md:space-x-16 md:space-y-0 justify-center  p-14">
        {categorie.map((catgr, index) => (
          <Link to={`/Categories/${catgr.title}`} key={index}>
            <div className="flex flex-col items-center space-y-2 border-2 shadaw border-Green rounded-xl p-5 ">
              <img
                src={catgr.imageSrc}
                alt={catgr.title}
                className="w-20 h-35"
              />

              <h1 className="font-bold">{catgr.title}</h1>
              <p>{catgr.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
