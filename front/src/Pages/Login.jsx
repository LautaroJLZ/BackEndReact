import React from 'react';
import './Login'
const Login = () => {
    return(
        <div className='h-screen flex justify-center items-center bg-gray-200'>
            {/* <h1 className='text-5xl bg-anotherGray p-4 rounded-lg hover:text-6xl hover:bg-anotherBlack transition-all'>Log in</h1> */}
            <form className='flex flex-col bg-gray-500 w-2/3 h-2/3 rounded-2xl justify-center items-center' action="">
                <h2 className='text-4xl text-white font-bold text-center'>Iniciar Sesión</h2>
                <div className='flex flex-col text-gray-900 py-2 w-1/2'>
                    <label htmlFor="">Usuario</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-900/80 py-2 w-1/2'>
                    <label htmlFor="">Contraseña</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex justify-between text-gray-900/80 py-2 w-1/2'>
                    <p className='flex items-center'><input className='mr-2 cursor-pointer' type="checkbox" />Recuerdame </p>
                    <p className='cursor-pointer'>Contraseña olvidada</p>
                </div>
                <button className='w-1/2 my-5 py-2 bg-gray-800 shadow-lg shadow-gray-500/30 text-white font-semibold rounded-lg hover:bg-gray-700'>Iniciar</button>
            </form>
        </div>
    )
}

export { Login }