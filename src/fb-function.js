import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from "./fb-config";
import "./styles/menu/modalCancel.css"

function SendOrder({ name, table }) {

  const sendOrders = () => {
    debugger
    const docRef = addDoc(collection(db, "orders"), {
      name,
      table
    }).then(() => {
      alert("Se envio el pedido")
    });
    return docRef
  }

  return (
    <button onClick={() => sendOrders()} className="buttonAccept">Enviar</button>
  )
}

export default SendOrder;




// import { collection, addDoc } from "firebase/firestore";
// import { db } from "./fb-config";

// export default async function newOrder(orderObj, name, table) {
//   try {
//     const order = await addDoc(collection(db, "orders"), {
//       name: name,
//       table: table,
//       price: orderObj.price,
//       products: orderObj.products,
//       quantify: orderObj.quantify,
//       totalOrder: orderObj.total,
//       status: orderObj.status,
//       time: orderObj.time
//     });
//     return order
//   } catch (error) {
//     return error.message;
//   }
// }; 