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
        
        <div className='min-h-screen'>
            <div className='flex justify-evenly flex-wrap'>
                    {datos &&  datos.map(dato=>(
                    <div>
                        <div>
                            <Detalles dato={dato} key={dato._id} />
                        </div>
                    </div>
                    ))}
                </div>
        </div>
    )
}

export { ProductsList }