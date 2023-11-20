import React from 'react';
import './Detalles'


const Detalles = ({dato}) => {
    return(
    <div className="w-[90%] m-auto items-center text-center" id="productos">
            <div className="text-start">
                <div className="w-full block md:flex md:justify-evenly md:flex-wrap">
                    <div className=" flex flex-col items-center">
                        <div className="">
                            <img src={dato.imagen} alt="Silla 1" />
                        </div>
                        <div className="">
                            <p className="font-extralight text-sm">{dato.nombre}</p>
                            <p className="font-bold">{dato.marca}</p>
                            <div className="flex space-x-2">
                            <p className="line-through">{dato.oferta}</p>
                            <p className="font-bold">${dato.precio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
</div> 
    )
}

export { Detalles }

