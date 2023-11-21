const Footer = () => {
  return (
    <div className=" w-full h-max pb-12 pt-12 bg-anotherBlack  flex justify-center items-center text-slate-300   ">
      <div className=" grid grid-cols-1 mx-20 sm:grid-cols-2 sm:mx-20 md:grid-cols-4 md:mx-20 ">
        <div>
          <h5 className="font-bold uppercase pb-5">Servicio al cliente</h5>
          <ul className="text-sm text-slate-300  ">
            <li className="hover:text-slate-200  pb-2">
              <a href="#">Centro de resolucion</a>
            </li>
            <li className="hover:text-slate-200 pb-2">
              <a href="#">Como comprar</a>
            </li>
            <li className="hover:text-slate-200 pb-2">
              <a href="#">Pagos</a> 
            </li>
            <li className="hover:text-slate-200 pb-2">
              <a href="#">Trasporte de carga </a>
            </li>
            <li className="hover:text-slate-200 pb-2">
              <a href="#">Programa de pago </a>
            </li>
            <li className="hover:text-slate-200 pb-2">
              <a href="#">Compras gratis</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase pb-5">Kursiku</h5>
          <ul className="text-sm text-slate-300 gap-5">
            <li className="hover:text-slate-200 pb-2">
              <a href="#">Sobre informacion </a>
            </li>
            <li className="hover:text-slate-200 pb-2 ">
              <a href="#">Blog</a>
            </li>
            <li className="hover:text-slate-200 pb-2">
              <a href="#">Catalogo</a>
            </li>
            <li className="hover:text-slate-200 pb-2">
              <a href="#">Ubicaion de la tienda</a>
            </li>
            <li className="hover:text-slate-200 pb-2">
              <a href="#">Carrera</a>
            </li>
            <li className="hover:text-slate-200 pb-2">
              <a href="#">Afiliado</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold uppercase pb-5">Ayuda</h5>
          <ul className="text-sm text-slate-300 ">
            <li className="hover:text-slate-200 pb-2">
              <a href="#">Politica de privacidad </a>
            </li>
            <li className="hover:text-slate-200 pb-2">
              <a href="#">Terminos y condiciones</a>
            </li>
            <li className="hover:text-slate-200 pb-2">
              <a href="#">Contactanos </a>
            </li>
            <li className="hover:text-slate-200 pb-2">
              <a href="#">Preguntas frecuentes</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase pb-5">Nuestra app movil</h5>
          <p className="text-sm text-slate-300 pb-5">
            Descarga la aplicacion kursiku disponible para iOS Y Android
          </p>
          <div className="flex space-x-5 pb-7">
            <button className="bi bi-apple bg-black rounded-lg text-white text-sm w-[100px] h-[35px] hover:bg-gray-900 duration-200">
              App Store
            </button>
            <button className="bi bi-google-play bg-black rounded-lg text-white text-sm w-[100px] h-[35px] hover:bg-gray-900 duration-200">
              Google Play
            </button>
          </div>

          <h5 className="font-bold uppercase pb-4">Lista de boletines </h5>
          <p className="text-sm text-slate-300 pb-4">
            Sea el primero en obtener información sobre descuentos y ofertas
            atractivas de kursiku.com
          </p>

          <form action="" className="h-fit flex items-center">
            <div className="block md:flex md:flex-wrap space-x-2">
              <input
                className="outline-none rounded text-slate-600 p-2 mb-2 md:mb-0 w-fit"
                type="email"
                placeholder="Ingresa tu email"
              />
              <button className=" border-white text-white w-fit  border-2  rounded-lg px-2">Suscribite si o si</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Footer };
