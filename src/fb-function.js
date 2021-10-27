import { collection, addDoc } from "firebase/firestore";
import { db } from "./fb-config";

export default async function newOrder(orderObj, name, table) {
  try {
    const order = await addDoc(collection(db, "orders"), {
      name: name,
      table: table,
      price: orderObj.price,
      products: orderObj.products,
      quantify: orderObj.quantify,
      totalOrder: orderObj.total,
      status: orderObj.status,
      time: orderObj.time
    });
    return order
  } catch (error) {
    return error.message;
  }
}; 