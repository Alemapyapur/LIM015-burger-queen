import NavBar from "../nav-footer/navBar";
import Footer from "../nav-footer/footer";
import "../../styles/pages/waiter.css";
import ModalOrderConfirm from "../menu/modalOrderConfirm";
import ModalOrderCancel from "../menu/modalOrderCancel";
import OrderProduct from "../orders/OrderProduct";

function Waiter() {

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
             
            </div>
            <div className="btn-send-order">
              <button className="btn-order-red"><ModalOrderCancel /></button>
              <button className="btn-order-green"><ModalOrderConfirm /></button>
            </div>
          </section>
        </section>
          <OrderProduct />
      </div>
      {/* FOOTER DE LA PAGINA */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Waiter;
