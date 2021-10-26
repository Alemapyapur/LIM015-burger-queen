import React from "react";
import "../../styles/pages/waiter.css";

function AddProducts({ productList, pedido, setPedido }) {
  const moreClick = (products) => {
    console.log("products", products);
    if (pedido.find((obj) => obj.id === products.id)) {
      console.log(pedido, products);
      pedido.map((p) => {
        if (p.id === products.id) {
          p.count = p.count + 1;
        }
      });

      setPedido([...pedido]);
    } else {
      products.count = 1;
      setPedido([...pedido, products]);
    }
  };

  return (
    <div>
      <button className="btn--order" onClick={() => moreClick(productList)}>
        {" "}
        Agregar
      </button>
    </div>
  );
}

export default AddProducts;
