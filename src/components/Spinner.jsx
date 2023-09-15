import React from "react";
import "./Spinner.css";

function Spinner() {
  return (
    <div className="h-[85vh] w-screen flex justify-center items-center">
      <div className=" loader"></div>
    </div>
  );
}

export default Spinner;
