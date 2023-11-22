// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Detalles } from "../Detalles/Detalles";

// const ProductosPopulares = () => {
//   const [datos, setDatos] = useState(null);
//   console.log(datos);
//   useEffect(() => {
//     const mifuncion = async () => {
//       const response = await fetch("/miapi/pepe"); //==> /
//       const json = await response.json();
//       if (response.ok) {
//         setDatos(json);
//       }
//     };
//     mifuncion();
//   }, []);

//   return (
//     <div>
//       <div>
//         <div className="flex-col">
//           <div className="flex flex-wrap gap-5 justify-center ">
//             {datos &&
//               datos.slice(0, 4).map((dato) => (
//                 <div key={dato._id}>
//                   <div>
//                     <Detalles dato={dato} />
//                   </div>
//                 </div>
//               ))}
//           </div>
//           <div className="my-10 flex justify-center">
//         <Link
//           to="/ProductsList"
//           className="cursor-pointer px-6 py-2 rounded-lg bg-anotherBlack text-white hover:text-black hover:bg-gray-500 active:text-red-700"
//         >
//           Ver todos los productos
//         </Link>
//       </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { ProductosPopulares };


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Detalles } from "../Detalles/Detalles";

const ProductosPopulares = () => {

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
          // Mostrar solo los primeros 5 objetos de la base de datos
          setDatos(json.slice(0, 4));
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

export { ProductosPopulares };
