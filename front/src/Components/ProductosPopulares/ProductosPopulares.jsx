import React from "react";
import silla1 from "../../assets/silla1.png";
import silla2 from "../../assets/silla2.png";
import silla3 from "../../assets/silla3.png";
import silla4 from "../../assets/silla4.png";
import { Link } from "react-router-dom";

const ProductosPopulares = () => {
  return (
    <div className="w-[90%] m-auto items-center text-center" id="productos">

      <div className="text-start">
        <div className="w-full block md:flex md:justify-evenly md:flex-wrap">

          <div className=" flex flex-col items-center">
            <div className="">
              <img src={silla1} alt="Silla 1" />
            </div>
            <div className="">
              <p className="font-extralight text-sm">Silla para estudio</p>
              <p className="font-bold">Silla Herman Miller</p>
              <div className="flex space-x-2">
                <p className="line-through p-2">$36.00</p>
                <p className="font-bold p-2">$32.00</p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col items-center">
            <div className="">
              <img src={silla2} alt="Silla 2" />
            </div>
            <div className="">
              <p className="font-extralight text-sm">Sillon</p>
              <p className="font-bold">Silla luella de tela</p>
              <div className="flex space-x-2">
                <p className="line-through p-2">$36.00</p>
                <p className="font-bold p-2">$29.99</p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col items-center">
            <div className="">
              <img src={silla3} alt="Silla 3" />
            </div>
            <div className="">
              <p className="font-extralight text-sm">Silla de trabajo</p>
              <p className="font-bold">Silla de mediados de siglo</p>
              <div className="flex space-x-2">
                <p className="line-through p-2">$41.20</p>
                <p className="font-bold p-2">$39.99</p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col items-center">
            <div className="">
              <img src={silla4} alt="Silla 4" />
            </div>
            <div className="">
              <p className="font-extralight text-sm">Siillon</p>
              <p className="font-bold">Silla de comer Cleo</p>
              <div className="flex space-x-2">
                <p className="line-through p-2">$23.40</p>
                <p className="font-bold p-2">$20.00</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="my-10">
        <Link to="/ProductsList" className="cursor-pointer px-6 py-2 rounded-lg bg-anotherBlack text-white hover:text-black hover:bg-gray-500 active:text-red-700">Ver todos los productos</Link>
      </div>
    </div>
  );
};

export { ProductosPopulares };
