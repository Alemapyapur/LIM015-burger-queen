import NavBar from "../nav-footer/navBar";
import Footer from "../nav-footer/footer";
import "../../styles/pages/waiter.css";
// import ModalOrderConfirm from "../menu/modalOrderConfirm";
import ModalOrderCancel from "../menu/modalOrderCancel";
import OrderProduct from "../orders/OrderProduct";
import { useState } from "react";
import ModalConfirm from "../menu/modalConfirm";

function Waiter({}) {
  const [pedido, setPedido] = useState([]);
  console.log(pedido);
  return (
    <div className="waiter">
      {/* PARTE DE NAV */}
      <>
        <NavBar />
      </>

      {/* PARTE DONDE INGRESA EL NOMBRE DEL CLIENTE Y EL NUMERO DE MESA */}
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
                  pedido.length > 0 && pedido.map((product) => (
                    <tr className="table-product-order" key={product.id}>
                      <td className="table-order-product">{product.count}</td>
                      <td className="table-order-product">{product.nombre}</td>
                      <td className="table-order-product">{product.precio}</td>
                      <td className="table-order-product">
                        <button className="btn-order-trash"></button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>

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
      {/* FOOTER DE LA PAGINA */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Waiter;
