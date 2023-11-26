import "./Inicio";
import { SeccionHome } from "../Components/SeccionHome/SeccionHome";
import { Espaciador } from "../Components/Espaciador/Espaciador";
import { MueblesExlusivos } from "../Components/MueblesExlusivos/MueblesExlusivos";
import { CaracteristicasEspeciales } from "../Components/CaracteristicasEspeciales/CaracteristicasEspeciales";
import { Ofertas } from "../Components/Ofertas/Ofertas";
import { ProductosPopulares } from "../Components/ProductosPopulares/ProductosPopulares";
import CardSlider from "../Components/CardSlider/CardSlider";
import { ToastContainer } from "react-toastify";

const Inicio = () => {
  return (
    <div>
      <Espaciador />
      <SeccionHome />
      <Espaciador />
      <MueblesExlusivos />
      <CaracteristicasEspeciales />
      <Ofertas />
      <ProductosPopulares />
      <CardSlider />
      <ToastContainer />
    </div>
  );
};
export { Inicio };
