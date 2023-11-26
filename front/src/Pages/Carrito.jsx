import React, { useContext } from "react";
import "./Carrito";
import { ItemCart } from "../Components/itemCart/ItemCart";
import CartContext from "../Components/Contex/CartContex";
import { Link } from "react-router-dom";
const Carrito = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems?.reduce(
    (previous, current) =>
      previous + Math.round(current.amount * current.precio),
    0
  );

  return (
    <div className="text-center ">
      {cartItems.length === 0 ? (
        <p className="text-xl my-10">Tu carrito esta vacio</p>
      ) : (
        <div>
          <Link to="/Carrito">Ir al carrito </Link>
          {cartItems.map((item, i) => (
            <ItemCart key={i} item={item} />
          ))}

          <h2 className="text-center font-bold">Total: ${total}</h2>
        </div>
      )}
    </div>
  );
};

export { Carrito };
