import React, { useState } from "react";
import NavBar from "../nav-footer/navBar";
import Footer from "../nav-footer/footer";
import "../../styles/pages/kitchen.css";
import OrderList from "../orders/OrderList";

function Kitchen() {
  // eslint-disable-next-line no-unused-vars
  const [order, setOrder] = useState()

  return (
    <div className="kitchen">
      <>
        <NavBar />
      </>

    < OrderList/>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Kitchen;
