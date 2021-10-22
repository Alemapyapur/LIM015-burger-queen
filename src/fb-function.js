import { collection, addDoc } from "firebase/firestore";
import { db } from "./fb-config";

export default async function newOrder(orderObj) {
  try {
    const order = await addDoc(collection(db, "orders"), {
      name: orderObj.name,
      price: orderObj.price,
      quantify: orderObj.quantify,
      totalOrder: orderObj.total,
      time: orderObj.time
    });
    return order
  } catch (error) {
    return error.message;
  }
}; 