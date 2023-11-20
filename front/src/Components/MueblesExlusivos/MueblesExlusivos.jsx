import React from 'react';
import LR from '../../assets/living_room.png'
import BR from '../../assets/Bedroom.png'
import WS from '../../assets/WorkSpace.png'
import KC from '../../assets/Kitchen.png'

const MueblesExlusivos = () => {
    return(
        <div className='w-[90%] m-auto'>
            <div>
                <h1 className='text-center p-2 font-bold text-2xl'>Muebles Exclusivos</h1>
                <p className='text-center p-2'>Consulte la selección de productos populares de esta semana que podrían llamarle la atención y no.</p>
            </div>
            <div className='flex gap-5 justify-center flex-wrap'>
                <div className='w-[260px] h-[390px] text-center p-5 text-sm'>
                    <img src={LR} alt="Living Room" className='rounded-md w-full h-full' />
                    <p className='font-bold mt-3'>Sala de estar</p>
                </div>
                <div className='w-[260px] h-[390px] text-center p-5 text-sm'>
                    <img src={BR} alt="Bedroom" className='rounded-md w-full h-full' />
                    <p className='font-bold mt-3'>Dormitorio</p>
                </div>
                <div className='w-[260px] h-[390px] text-center p-5 text-sm'>
                    <img src={WS} alt="WorkSpace" className='rounded-md w-full h-full' />
                    <p className='font-bold mt-3'>Espacio de Trabajo</p>
                </div>
                <div className='w-[260px] h-[390px] text-center p-5 text-sm'>
                    <img src={KC} alt="Kitchen" className='rounded-md w-full h-full' />
                    <p className='font-bold mt-3'>Cocina</p>
                </div>
            </div>
        </div>
    )
}

export { MueblesExlusivos }