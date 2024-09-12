import React from 'react'

export const Contact = () => {
  return (
    <div className="container mx-auto flex flex-col m-16 text-center">
        <h1 className="text-3xl font-bold text-center text-Green">Contact Me</h1>
        <form action="">

            <div className=' mt-4'>
                <input type="text" placeholder='your name' className='  p-4 border-2 border-Green w-96 rounded-xl'/>
            </div>

            <div className=' mt-4'>
                <input type="text" placeholder='email' className=' p-4 border-2 border-Green w-96 rounded-xl'/>
            </div>

            <div className=' mt-4'>
                <textarea placeholder='your message ... ' className=' p-4 border-2 border-Green w-96 rounded-xl' />
            </div>

            <div className=' mt-4'>
                <button className="bg-Green px-6  py-2 rounded-2xl  text-white">send</button>
            </div>
            
        </form>
    </div>
  )
}
