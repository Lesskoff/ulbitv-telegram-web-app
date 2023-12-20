import React, { useCallback, useEffect, useState } from "react";
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";
import useTelegram from "../../hooks/useTelegram";

const products = [
  {
    id: 1,
    title: "Футболка Nike",
    price: 4000,
    description: "Классическая футболка от Nike",
  },
  {
    id: 2,
    title: "Кроссовки Adidas",
    price: 3000,
    description: "Спортивные кроссовки от Adidas",
  },
  {
    id: 3,
    title: "Джинсы Levi's",
    price: 2500,
    description: "Классические джинсы от Levi's",
  },
  {
    id: 4,
    title: "Платье H&M",
    price: 5000,
    description: "Стильное платье от H&M",
  },
  {
    id: 5,
    title: "Куртка Supreme",
    price: 10000,
    description: "Эксклюзивная куртка от Supreme",
  },
  {
    id: 6,
    title: "Свитер Tommy Hilfiger",
    price: 6000,
    description: "Стильный свитер от Tommy Hilfiger",
  },
  {
    id: 7,
    title: "Полувер Calvin Klein",
    price: 9000,
    description: "Элегантный полувер от Calvin Klein",
  },
  {
    id: 8,
    title: "Шорты Nike",
    price: 7000,
    description: "Спортивные шорты от Nike",
  },
  {
    id: 9,
    title: "Майка Reebok",
    price: 13000,
    description: "Спортивная майка от Reebok",
  },
  {
    id: 10,
    title: "Пиджак Armani",
    price: 15000,
    description: "Элегантный пиджак от Armani",
  },
];

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);
  const { tg, queryId } = useTelegram();

  const onSendData = useCallback(() => {
    fetch("localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        queryId,
        products: addedItems,
        totalPrice: getTotalPrice(addedItems),
      }),
    });
  }, [addedItems, queryId]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);

    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData, tg]);

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];

    if (alreadyAdded)
      newItems = addedItems.filter((item) => item.id !== product.id);
    else newItems = [...addedItems, product];

    setAddedItems(newItems);

    if (newItems.length === 0) tg.MainButton.hide();
    else {
      tg.MainButton.show();
      tg.MainButton.setParams({ text: `Купить ${getTotalPrice(newItems)}` });
    }
  };

  return (
    <div className={"product-list"}>
      {products.map((product) => (
        <ProductItem product={product} className="item" onAdd={onAdd} />
      ))}
    </div>
  );
};

export default ProductList;
