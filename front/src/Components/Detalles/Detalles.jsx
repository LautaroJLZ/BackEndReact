import React, { useContext } from "react";
import "./Detalles";
import CartContext from "../Contex/CartContex";

import "react-toastify/dist/ReactToastify.css";

const Detalles = ({ dato }) => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="border border-gray-300 rounded-lg shadow-md hover:shadow-2xl transition-all overflow-hidden">
      <ol>
        <li>
          <div className="flex justify-center">
            <div className="w-[284px] h-[427px]">
              <div className="object-center">
                <img
                  src={dato.imagen}
                  alt="mueble"
                  className="w-[284px] h-[285px]"
                />
              </div>
              <div className="w-[284px] h-[142px] p-5">
                <p className="font-extralight text-xs">{dato.nombre}</p>
                <p className="font-bold text-lg">{dato.marca}</p>
                <div className="flex space-x-2">
                  <p className="line-through text-xl">{dato.oferta}</p>
                  <p className="font-bold text-xl">${dato.precio}</p>
                </div>
                <div>
                  <button
                    className="bg-anotherBlack hover:bg-anotherGray hover:delay-75 text-white text-xs rounded-lg w-28 h-5 "
                    onClick={() => {
                      addItemToCart(dato);
                    }}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export { Detalles };
