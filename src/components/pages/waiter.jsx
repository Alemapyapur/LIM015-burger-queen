import { useState } from "react";
import OrderProduct from "../orders/OrderProduct";
import NavBar from "../nav-footer/navBar";
import Footer from "../nav-footer/footer";
import OrderWaiter from "../orders/orderWaiter";
import "../../styles/pages/waiter.css";
import ClientData from "../orders/ClientData";

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
            <ClientData name={name} setName={setName} table={table} setTable={setTable} />
          </div>
          <OrderWaiter setPedido={setPedido} pedido={pedido} name={name} table={table} setName={setName} setTable={setTable} />
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
