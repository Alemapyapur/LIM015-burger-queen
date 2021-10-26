import { useState } from "react";
import ModalCancel from "../menu/modalCancel";
import ModalConfirm from "../menu/modalConfirm";
import OrderProduct from "../orders/OrderProduct";
import NavBar from "../nav-footer/navBar";
import Footer from "../nav-footer/footer";
import "../../styles/pages/waiter.css";


function Waiter() {
  const [pedido, setPedido] = useState([]);
  // const [cantidad, setCantidad] = useState(1);
  //console.log(pedido);
  const deleteTrash = (index) => {
    pedido.map((product, i) => {
      if (product.id === index) {
        if (product.count === 1) {
          const deleteId = pedido.filter((product) => product.id !== index);
          console.log(deleteId, "eliminar");
          setPedido(deleteId);
        } else {
          product.count = product.count - 1;
          return setPedido([...pedido]);
        }
      }
    });
  };

  return (
    <div className="waiter">
      <>
        <NavBar />
      </>
      <div className="padre">
        <section className="section-side-left">
          <div className="box-client-table">
            <section className="dataClient">
              <p className="dataClient-text">NOMBRE DEL CLIENTE:</p>
              <input type="text" className="name-box" />
            </section>
            <section className="dataClient">
              <p className="dataClient-text">NUMERO DE MESA:</p>
              <input type="text" className="name-box" />
            </section>
          </div>

          <section className="order-box-list">
            <table className="order">
              <thead className="table-order">
                <tr className="table-order-titles">
                  <th className="table-order-title1">Cantidad</th>
                  <th className="table-order-title2">Nombre</th>
                  <th className="table-order-title3">Price</th>
                  <th className="table-order-title4">Eliminar</th>
                </tr>
              </thead>
              <tbody className="table-order-product-order">
                {
                  pedido.length > 0 && pedido.map((product, index) => (
                    <tr className="table-product-order" key={product.id}>
                      {/* <p>{cantidad}</p> */}
                      <td className="table-order-product">{product.count}</td>
                      <td className="table-order-product">{product.nombre}</td>
                      <td className="table-order-product">S/{product.precio}.00</td>
                      <td className="table-order-product">
                        <button className="btn-order-trash" onClick={() => deleteTrash(product.id)}></button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <section className="table-order-total">
              TOTAL: S/ {pedido.length>0  && pedido.reduce((a,b)=>(a+b.precio), 0)}.00
            </section>
            <section className="btn-send-order">
              <ModalCancel />
              <ModalConfirm />
            </section>
          </section>
        </section>

        <section>
          <OrderProduct setPedido={setPedido} pedido={pedido} />
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}


export default Waiter;
