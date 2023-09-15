import React from "react";
import { Routes, Route } from "react-router-dom/dist";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NewNavbar from "./components/NewNavbar";

function App() {
  return (
    <div>
      <div className="bg-slate-900 ">
        <NewNavbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
