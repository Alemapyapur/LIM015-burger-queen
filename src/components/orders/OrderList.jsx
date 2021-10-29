import React, { useEffect, useState } from "react";
import { db } from "../../fb-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import AddProducts from './addProducts'
import "../../styles/pages/waiter.css";


export default function OrderList({ setPedido, pedido }) {

  const [arrayOrderList, setArrayOrderList] = useState([]);
  const [pending, setPending] = useState("pending");

  const getOrdersFirebase = async (status) => {
    const arrayProduct = [];
    const querySnapshot = await getDocs(query(collection(db, "orders"), where("status", "==", status)));
    querySnapshot.forEach((doc) => {
      arrayProduct.push(doc.data());
    });

    return arrayProduct;
  };

  useEffect(() => {
    async function fetchList() {
      const listMenu = await getOrdersFirebase(pending);
      // console.log(listMenu);
      setArrayOrderList(listMenu);
    }
    fetchList();
  }, [pending]);

  return (
    <section className="section-side-right">
      <section className="btn-order">
        <button className="btn-order-waiter" onClick={() => setPending('pendiente')}>PEDIDOS POR ENTREGAR</button>
        <button className="btn-order-waiter" onClick={() => setPending('delivery')}>ENTREGADOS</button>
      </section>

      <div className="order-container-list">
        {arrayOrderList.map((item, index) => {
          //console.log('type', type);
          const productLists = {
            name:item.name,
            order: item.order,
            status: item.status
          }
          return (
            <div className="order-container" >
              <p className="text-order">{item.name}</p>
              <p className="img-product" alt='img-burguerqueen' src={item.order}></p>
              <p className="text-order">{item.status}</p>
                <section><AddProducts productList={productLists}  /></section>
              </div>
          );
        })}
      </div>
    </section>
  )
}
