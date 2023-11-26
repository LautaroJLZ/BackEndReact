import "bootstrap-icons/font/bootstrap-icons.css";
import { Inicio } from "./Pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error404 } from "./Pages/Error404";
import { ProductsList } from "./Pages/ProductsList";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Espaciador } from "./Components/Espaciador/Espaciador";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { Carrito } from "./Pages/Carrito";
import { CartProvider } from "./Components/Contex/CartContex";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Espaciador />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/ProductsList" element={<ProductsList />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
