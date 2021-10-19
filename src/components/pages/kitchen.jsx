// import { Link } from 'react-router-dom'
import React from "react";
import NavBar from "../nav-footer/nav";
import Footer from "../nav-footer/footer";
import "../../styles/pages/kitchen.css";
import "../../styles/pages/waiter.css";

function Kitchen() {
  return (
    <div className="kitchen">
      {/* PARTE DE NAV */}
      <div>
        <NavBar />
      </div>
      <section className="container">
      <section className="padre-kitchen">
        <section className="temp-kitchen side">
          <div className="order-kitchen">
            <div className="orden-kitchen-btn">
              <p>Aca va dinamicamente el menu</p>
              <button className="btn-order-green">LISTO PARA ENTREGAR</button>
            </div>
          </div>
        </section>
      </section>
      <section className="kitchen-two">
        <section className="temp-kitchen side">
          <div className="ordertwo-kitchen">
            <div className="orden-kitchen-btn">
              <p>Aca va dinamicamente el menu</p>
              <button className="btn-order-green">LISTO  PARA ENTREGAR</button>
            </div>
          </div>
        </section>
      </section>
      </section>

      {/* FOOTER DE LA PAGINA */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Kitchen;
