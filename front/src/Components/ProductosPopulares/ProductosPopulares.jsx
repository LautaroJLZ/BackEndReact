import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Detalles } from "../Detalles/Detalles";

const ProductosPopulares = () => {
  const [datos, setDatos] = useState(null);
  console.log(datos);
  useEffect(() => {
    const mifuncion = async () => {
      const response = await fetch("/miapi/pepe"); //==> /
      const json = await response.json();
      if (response.ok) {
        setDatos(json);
      }
    };
    mifuncion();
  }, []);

  return (
    <div>
      <div>
        <div className="flex-col">
          <div className="flex flex-wrap gap-5 justify-center ">
            {datos &&
              datos.slice(0, 4).map((dato) => (
                <div key={dato._id}>
                  <div>
                    <Detalles dato={dato} />
                  </div>
                </div>
              ))}
          </div>
          <div className="my-10 flex justify-center">
        <Link
          to="/ProductsList"
          className="cursor-pointer px-6 py-2 rounded-lg bg-anotherBlack text-white hover:text-black hover:bg-gray-500 active:text-red-700"
        >
          Ver todos los productos
        </Link>
      </div>
        </div>
      </div>
    </div>
  );
};

export { ProductosPopulares };
