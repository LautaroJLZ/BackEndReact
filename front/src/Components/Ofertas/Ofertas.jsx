import React from "react";
import sofa1 from "../../assets/sofa1.png";
import sofa2 from "../../assets/sofa2.png";
import sofa3 from "../../assets/sofa3.png";
import sofa4 from "../../assets/sofa4.png";

const Ofertas = () => {
  return (
    <div className="w-[90%] m-auto" id="nuevos">
      <div className="block md:flex py-10">
        <div className="w-full md:w-[50%] h-full flex justify-start my-5">
          <div className="flex justify-center items-center w-[90%] h-full ">
            <img src={sofa1} alt="" className="w-full rounded-2xl transition-transform transform hover:scale-105 duration-500 ease-in-out" />
          </div>
        </div>

        <div className="w-full md:w-[50%] flex justify-center my-5">
          <div className="w-[90%] flex flex-col justify-evenly items-start">
            <p className=" text-4xl font-bold pt-5">
              Nuestros diseños de sillas son modernos y elegantes.
            </p>
            <p className="pb-14">
              Los diseños modernos y elegantes hacen que los clientes adoren
              nuestros productos, por lo que nos convertimos en el número 1 en
              muebles...
            </p>
            <button className=" border-2 border-gray-400 text-anotherGray rounded-md py-1 px-10 font-bold hover:bg-gray-400">
              Leer más
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:flex py-10">

        <div className="w-full md:w-[50%] flex justify-center my-5 order-2 md:order-1">
          <div className="w-[90%] flex flex-col justify-evenly items-start">
            <p className=" text-4xl font-bold pt-5">
              Más de 10.000 productos interesantes que vendemos.
            </p>
            <p className="pb-14">
              Más de 10.000 productos interesantes que vendemos aquí y, por
              supuesto, con una buena calidad media...
            </p>
            <button className="border-2 border-gray-400 text-anotherGray rounded-md py-1 px-10 font-bold hover:bg-gray-400">
              Leer más
            </button>
          </div>
        </div>

        <div className="w-full md:w-[50%] h-full flex justify-start my-5 order-1 md:order-2">
          <div className="flex justify-center items-center w-[90%] h-full  ">
            <img src={sofa2} alt="" className="w-full rounded-2xl transition-transform transform hover:scale-105 duration-500 ease-in-out" />
          </div>
        </div>

      </div>

      <div className="block md:flex py-10">
        <div className="w-full md:w-[50%] h-full flex justify-start my-5">
          <div className="flex justify-center items-center w-[90%] h-full ">
            <img src={sofa3} alt="" className="w-full rounded-2xl transition-transform transform hover:scale-105 duration-500 ease-in-out" />
          </div>
        </div>
        <div className="w-full md:w-[50%] flex justify-center my-5">
          <div className="w-[90%] flex flex-col justify-evenly items-start">
            <p className=" text-4xl font-bold pt-5">
              Muchos accesorios para embellecer tu habitación.
            </p>
            <p className="pb-14">
              Muchos accesorios interesantes para embellecer tu habitación,
              accesorios de varios países...
            </p>
            <button className="border-2 border-gray-400 text-anotherGray rounded-md py-1 px-10 font-bold hover:bg-gray-400">
              Leer más
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:flex py-10">
        <div className="w-full md:w-[50%] flex justify-center my-5 order-2 md:order-1">
          <div className="w-[90%] flex flex-col justify-evenly items-start">
            <p className=" text-4xl font-bold pt-5">
              Vendemos productos de la mejor calidad del mercado.
            </p>
            <p className="pb-14">
              Vendemos productos de la mejor calidad del mercado, y es por eso
              que muchos prefieren nuestros productos sobre otros...
            </p>
            <button className="border-2 border-gray-400 text-anotherGray rounded-md py-1 px-10 font-bold hover:bg-gray-400">
              Leer más
            </button>
          </div>
        </div>

        <div className="w-full md:w-[50%] h-full flex justify-start my-5 order-1 md:order-2">
          <div className="flex justify-center items-center w-[90%] h-full ">
            <img src={sofa4} alt="" className="w-full rounded-2xl transition-transform transform hover:scale-105 duration-500 ease-in-out" />
          </div>
        </div>

      </div>
    </div>
  );
};

export { Ofertas };
