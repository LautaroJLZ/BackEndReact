import { Detalles } from '../Components/Detalles/Detalles';
import React, { useEffect, useState } from 'react';
import './ProductsList'

const ProductsList = () => {
    const [datos,setDatos]=useState(null)
    console.log(datos)
    useEffect(()=>{
            const mifuncion= async()=>{
                const response=await fetch('/miapi/pepe')//==> /
                const json= await response.json()
                if(response.ok){
                    setDatos(json)
                }
            }
            mifuncion()
    },[])
    return(
        
        <div className='w-[90%] my-10'>
            <div className='flex flex-wrap gap-5 justify-center '>
                    {datos &&  datos.map(dato=>(
                    <div>
                        <div >
                            <Detalles dato={dato} key={dato._id} />
                        </div>
                    </div>
                    ))}
                </div>
        </div>
    )
}

export { ProductsList }