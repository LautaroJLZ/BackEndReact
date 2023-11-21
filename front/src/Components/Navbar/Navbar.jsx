import React from "react";
import "./Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu((prevState) => !prevState);
  };

  const [carrito, setCarrito] = useState(true);

  const hacerClick = () => {
    setCarrito((prevState) => !prevState);
  };

  return (
    <header>
      <div className="logo">
        <div className="flex w-full fixed h-20 bg-white z-200">
          <div className="flex w-[90%] m-auto items-center justify-between">
            <div className="flex flex-row justify-evenly h-full items-center relative">
              <span>
                <i
                  className="bi bi-list text-2xl pl-1 cursor-pointer  pr-10 lg:hidden"
                  onClick={handleClick}
                ></i>
              </span>
              <Link to="/">
                <h1 className="font-bold text-xl md:text-2xl  lg:pr-20">
                  KURSIKU
                </h1>
              </Link>

              <nav className="flex ">
                <ul
                  className={` ${
                    menu ? "left-0" : "left-[-350px]"
                  } flex-col absolute  rounded-b-lg left-0 bg-white right-22 mx-auto top-10 w-72 trasition-all ease-in duration-500   lg:flex lg:flex-row lg:gap-12 lg:font-light lg:static`}
                >
                  <li className="p-2 mb-5  hover:bg-slate-200 active:bg-slate-400 rounded-lg lg:mb-0">
                    <Link to="/">Inicio</Link>
                  </li>
                  <li className="p-2 mb-5  hover:bg-slate-200 active:bg-slate-400 rounded-lg lg:mb-0">
                    <Link to="/ProductsList">Productos</Link>
                  </li>
                  <li className="p-2 mb-5 hover:bg-slate-200 active:bg-slate-400 rounded-lg lg:mb-0">
                    <a href="#nuevos">Nuevos</a>
                  </li>
                  <li className="p-2 mb-5 hover:bg-slate-200 active:bg-slate-400 rounded-lg lg:mb-0">
                    <a href="#promo">Promo</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-row  justify-end">
              <div className="flex flex-row justify-around md:gap-6 items-center ">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <SearchBar />
                  </div>

                  <button>
                    <i
                      className=" relative bi bi-cart text-black p-3 hover:bg-slate-200 active:bg-slate-400 rounded-lg
                
                "
                      onClick={hacerClick}
                    ></i>
                    <ul
                      className={`
                ${carrito ? "right-[-350px]" : "right-12"} 
                flex flex-col absolute  justify-center items-center pb-8  rounded-b-lg   left-22 bg-white right-0 mx-auto top-20   w-72 trasition-all ease-in duration-500  `}
                    >
                      <li className="mb-5">Carrito vacio</li>
                      <button className="bg-anotherBlack hover:bg-anotherGray text-white rounded-xl w-28 p-2">
                        Vaciar Carrito
                      </button>
                    </ul>
                  </button>
                  <i className="md:hidden">|</i>
                </div>

                <div className=" hidden md:flex md:gap-3 ">
                  <Link to="/Signup" className="p-2 rounded-lg hover:bg-slate-200 active:bg-slate-400">
                    Registrate
                  </Link>
                  <Link to="/Login" className="bg-anotherBlack hover:bg-anotherGray text-white rounded-xl w-28 p-2">
                    Iniciar Sesion
                  </Link>
                </div>
                <div className="md:hidden">
                  <button>
                    <i className="bi bi-person-add text-lg text-black p-3 hover:bg-slate-200 active:bg-slate-400 rounded-lg"></i>
                  </button>
                  <button>
                    <i className="bi bi-person text-lg text-white p-3 bg-anotherBlack hover:bg-anotherGray hover:text-white rounded-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
