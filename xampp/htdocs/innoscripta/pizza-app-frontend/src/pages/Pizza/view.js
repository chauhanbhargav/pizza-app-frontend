import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Pizzas from "../../components/Pizzas";
import Loading from "../../components/Loading";

const Pizza = ({ getPizza, isLoading }) => {

  useEffect(() => {
    getPizza();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="content-container">
        <Pizzas />
      </div>
      {isLoading && <Loading />}
    </div>
  );
};


export default Pizza;

