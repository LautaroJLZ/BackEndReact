import React from 'react';
import './Login'
const Login = () => {
    return(
        <div className='h-screen flex justify-center items-center bg-gray-200'>
            <form className='flex flex-col bg-slate-100 shadow-gray-200 w-2/3 h-2/3 rounded-2xl justify-center items-center' action="">
                <h2 className='text-2xl md:text-4xl text-black text-center mb-2 md:mb-1'>Iniciar Sesión</h2>
                <div className='flex flex-col text-black py-2 w-1/2'>
                    <label className='text-base' htmlFor="">Usuario</label>
                    <input className='rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-black py-2 w-1/2'>
                    <label className='text-base' htmlFor="">Contraseña</label>
                    <input className='rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-xs mt-3 gap-3 md:gap-0 text-black md:flex-row md:py-2 md:w-1/2 md:justify-between'>
                    <p className='flex items-center'><input className='mr-2 cursor-pointer' type="checkbox" />Recuerdame </p>
                    <p className='cursor-pointer'>Contraseña olvidada</p>
                </div>
                <button className='w-1/2 my-5 py-2 bg-gray-300 shadow-lg shadow-gray-500/30 text-black rounded-lg hover:bg-gray-600'>Iniciar</button>
            </form>
        </div>
    )
}

export { Login }