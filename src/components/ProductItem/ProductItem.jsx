import React from "react";
import "./ProductItem.css";
import Button from "../Button/Button";

const ProductItem = ({ product, className, onAdd }) => {
  const onAddProduct = () => onAdd(product);

  return (
    <div className={"product-item " + className}>
      <div className={"img"} />
      <div className="title">{product.title}</div>
      <div className="description">{product.description}</div>
      <div className="price">
        Стоимость: <b>{product.price}</b>
      </div>
      <Button className="add-btn" onClick={onAddProduct}>
        Добавить
      </Button>
    </div>
  );
};

export default ProductItem;
