import React, { useState, useEffect } from 'react'
import Navigation from '../nav-footer/navigation'
import { db } from "../../fb-config";
import { collection, getDocs, query, where, doc, updateDoc } from "firebase/firestore";
import Footer from '../nav-footer/footer'

function WaiterOrders() {

  const [arrayOrderList, setArrayOrderList] = useState([]);
  const [status, setStatus] = useState("ready");

  const getOrdersFirebase = async (status) => {
    const arrayProduct = [];
    const querySnapshot = await getDocs(query(collection(db, "orders"), where("status", "==", status)));
    querySnapshot.forEach((doc) => {
      arrayProduct.push({ id: doc.id, ...doc.data() });
    });
    return arrayProduct;
  };

  async function EntregarACliente(id) {
    const ref = doc(db, "orders", id)
    await updateDoc(ref, { status: 'delivered' })

    setStatus("delivered")
  }

  useEffect(() => {
    async function fetchList() {
      const listMenu = await getOrdersFirebase(status);
      // console.log(listMenu);
      setArrayOrderList(listMenu);
    }
    fetchList();
  }, [status]);

  return (
    <div>
      <Navigation />
      <section className="kitchen-view">
        <section className="btn-order-kitchen">
          <button className="btn-order-kitchen-delivery" onClick={() => setStatus('ready')}>PEDIDOS POR ENTREGAR</button>
          <button className="btn-order-kitchen-send" onClick={() => setStatus('delivered')}>PEDIDOS ENTREGADOS</button>
        </section>

        <div className="card-order">
          {arrayOrderList.map((item, index) => {

            return (
              <section >
                <section key={item.id} className="card-order-container">
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
                    {item.status === 'ready' && (
                      <button type="button" className="btn-kitchen-send-order" onClick={() => EntregarACliente(item.id)}>
                        LISTO PARA ENTREGAR
                      </button>
                    )}
                    {item.status === 'delivered' && (
                      <p >El pedido fue entregado con exito 🛒</p>
                    )}
                  </section>
                </section>
              </section>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default WaiterOrders
