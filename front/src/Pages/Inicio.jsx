import React, { useEffect, useState } from 'react';
import './Inicio'
import { Detalles } from '../Components/Detalles/Detalles';
import { SeccionHome } from '../Components/SeccionHome/SeccionHome';
import { Navbar } from '../Components/Home/Navbar';
import { Espaciador } from '../Components/Espaciador/Espaciador';
import { MueblesExlusivos } from '../Components/MueblesExlusivos/MueblesExlusivos';
import { CaracteristicasEspeciales } from '../Components/CaracteristicasEspeciales/CaracteristicasEspeciales';
import { Ofertas } from '../Components/Ofertas/Ofertas';
import { ProductosPopulares } from '../Components/ProductosPopulares/ProductosPopulares';
import  CardSlider  from '../Components/CardSlider/CardSlider';
import { Footer } from '../Components/Footer/Footer';


const Inicio = () => {
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
            <div>
                <Navbar/>
                <Espaciador/>
                <SeccionHome/>
                <Espaciador/>
                <MueblesExlusivos/>
                <CaracteristicasEspeciales/>
                <Ofertas/>
                <ProductosPopulares/>
                {/* <div className='flex justify-evenly flex-wrap'>
                    {datos &&  datos.map(dato=>(
                    <div>
                        <div>
                            <Detalles dato={dato} key={dato._id} />
                        </div>
                    </div>
                    ))}
                </div> */}
                <CardSlider/>
                <Footer/>
            </div>
        )
}
export { Inicio }