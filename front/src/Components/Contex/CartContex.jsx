import { createContext, useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState([]);
  const [datos, setDatos] = useState([]);

  const obtenerDatos = async () => {
    try {
      // Utiliza la URL de tu backend basada en el entorno
      const backendUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:4000"
          : "https://back-end-project-react.onrender.com";

      // Hacer la llamada a la API utilizando la URL del backend
      const response = await fetch(`${backendUrl}/miapi/pepe`);
      const json = await response.json();

      if (response.ok) {
        setDatos(json);
      } else {
        console.error("Error al obtener datos:", json);
      }
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
    }
  };

  const getProductsCart = async () => {
    return await axios
      .get("http://localhost:4000/miapi/pepe/productos-cart")
      .then(({ data }) => setCartItems(data.productosCart))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    obtenerDatos();
    getProductsCart();
  }, []);

  const addItemToCart = async (dato) => {
    const { nombre, imagen, marca, oferta, precio } = dato;

    try {
      await axios.post("http://localhost:4000/miapi/pepe/productos-cart", {
        nombre,
        imagen,
        marca,
        oferta,
        precio,
      });

      obtenerDatos();
      getProductsCart();

      console.log("El producto fue agregado");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return (
          <div>
            {toast.info("El producto ya esta en el carrito", {
              theme: "light",
              progress: false,
              autoClose: 1300,
            })}
          </div>
        );
      } else {
        console.error(
          "Error desconocido al agregar producto al carrito",
          error
        );
      }
    }
  };

  const editItemToCart = async (id, query, amount) => {
    if (query === "del" && amount === 1) {
      await axios
        .delete(`http://localhost:4000/miapi/pepe/productos-cart/${id}`)
        .then(({ data }) => console.log(data));
    } else {
      await axios
        .put(
          `http://localhost:4000/miapi/pepe/productos-cart/${id}?query=${query}`,
          {
            amount,
          }
        )
        .then(({ data }) => console.log(data));
    }
    obtenerDatos();
    getProductsCart();
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        datos,
        addItemToCart,
        editItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
