// import { Detalles } from '../Components/Detalles/Detalles';
// import React, { useEffect, useState } from 'react';
// import './ProductsList'

// const ProductsList = () => {

//     const [datos,setDatos]=useState(null)
//     console.log(datos)

//     useEffect(()=>{
//             const mifuncion= async()=>{
//                 const response=await fetch('/miapi/pepe')
//                 const json= await response.json()
//                 if(response.ok){
//                     setDatos(json)
//                 }
//             }
//             mifuncion()
//     },[])
//     return(

//         <div className='w-[90%] my-10'>
//             <div className='flex flex-wrap gap-5 justify-center '>
//                     {datos &&  datos.map(dato=>(
//                     <div>
//                         <div >
//                             <Detalles dato={dato} key={dato._id} />
//                         </div>
//                     </div>
//                     ))}
//                 </div>
//         </div>
//     )
// }

// export { ProductsList }
import React, { useContext } from "react";
import { Detalles } from "../Components/Detalles/Detalles";
import CartContext from "../Components/Contex/CartContex";
import { ToastContainer } from "react-toastify";

const ProductsList = () => {
  const { datos } = useContext(CartContext);

  // Renderizar tu componente con los datos
  return (
    <div className="w-[90%] my-10 m-auto">
      <div className="flex flex-wrap gap-7 justify-center">
        {datos &&
          datos.map((dato) => (
            <div key={dato._id}>
              <div>
                <Detalles dato={dato} />
              </div>
            </div>
          ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export { ProductsList };
