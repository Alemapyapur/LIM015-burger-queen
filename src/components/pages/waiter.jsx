import NavBar from "../nav-footer/navBar";
import Footer from "../nav-footer/footer";
import "../../styles/pages/waiter.css";
import ModalOrderConfirm from "../menu/modalOrderConfirm";
import ModalOrderCancel from "../menu/modalOrderCancel";
import OrderProduct from "../orders/OrderProduct";
import { useState } from "react";

function Waiter() {
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
            <div className="order">
              {pedido.length > 0 &&
                pedido.map((product) => {
                  return (
                    <section>
                      {product.nombre}
                      <div>{product.precio}</div>
                    </section>
                  );
                })}
            </div>
            <div className="btn-send-order">
              <button className="btn-order-red">
                <ModalOrderCancel />
              </button>
              <button className="btn-order-green">
                <ModalOrderConfirm />
              </button>
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
