import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="w-full py-10 flex flex-col md:flex-row justify-start items-center gap-16 border-b-2 border-slate-700">
      <div class="w-[30%] md:w-[50%] ">
        <img
          src={item.image}
          alt=""
          loading="lazy"
          className="object-contain"
        />
      </div>

      <div className="flex flex-col gap-2 ">
        <h1 className="text-slate-700 text-xl font-semibold">{item.title}</h1>
        <h1 className="mt-6">
          {item.description.split(" ").slice(0, 15).join(" ") + "..."}
        </h1>

        <div className="flex justify-between mt-6 items-center">
          <p className="text-lg text-green-600 font-bold">{"$" + item.price}</p>
          <div
            className="h-[40px] w-[40px] flex justify-center items-center rounded-full cursor-pointer hover:bg-red-300 group bg-red-200 "
            onClick={removeFromCart}
          >
            <MdDelete
              className=" group-hover:text-white text-red-700"
              fontSize={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
