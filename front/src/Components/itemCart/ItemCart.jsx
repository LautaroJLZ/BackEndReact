import { useContext } from "react";
import CartContext from "../Contex/CartContex";

export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { editItemToCart } = useContext(CartContext);

  const { amount } = item;

  return (
    <div className="w-full flex justify-center items-center grid grid-cols-3 bg-slate-100 border mb-2 px-5 justify-around">
      <div className="flex justify-start items-center gap-2 ">
        <div className="">
          <img className="w-[150px] " src={item.imagen} alt={item.imagen} />
        </div>
        <div className="block text-left right-20">
          <p className="text-xs">{item.nombre}</p>
          <p className=" text-sm font-bold">{item.marca}</p>
          <p className="line-through text-xs ">{item.oferta}</p>
          <p className="text-xs">{item.precio}</p>
        </div>
      </div>
      <div className="flex justify-center gap-2 ">
        <button onClick={() => editItemToCart(item._id, "del", amount)}>
          <i className="bi bi-dash-square-fill hover:text-gray-800"></i>
        </button>
        <div>{item.amount}</div>
        <button onClick={() => editItemToCart(item._id, "add", amount)}>
          <i className="bi bi-plus-square-fill hover:text-gray-800"></i>
        </button>
      </div>

      <div className="flex justify-end items-center ">
        <p className="font-bold text-sm text-start">
          SubTotal: ${item.amount * item.precio}
        </p>
      </div>
    </div>
  );
};
