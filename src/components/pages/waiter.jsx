import NavBar from "../nav-footer/navBar";
import Footer from "../nav-footer/footer";
import "../../styles/pages/waiter.css";
// import ModalOrderConfirm from "../menu/modalOrderConfirm";
import ModalOrderCancel from "../menu/modalOrderCancel";
import OrderProduct from "../orders/OrderProduct";
import { useState } from "react";
import ModalConfirm from "../menu/modalConfirm";

function Waiter({cantidad}) {
  const [pedido, setPedido] = useState([]);
  // const [cantidad, setCantidad] = useState(1);
  console.log(pedido);
  const deleteTrash = (index) => {
    const deleteItem = pedido.filter((product, i) => index !== i)
    console.log(deleteItem);
    return setPedido(deleteItem);
  }

  // const contar = () => {
  //   setCantidad(cantidad + 1)
  // }

  return (
    <div className="waiter">
      <>
        <NavBar />
      </>
      <div className="padre">
        <section className="temp-waiter side">
          <div>
            <section className="dataClient">
              <p>NOMBRE DEL CLIENTE:</p>
              <input type="text" className="text" />
            </section>
            <section className="dataClient">
              <p>NUMERO DE MESA:</p>
              <input type="text" className="text" />
            </section>
          </div>

          <section>
            <table className="order">
              <thead className="table">
                <tr className="table-order">
                  <th className="table-order-title">Cantidad</th>
                  <th className="table-order-title">Nombre</th>
                  <th className="table-order-title">Price</th>
                  <th className="table-order-title">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {
                  pedido.length > 0 && pedido.map((product, index) => (
                    <tr className="table-product-order" key={product.id}>
                      {/* <p>{cantidad}</p>
                      <td className="table-order-product">{product.count}</td> */}
                      <td className="table-order-product">{product.nombre}</td>
                      <td className="table-order-product">{product.nombre}</td>
                      <td className="table-order-product">{product.precio}</td>
                      <td className="table-order-product">
                        <button className="btn-order-trash" onClick={() => deleteTrash(index)}></button>

                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <section className="table-order-title">TOTAL:$ {pedido.length > 0 && pedido.reduce((a, b) => (a + b.precio), 0)}</section>

            <div className="btn-send-order">
              <button className="btn-order-red">
                <ModalOrderCancel />
              </button>
              <ModalConfirm />
            </div>
          </section>
        </section>
        <OrderProduct setPedido={setPedido} pedido={pedido} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}


export default Waiter;
