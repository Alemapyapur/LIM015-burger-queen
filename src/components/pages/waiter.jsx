import { useState } from "react";
import OrderProduct from "../orders/OrderProduct";
import NavBar from "../nav-footer/navBar";
import Footer from "../nav-footer/footer";
import OrderWaiter from "../orders/orderWaiter";
import "../../styles/pages/waiter.css";
import ClientData from "../orders/ClientData";
// import ModalCancel from "../menu/modalCancel";
// import ModalConfirm from "../menu/modalConfirm";


function Waiter() {
  const [pedido, setPedido] = useState([]);
  const [name, setName] = useState("");
  const [table, setTable] = useState();

  console.log(name, table)

  return (
    <div className="waiter">
      <>
        <NavBar />
      </>
      <div className="padre">
        <section className="section-side-left">
          <div className="box-client-table">
            {/* <section className="dataClient">
              <p className="dataClient-text">NOMBRE DEL CLIENTE:</p>
              <input type="text" className="name-box" value={name} onChange={(e) => { setName(e.target.value) }} />
            </section>
            <section className="dataClient">
              <p className="dataClient-text">NUMERO DE MESA:</p>
              <input type="text" className="name-box" value={table} onChange={(e) => { setTable(e.target.value) }} />
            </section> */}
            <ClientData name={name} setName={setName} table={table} setTable={setTable} />
          </div>
          <OrderWaiter setPedido={setPedido} pedido={pedido} name={name} table={table} />
        </section>
        {/* <section className="btn-send-order">
          <ModalCancel />
          <ModalConfirm name={name} table={table} />
        </section> */}
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
