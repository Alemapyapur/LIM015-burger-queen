import NavBar from "../nav-footer/navBar";
import Footer from "../nav-footer/footer";
import "../../styles/pages/waiter.css";
// import ModalOrderConfirm from "../menu/modalOrderConfirm";
import ModalOrderCancel from "../menu/modalCancel";
import OrderProduct from "../orders/OrderProduct";
import { useState } from "react";
import ModalConfirm from "../menu/modalConfirm";

function Waiter() {
  const [pedido, setPedido] = useState([]);
  // console.log(pedido);
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
                {pedido.length > 0 &&
                  pedido.map((product, index) => (
                    <tr className="table-product-order" key={product.id}>
                      <td className="table-order-product">{product.count}</td>
                      <td className="table-order-product">{product.nombre}</td>
                      <td className="table-order-product">{product.precio}</td>
                      <td className="table-order-product">
                        <button
                          className="btn-order-trash"
                          onClick={() => deleteTrash(product.id)}
                        ></button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <section className="table-order-title">
              TOTAL:${" "}
              {pedido.length > 0 && pedido.reduce((a, b) => a + b.precio, 0)}
            </section>
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
