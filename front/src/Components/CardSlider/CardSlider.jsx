import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ronnie Coleman",
    job: "Culturista",
    title: "Light Weight",
    comment:
      "Todo está cada vez más integrado para que la compra sea más eficiente. Sólo tienes que marcar en la tienda listo para realizar el pedido y la mercancía se enviará lo antes posible. Cuando la mercancía haya llegado, entrará automáticamente una notificación de pedido.",
    image:
      "https://github.com/MaxRambo90/Ecommerce/blob/respaldo/Front/ecomerce/src/assets/RonnieColeman.png?raw=true",
  },
  {
    id: 2,
    name: "Lionel Messi",
    job: "Futbolista",
    title: "Gran experiencia",
    comment:
      "La página web de ventas es un verdadero paraíso para los amantes de las compras en línea. Ofrece una amplia gama de productos de alta calidad, desde moda y tecnología hasta productos para el hogar. La interfaz de usuario es intuitiva y fácil de navegar, lo que facilita la búsqueda de productos deseados. Los precios son competitivos, y las ofertas y descuentos frecuentes hacen que las compras sean aún más atractivas. La atención al cliente es excelente, con un equipo amable y dispuesto a ayudar en cualquier momento. La rapidez en la entrega y la seguridad en las transacciones hacen que esta página web sea la elección perfecta para compradores en línea exigentes. ¡Una experiencia de compra inmejorable!",
    image:
      "https://github.com/MaxRambo90/Ecommerce/blob/respaldo/Front/ecomerce/src/assets/LeoMessi.png?raw=true",
  },
  {
    id: 3,
    name: "Gustavo Ceratti",
    job: "Músico",
    title: "Muy buenos muebles",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit natus assumenda dolore facere dicta veniam quis, numquam, quasi soluta perferendis quae, saepe sed officia commodi possimus molestias distinctio delectus consequuntur.Ratione provident est sunt officiis, quod expedita eos deserunt accusamus accusantium praesentium assumenda vitae, odit excepturi id sequi cupiditate quisquam vel! Porro obcaecati dolores, asperiores impedit error quod in reiciendis.",
    image:
      "https://github.com/MaxRambo90/Ecommerce/blob/respaldo/Front/ecomerce/src/assets/gustavo.jpg?raw=true",
  },
  {
    id: 4,
    name: "Geronimo Benavides",
    job: "Streamer",
    title: "Me cambio la vida",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit natus assumenda dolore facere dicta veniam quis, numquam, quasi soluta perferendis quae, saepe sed officia commodi possimus molestias distinctio delectus consequuntur.Ratione provident est sunt officiis, quod expedita eos deserunt accusamus accusantium praesentium assumenda vitae, odit excepturi id sequi cupiditate quisquam vel! Porro obcaecati dolores, asperiores impedit error quod in reiciendis.",
    image:
      "https://github.com/MaxRambo90/Ecommerce/blob/respaldo/Front/ecomerce/src/assets/momo.png?raw=true",
  },
  {
    id: 5,
    name: "Chris Bumstead",
    job: "Culturista",
    title: "5 veces campeon",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit natus assumenda dolore facere dicta veniam quis, numquam, quasi soluta perferendis quae, saepe sed officia commodi possimus molestias distinctio delectus consequuntur.Ratione provident est sunt officiis, quod expedita eos deserunt accusamus accusantium praesentium assumenda vitae, odit excepturi id sequi cupiditate quisquam vel! Porro obcaecati dolores, asperiores impedit error quod in reiciendis.",
    image:
      "https://github.com/MaxRambo90/Ecommerce/blob/respaldo/Front/ecomerce/src/assets/Chris%20Bumstead.jpg?raw=true",
  },
  {
    id: 6,
    name: "Guido Kaczka",
    job: "Conductor TV",
    title: "A ver la repe",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit natus assumenda dolore facere dicta veniam quis, numquam, quasi soluta perferendis quae, saepe sed officia commodi possimus molestias distinctio delectus consequuntur.Ratione provident est sunt officiis, quod expedita eos deserunt accusamus accusantium praesentium assumenda vitae, odit excepturi id sequi cupiditate quisquam vel! Porro obcaecati dolores, asperiores impedit error quod in reiciendis.",
    image:
      "https://github.com/MaxRambo90/Ecommerce/blob/respaldo/Front/ecomerce/src/assets/GuidoKaczka.png?raw=true",
  },
  // Agrega más testimonios aquí
];

function CardSlider() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];
  const totalTestimonials = testimonials.length;

  return (
    <div className="bg-gray-100 w-[90%]  m-auto my-20">
      <div className="w-full flex flex-col lg:flex lg:flex-row">
        <div className="w-full  lg:w-[70%] flex p-20">
          <div className="w-full">
            <h2 className="text-4xl font-bold text-black mb-4">
              Esto es lo que dicen
            </h2>

            <h3 className="text-black text-2xl font-bold mt-2 overflow">
              ❝ {currentTestimonial.title}
            </h3>

            <p className="text-gray-600 mt-5">{currentTestimonial.comment}</p>

            <div className="flex  justify-between items-center space-x-3">
              <div>
                <p className="text-black text-2xl font-bold mt-2">
                  {currentTestimonial.name}
                </p>
                <p className="text-gray-500">{currentTestimonial.job}</p>
              </div>
              <div className="flex justify-center items-center space-x-3">
                <button
                  onClick={prevTestimonial}
                  className=" text-gray-600 hover:text-gray-800"
                >
                  <i className="bi bi-arrow-left-circle-fill text-4xl text-anotherBlack"></i>
                </button>

                <div className=" text-gray-600">
                  {currentTestimonialIndex + 1}/{totalTestimonials}
                </div>

                <button onClick={nextTestimonial} className="">
                  <i className="bi bi-arrow-right-circle-fill text-4xl text-anotherBlack"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[30%] flex  ">
          <img
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            className="w-full rounded-lg   object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default CardSlider;
