import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col, Select } from "antd";
import {
    FaDollarSign,
    FaEuroSign
  } from "react-icons/fa";
import { getUUID } from "../utils/generateUuid";
import { DOLLAR } from "../utils/constants";
import { search } from "../utils/search";

const { Option } = Select;

const Pizza = ({ pizza, addToCart, currency }) => {
  const [size, setSize] = useState(0);
  const [crust, setCrust] = useState(0);
  const [crustOptions, setCrustOptions] = useState([]);
  const [sizeOptions, setSizeOptions] = useState([]);

  const currencyIcon = currency === DOLLAR ? <FaDollarSign /> : <FaEuroSign />;
  const currencyData = currency === DOLLAR ? pizza.pizza_price[0].dollar : pizza.pizza_price[0].euro;
  const [currencyValue, setCurrencyValue] = useState(currencyData);

  const setPriceValue = () => {
    const object = search(size, crust, pizza.pizza_price);
    const currencyData = currency === DOLLAR ? object ? object.dollar : pizza.pizza_price[0].dollar : object ? object.euro : pizza.pizza_price[0].euro;
    setCurrencyValue(currencyData);
  }

  useEffect(() => {
    setPriceValue()
  }, [currency]);

  useEffect(() => {
    setPriceValue();
  }, [size]);

  useEffect(() => {
    setPriceValue();
  }, [crust]);

  useEffect(() => {
    const sizeOptions = pizza.pizza_price.map((price) => ({
      label: price.size.name,
      value: price.size.id,
    }));
    const sizeArray = sizeOptions.reduce((accumulator, current) => accumulator.some(x => x.value === current.value)? accumulator: [...accumulator, current ], []);
    const size = sizeArray.length > 0 ? sizeArray[0].value : 0;
    setCrustOptionsBasedOnSize(size);
    setSizeOptions(sizeArray);
    setSize(size);
  }, []);

  const onAddToCart = () => {
    addToCart({
      uuid: getUUID(),
      pizza_id: pizza.id,
      size_id: size,
      crust_id: crust,
      quantity: 1,
    });
  };

  const setCrustOptionsBasedOnSize = (size) => {
    const crustOptions = pizza.pizza_price
      .map((price) => ({
        label: price.crust.name,
        value: price.crust.id,
      }));
    const crustArray = crustOptions.reduce((accumulator, current) => accumulator.some(x => x.value === current.value)? accumulator: [...accumulator, current ], []);
    setCrust(crustArray.length > 0 ? crustArray[0].value : 0);
    setCrustOptions(crustArray);
  };  

  return (
    <Card
      title={pizza.name}
      style={{ marginBottom: "20px", display: "flex", flexDirection: "column" }}
      flex={1}
    >
      <div className="pizza-block">
        <div className="pizza-image-wrapper">
          <img src={pizza.image} className="pizza-image" />
        </div>
        <p className="pizza-desc">{pizza.description}</p>
        <div className="pizza-option-wrapper">
          <Row>
            <Col lg={24} md={24} sm={24} xs={24} align="right">
                <p><strong>Price : </strong>{currencyIcon}{currencyValue}</p>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col lg={10} md={10} sm={6} xs={12}>
              <p className="select-label">Size</p>
              <Select
                value={size}
                style={{ width: "100%" }}
                onChange={(value) => {
                  setSize(value);
                  setPriceValue();
                }}
              >
                {sizeOptions.map((sizeOption) => (
                  <Option
                    value={sizeOption.value}
                    key={`SIZE_OPTION_${sizeOption.value}`}
                  >
                    {sizeOption.label}
                  </Option>
                ))}
              </Select>
            </Col>
            <Col span={14}>
              <p className="select-label">Crust</p>
              <Select
                value={crust}
                style={{ width: "100%" }}
                onChange={(value) => {
                    setCrust(value);
                    setPriceValue();
                }}
              >
                {crustOptions.map((crustOption) => (
                  <Option
                    value={crustOption.value}
                    key={`CRUST_OPTION_${crustOption.value}`}
                  >
                    {crustOption.label}
                  </Option>
                ))}
              </Select>
            </Col>
          </Row>
        </div>
        <Button type="primary" onClick={onAddToCart}>
          ADD TO CART
        </Button>
      </div>
    </Card>
  );
};

export default Pizza;
