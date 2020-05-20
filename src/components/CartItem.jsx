import React, {useState} from "react";
import { Row, Col, InputNumber, Button } from "antd";
import { FaTrash } from "react-icons/fa";

import { getUUID } from "../utils/generateUuid";

const CartItem = ({ cartItem, removeFromCart, updateCart, editable, price, currencyIcon }) => {


  const onRemove = () => {
    removeFromCart({ uuid: getUUID(), id: cartItem.id });
  };

  const onUpdate = (quantity) => {
    updateCart({ uuid: getUUID(), id: cartItem.id, quantity });
  };

  return (
    <div className="cart-item-container">
      <Row>
        <Col span={12}>
          <div className="cart-item-wrapper">
            <div className="cart-item-image-wrapper">
              <img
                src={cartItem.pizza_detail.pizza.image}
                className="cart-item-image"
              />
            </div>
            <div className="cart-item-info-wrapper">
              <p className="cart-item-title">{cartItem.pizza_detail.pizza.name}</p>
              <p className="cart-item-sub-title">{cartItem.pizza_detail.size.name}</p>
              <p className="cart-item-sub-title">{cartItem.pizza_detail.crust.name}</p>
            </div>
          </div>
        </Col>
        <Col span={6}>
          {editable ? (
            <InputNumber
              defaultValue={cartItem.quantity}
              min={1}
              max={50}
              onChange={(value) => onUpdate(value)}
            />
          ) : (
            cartItem.quantity
          )}
        </Col>
        <Col span={editable ? 4 : 6} style={{ textAlign: "right" }}>
          {currencyIcon} {cartItem.quantity * price}
        </Col>
        {editable && (
          <Col span={2} style={{ justifyContent: "center", display: "flex" }}>
            <Button icon={<FaTrash />} onClick={onRemove} />
          </Col>
        )}
      </Row>      
    </div>
  );
};

export default CartItem;
