import React from 'react';
import './Login'
const Login = () => {
    return(
        <div className='h-screen flex justify-center items-center'>
            {/* <h1 className='text-5xl bg-anotherGray p-4 rounded-lg hover:text-6xl hover:bg-anotherBlack transition-all'>Log in</h1> */}
            <form className='flex flex-col bg-anotherGray w-1/2 h-2/3 rounded-2xl justify-center items-center' action="">
                <h2 className='text-4xl text-white font-bold text-center'>Iniciar Sesión</h2>
                <div>
                    <label htmlFor="">Usuario</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Contraseña</label>
                    <input type="text" />
                </div>
                <button>Iniciar</button>
            </form>
        </div>
    )
}

export { Login }