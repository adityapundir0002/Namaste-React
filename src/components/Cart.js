import AccList from "./AccList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const addedItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4 text-center">
      <h1 className="font-bold font-2xl">Cart</h1>
      <button
        className="p-1 m-2 font-bold font-xl bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="m-auto h-auto w-9/12">
        <AccList items={addedItems} />
      </div>
    </div>
  );
};

export default Cart;
