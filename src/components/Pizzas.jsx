import React from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";

import Pizza from "./Pizza";
import { addToCart } from "../store/actions";

const Pizzas = ({ pizzas, addToCart, currency }) => {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {pizzas.map((pizza, index) => (
        <Col
          className="gutter-row"
          span={6}
          key={`PIZZE_${index}`}
          style={{ display: "flex" }}
        >
          <Pizza pizza={pizza} addToCart={addToCart} currency={currency} />
        </Col>
      ))}
    </Row>
  );
};

const mapStateToProps = (store) => {
  return {
    pizzas: store.pizzasReducer.pizzas,
    currency: store.currencyReducer.currency
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pizzas);
