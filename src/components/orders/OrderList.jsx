import React, { useEffect, useState } from "react";
import { db } from "../../fb-config";
import { collection, getDocs, query, where, doc, updateDoc } from "firebase/firestore";
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


  async function EntregarAMesa(id) {
    const ref = doc(db,"orders", 'id')
    await updateDoc(ref, {status:'delivered'})
		// DocumentReference(collection(db, "orders"), doc(id), updateDoc({status: 'delivered'}))
  }


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
      </section>

      <div>
        {arrayOrderList.map((item, index) => {

          return (
            <section  className="card-order">
              <section key={item.id}className="card-order-container">
              <p className="nombre-kitchen">Cliente: {item.name}</p>
              {/* <p className="text-order">Hora: {item.timestamp}</p> */}
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
