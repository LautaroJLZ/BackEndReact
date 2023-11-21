import './Inicio'
import { SeccionHome } from '../Components/SeccionHome/SeccionHome';
import { Espaciador } from '../Components/Espaciador/Espaciador';
import { MueblesExlusivos } from '../Components/MueblesExlusivos/MueblesExlusivos';
import { CaracteristicasEspeciales } from '../Components/CaracteristicasEspeciales/CaracteristicasEspeciales';
import { Ofertas } from '../Components/Ofertas/Ofertas';
import { ProductosPopulares } from '../Components/ProductosPopulares/ProductosPopulares';
import  CardSlider  from '../Components/CardSlider/CardSlider';
// import { Navbar } from '../Components/Home/Navbar';
// import { Footer } from '../Components/Footer/Footer';
// import { ProductsList } from './ProductsList';

const Inicio = () => {
    
    return(
            <div>
                {/* <Navbar/> */}
                <Espaciador/>
                <SeccionHome/>
                <Espaciador/>
                <MueblesExlusivos/>
                <CaracteristicasEspeciales/>
                <Ofertas/>
                <ProductosPopulares/>
                {/* <ProductsList/> */}
                <CardSlider/>
                {/* <Footer/> */}
            </div>
        )
}
export { Inicio }