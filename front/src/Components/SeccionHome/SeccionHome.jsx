import React from "react";

const SeccionHome = () => {
  return (
    <div id="inicio" className=" h-[80vh] w-[90%] m-auto ">
      <div className="relative h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black z-10  rounded-lg"></div>

        <div className="relative h-full w-full bg-cover bg-center bg-no-repeat bg-living  rounded-lg">
          <div className="h-full w-full px-5 lg:px-0 lg:w-[70%] flex flex-col text-white justify-evenly items-start">
            <div className=" pl-0 text-center lg:text-left lg:pl-48 z-100 flex flex-col justify-center w-full lg:w-[70%]">
              <p className="text-5xl font-bold mb-4 text-white">
                Encuentre aquí los mejores muebles para su hogar.
              </p>
            </div>

            <div className="pl-0 lg:pl-48 text-center lg:text-left z-100 flex items-center w-full lg:w-[70%]">
              <p className="text-xl text-white">
                Las sillas de acento en Herman Miller incluyen un claro acento
                de diseño moderno de mediados del siglo
              </p>
            </div>

            <div className="pl-0 lg:pl-48 z-100 flex w-full justify-center lg:justify-start items-center">
              <button className=" bg-anotherBlack hover:bg-anotherGray text-white rounded-xl w-fit py-3 px-9">
                Comprar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SeccionHome };
