import React, { useEffect, useState } from "react";
import { db } from "../../fb-config";
import { collection, getDocs, query, where, doc, updateDoc } from "firebase/firestore";
import "../../styles/pages/waiter.css";


export default function OrderList({ setPedido, pedido }) {

  const [arrayOrderList, setArrayOrderList] = useState([]);
  const [pending, setPending] = useState("pending");

  const getOrdersFirebase = async (status) => {
    const arrayProduct = [];
    const querySnapshot = await getDocs(query(collection(db, "orders"), where("status", "==", status)));
    querySnapshot.forEach((doc) => {
      arrayProduct.push({ id: doc.id, ...doc.data() });
    });
    return arrayProduct;
  };


  async function EntregarAMesa(id) {
    const ref = doc(db, "orders", id)
    await updateDoc(ref, { status: 'ready' })

    setPending("ready")
  }


  useEffect(() => {
    async function fetchList() {
      const listMenu = await getOrdersFirebase(pending);
      setArrayOrderList(listMenu);
    }
    fetchList();
  }, [pending]);

  return (
    <section className="kitchen-view">
      <div className="card-order">
        {arrayOrderList.map((item, index) => {
          console.log(item)
          return (
            <section >
              <section key={item.id} className="card-order-container">
                <p className="nombre-kitchen">Cliente: {item.name}</p>
                <p className="text-order">Hora: {item.timestamp.toDate().getHours()}{':'}{item.timestamp.toDate().getMinutes()}</p>
                <p className="hora-kitchen"> Mesa: {item.table}</p>
                <p className="text-order">Status: {item.status}</p>


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
                      {item.pedidos.map(prod =>
                        <tr className="table-kitchen-order" key={prod.nombre}>
                          <td className="table-kitchen-product">{prod.count}</td>
                          <td className="table-kitchen-product">{prod.nombre}</td>
                          <td className="table-kitchen-product">{prod.precio}</td>
                        </tr>
                      )}

                    </tbody>
                  </table>
                  <section className="table-kitchen-total">
                    TOTAL: S/ {item.order}
                  </section>
                  <button className="btn-kitchen-send-order" onClick={() => EntregarAMesa(item.id)} >
                    PEDIDO LISTO
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
