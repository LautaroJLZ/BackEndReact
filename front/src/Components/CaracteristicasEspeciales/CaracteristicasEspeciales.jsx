import { CardCaracteristicas } from "./CardCaracteristicas";

const CaracteristicasEspeciales = () => {
  const cardEspeciales = [
    {
      id: 1,
      titulo: "Pago Facil",
      subtitulo:
        "Pago muy fácil y rápido para que sea más fácil para el usuario",
      icon: "bi bi-credit-card-2-back-fill",
    },
    {
      id: 2,
      titulo: "Promociones",
      subtitulo: "Muchas promociones interesantes y vales esperándote",
      icon: "bi bi-patch-check-fill",
    },
    {
      id: 3,
      titulo: "Envios Rapidos",
      subtitulo: "Entrega rápida y puede llegar a todas partes del mundo.",
      icon: "bi bi-bus-front",
    },
    {
      id: 4,
      titulo: "Guardar en el carrito",
      subtitulo: "Es fácil de usar y no molesta en absoluto al usuario.",
      icon: "bi bi-cart-check-fill",
    },
  ];
  return (
    <div className="w-full px-5 mt-16">
      <div className=" text-center">
        <h3 className="font-bold text-2xl ">
          Nuestras caracteristias especiales para ti{" "}
        </h3>
        <p className="text-gray-400 mt-5 ">
          Ofrecemos una variedad de características especiales para usted, para
          hacerlo más fácil y hacerte aún más feliz comprando aquí
        </p>
      </div>
      <div className="flex justify-center items-center gap-16 mt-16 flex-wrap ">
        {cardEspeciales.map((cardEspeciale) => (
          <div key={cardEspeciale.id}>
            <CardCaracteristicas
              titulo={cardEspeciale.titulo}
              subtitulo={cardEspeciale.subtitulo}
              icon={cardEspeciale.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { CaracteristicasEspeciales };
