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
import React, { useEffect, useState } from 'react';
import { Detalles } from '../Components/Detalles/Detalles';

const ProductsList = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        // Utiliza la URL de tu backend basada en el entorno
        const backendUrl = process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://back-end-project-react.onrender.com';

        // Hacer la llamada a la API utilizando la URL del backend
        const response = await fetch(`${backendUrl}/miapi/pepe`);
        const json = await response.json();

        if (response.ok) {
          setDatos(json);
        } else {
          console.error('Error al obtener datos:', json);
        }
      } catch (error) {
        console.error('Error en la llamada a la API:', error);
      }
    };

    // Llamar a la función para obtener datos al montar el componente
    obtenerDatos();
  }, []); // El segundo argumento [] asegura que useEffect se ejecute solo una vez al montar el componente

  // Renderizar tu componente con los datos
  return (
    <div className='w-[90%] my-10 m-auto'>
      <div className='flex flex-wrap gap-7 justify-center'>
        {datos &&
          datos.map((dato) => (
            <div key={dato._id}>
              <div>
                <Detalles dato={dato} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export { ProductsList };