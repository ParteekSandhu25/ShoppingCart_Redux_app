import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/dist";
import CartItem from "../components/CartItem";
import { useState } from "react";
import { useEffect } from "react";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div
      className={`flex justify-center items-center p-10 md:p-0 ${
        cart.length === 0 ? "h-[85vh]" : "h-auto"
      }`}
    >
      {cart.length > 0 ? (
        <div className="mt-0 w-auto md:w-[1080px] md:gap-20 flex flex-col md:flex-row md:mx-auto md:items-center">
          <div className="w-full md:w-7/12">
            {" "}
            {cart.map((item, index) => {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  itemIndex={index}
                ></CartItem>
              );
            })}
          </div>

          <div className=" h-screen w-full mt-10 md:mt-0 md:w-5/12 flex flex-col md:justify-around ">
            <div className="mb-5 md:mb-0 text-left">
              <div className="text-xl text-green-800 uppercase font-semibold">
                Your Cart
              </div>
              <div className=" mb-5 md:mb-0 text-5xl text-green-700 uppercase font-semibold">
                Summary
              </div>
              <p className="text-xl text-slate-700 font-semibold">
                {" "}
                Total Item:
                <span className="font-normal">{" " + cart.length}</span>
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-xl font-semibold text-slate-700">
                Total Amount: {"  "}
                <span className="font-bold text-black">
                  {"$" + totalAmount}
                </span>
              </p>
              <button
                className=" flex items-center justify-center bg-green-600 font-semibold uppercase text-md text-white rounded-md md:w-full px-10 py-3 hover:bg-white border-2 border-green-600 hover:text-green-600 transition-all duration-300 ease-in box-border"
                onClick={(event) => event.preventDefault()}
              >
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full h-full justify-center items-center">
          <h1 className="text-slate-700 gap-10 font-bold text-xl mb-8">
            Your Cart is Empty!
          </h1>
          <NavLink to="/">
            <button className="bg-green-600 font-semibold uppercase text-md text-white rounded-md px-10 py-3 hover:bg-white border-2 border-green-600 hover:text-green-600 transition-all duration-300 ease-in box-border">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
