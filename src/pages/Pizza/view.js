import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Pizzas from "../../components/Pizzas";
import Loading from "../../components/Loading";

const Pizza = ({ getPizza, isLoading, history }) => {

  useEffect(() => {
    getPizza();
  }, []);

  return (
    <div className="container">
      <Navbar history={history}/>
      <div className="content-container">
        <Pizzas />
      </div>
      {isLoading && <Loading />}
    </div>
  );
};


export default Pizza;

