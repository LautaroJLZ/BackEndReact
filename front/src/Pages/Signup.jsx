import React from 'react';
import './Signup'
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";
import {registerRequest} from '../api/auth.js'

const Signup = () => {

    const { register, handleSubmit } = useForm();

    return(
        <div className='h-screen flex justify-center items-center bg-gray-200'>
            <form onSubmit={handleSubmit(async(values) => {
                console.log(values);
                const res =  await registerRequest(values)
                console.log(res)
            })} className='flex flex-col bg-slate-100 shadow-gray-200 w-2/3 h-3/4 rounded-2xl justify-center items-center'>
                <h2 className='text-2xl md:text-4xl text-black text-center mb-2 md:mb-1'>Registrarse</h2>
                <div className='flex flex-col text-black py-2 w-1/2'>
                    <label className='text-base' htmlFor="">Usuario</label>
                    <input className='rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none' type="text" {...register("username", {required: true})} />
                </div>
                <div className='flex flex-col text-black py-2 w-1/2'>
                    <label className='text-base' htmlFor="">Email</label>
                    <input className='rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none' type="email" {...register("email", {required: true})} />
                </div>
                <div className='flex flex-col text-black py-2 w-1/2'>
                    <label className='text-base' htmlFor="">Contraseña</label>
                    <input className='rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none' type="password" {...register("password", { required: true })} />
                </div>
                <div className='flex flex-col text-xs mt-3 gap-3 md:gap-0 text-black md:flex-row md:py-2 md:w-1/2 md:justify-between'>
                    <p className='flex items-center'><input className='mr-2 cursor-pointer' type="checkbox" />Recuerdame </p>
                    <Link to="/Login" className='cursor-pointer'>Ya tengo una cuenta</Link>
                </div>
                <button className='w-1/2 my-5 py-2 bg-gray-300 shadow-lg shadow-gray-500/30 text-black rounded-lg hover:bg-gray-500 hover:delay-75' type="submit">Iniciar</button>
            </form>
        </div>
    )
}

export { Signup }