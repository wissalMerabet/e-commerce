import React from 'react'

export const Productdetails = () => {
  return (
    <div className="container mx-auto p-12">

        <h1 className="text-3xl font-bold text-center text-red-600">Product details</h1>
        <div className="flex flex-row space-x-6 p-8" >
            <div>
                <img src="../assets/laptop.png" alt="" />
                <ul>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                </ul>


            </div>

            <div className="flex flex-col space-y-4 ">
                <h3 className="font-bold text-3xl">Fabflee Party Printed Women's Top</h3>
                <h4 className="text-xl text-red-600">4000 DZ</h4>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                <div className="flex flex-row space-x-6 items-center">
                    <p>Size:</p>
                    <ul className="flex flex-row space-x-3 ">
                        <li className="border-2 border-gray-300 p-2 rounded-lg hover:bg-gray-300"><a href="">S</a></li>
                        <li className="border-2 border-gray-300 p-2 rounded-lg hover:bg-gray-300"><a href="">M</a></li>
                        <li className="border-2 border-gray-300 p-2 rounded-lg hover:bg-gray-300"><a href="">L</a></li>
                        <li className="border-2 border-gray-300 p-2 rounded-lg hover:bg-gray-300"><a href="">XL</a></li>
                    </ul>
                </div>

                <div className="flex flex-row space-x-4 items-center">

                    <button className="rounded-full bg-gray-200 px-3 py-1">-</button>
                    <input type="text" value="1" className="w-4 h-4 border-none"/>
                    <button className="rounded-full bg-gray-200 px-3 py-1">+</button>
                    <button className="rounded-3xl bg-red-600 text-white py-2 px-4 hover:bg-red-900">Add to cart</button>

                </div>
            



            </div>
            

        </div>



    </div>
  )
}

