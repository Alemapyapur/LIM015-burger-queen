import React, { useEffect, useState } from "react";
import { db } from "../../fb-config";
import { collection, getDocs, query, where } from "firebase/firestore";
// import AddProducts from './addProducts'
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
    <section className="kitchen-view">
      <section className="btn-order-kitchen">
        <button className="btn-order-kitchen-delivery" onClick={() => setPending('pending')}>PEDIDOS POR ENTREGAR</button>
        <button className="btn-order-kitchen-send" onClick={() => setPending('delivered')}>PEDIDOS ENTREGADOS</button>
      </section>

      <div>
        {arrayOrderList.map((item, index) => {
          //console.log('type', type);
          const productLists = {
            id:item.id,
            name: item.name,
            order: item.order,
            table: item.table,
            status: item.status
          }
          return (
            <section className="card-order">
              <section className="card-order-container">
              <p className="nombre-kitchen">Cliente: {item.name}</p>
              {/* <p className="text-order">Hora: {item.timestamp}</p> */}
              <p className="hora-kitchen"> Mesa: {item.table}</p>
              <p className="text-order">Status: {item.status}</p>
            {/* <div className="order-container" >
              <p className="text-order">{item.name}</p>
              <p className="img-product" alt='img-burguerqueen' src={item.order}></p>
              <p className="text-order">{item.status}</p>
                <section><AddProducts productList={productLists}  /></section>
              </div> */}

                <section className="kitchen-box">
                <table className="kitchen-box-table">
                <thead className="kitchen-box-table-title">
                  <tr className="table-kitchen-titles">
                    <th className="table-kitchen-title1">Cantidad</th>
                    <th className="table-kitchen-title2">Nombre</th>
                    <th className="table-kitchen-title3">Price</th>
                  </tr>
                </thead>

                <tbody className="table-kitchen">
                <tr className="table-kitchen-order">
                    <td className="table-kitchen-product">2</td>
                    <td className="table-kitchen-product">Cafe Americano</td>
                    <td className="table-kitchen-product">S/ 15.00</td>
                </tr>
                </tbody>
                </table>
                <section className="table-kitchen-total">
                TOTAL: S/ {item.order}
                </section>
                <button className="btn-kitchen-send-order" productList={productLists} >
                  LISTO PARA ENTREGAR
                </button>
                </section>
              </section>
            </section>
          );
        })}
      </div>
    </section>
  )
}
