import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "chocolates", value: 10 },
    { name: "ice cream", value: 20 },
    { name: "chips", value: 15 },
    { name: "brownie", value: 30 },
    { name: "waffles", value: 60 },
    { name: "cakes", value: 80 },
  ]);

  const totalValue = useMemo(() => {
    let sum = 0;
    items.map((item) => {
      sum += item.value;
    });
    return sum;
  }, [items]);

  return (
    <div>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              {item.name} - Price : {item.value}
            </li>
          );
        })}
      </ul>
      Total : {totalValue}
    </div>
  );
};

export default Assignment3;
