import React, { useState } from "react";
import NavBar from "../nav-footer/navBar";
import Footer from "../nav-footer/footer";
import "../../styles/pages/kitchen.css";

function Kitchen() {
  // eslint-disable-next-line no-unused-vars
  const [order, setOrder] = useState()

  return (
    <div className="kitchen">
      <>
        <NavBar />
      </>

      <section className="kitchen-view">
        <section className="btn-order-kitchen">
          <button className="btn-order-kitchen-delivery" onClick={() => setOrder('orderDelivery')}>PEDIDOS POR ENTREGAR</button>
          <button className="btn-order-kitchen-send" onClick={() => setOrder('orderSend')}>PEDIDOS ENTREGADOS</button>
        </section>

        <section className="card-order">
          <section className="card-order-container">
            <p className="nombre-kitchen">Nombre: Pamela Rupay</p>
            <p className="hora-kitchen">Hora: 13/10/2021</p>
            <section className="kitchen-box">
              <table className="kitchen-box-table">
                <thead className="kitchen-box-table-title">
                  <tr className="table-kitchen-titles">
                    <th className="table-kitchen-title1">Cantidad</th>
                    <th className="table-kitchen-title2">Nombre</th>
                    <th className="table-kitchen-title3">Price</th>
                  </tr>
                </thead>
                <tbody className="table-kitchen">
                  {
                    // pedido.length > 0 && pedido.map((order, index) => (
                    <tr className="table-kitchen-order">
                      <td className="table-kitchen-product">2</td>
                      <td className="table-kitchen-product">Cafe Americano</td>
                      <td className="table-kitchen-product">S/ 14.00</td>
                    </tr>
                    // ))
                  }
                </tbody>
              </table>
              <section className="table-kitchen-total">
                TOTAL: S/ 30.00
              </section>
              <section className="btn-kitchen-send-order">
                LISTO PARA ENTREGAR
              </section>
            </section>

            {/* INICIO BORRAR */}
          </section>
          <section className="card-order-container2">
            <p className="nombre-kitchen">Nombre: Melissa Gutierrez</p>
            <p className="hora-kitchen">Hora: 13/10/2021</p>
            <section className="kitchen-box">
              <table className="kitchen-box-table">
                <thead className="kitchen-box-table-title">
                  <tr className="table-kitchen-titles">
                    <th className="table-kitchen-title1">Cantidad</th>
                    <th className="table-kitchen-title2">Nombre</th>
                    <th className="table-kitchen-title3">Price</th>
                  </tr>
                </thead>
                <tbody className="table-kitchen">
                  {
                    // pedido.length > 0 && pedido.map((product, index) => (
                    <tr className="table-kitchen-order">
                      <td className="table-kitchen-product">2</td>
                      <td className="table-kitchen-product">Cafe Americano</td>
                      <td className="table-kitchen-product">S/ 14.00</td>
                    </tr>
                    // ))
                  }
                </tbody>
              </table>
              <section className="table-kitchen-total">
                TOTAL: S/ 30.00
              </section>
              <section className="btn-kitchen-send-order">
                LISTO PARA ENTREGAR
              </section>
            </section>

          </section>

          <section className="card-order-container3">
            <p className="nombre-kitchen">Nombre: Rocio Sulca</p>
            <p className="hora-kitchen">Hora: 13/10/2021</p>
            <section className="kitchen-box">
              <table className="kitchen-box-table">
                <thead className="kitchen-box-table-title">
                  <tr className="table-kitchen-titles">
                    <th className="table-kitchen-title1">Cantidad</th>
                    <th className="table-kitchen-title2">Nombre</th>
                    <th className="table-kitchen-title3">Price</th>
                  </tr>
                </thead>
                <tbody className="table-kitchen">
                  {
                    // pedido.length > 0 && pedido.map((product, index) => (
                    <tr className="table-kitchen-order">
                      <td className="table-kitchen-product">2</td>
                      <td className="table-kitchen-product">Cafe Americano</td>
                      <td className="table-kitchen-product">S/ 14.00</td>
                    </tr>
                    // ))
                  }
                </tbody>
              </table>
              <section className="table-kitchen-total">
                TOTAL: S/ 30.00
              </section>
              <section className="btn-kitchen-send-order">
                LISTO PARA ENTREGAR
              </section>
            </section>

          </section>


          <section className="card-order-container4">
            <p className="nombre-kitchen">Nombre: Janeth G.</p>
            <p className="hora-kitchen">Hora: 13/10/2021</p>
            <section className="kitchen-box">
              <table className="kitchen-box-table">
                <thead className="kitchen-box-table-title">
                  <tr className="table-kitchen-titles">
                    <th className="table-kitchen-title1">Cantidad</th>
                    <th className="table-kitchen-title2">Nombre</th>
                    <th className="table-kitchen-title3">Price</th>
                  </tr>
                </thead>
                <tbody className="table-kitchen">
                  {
                    // pedido.length > 0 && pedido.map((product, index) => (
                    <tr className="table-kitchen-order">
                      <td className="table-kitchen-product">2</td>
                      <td className="table-kitchen-product">Cafe Americano</td>
                      <td className="table-kitchen-product">S/ 14.00</td>
                    </tr>
                    // ))
                  }
                </tbody>
              </table>
              <section className="table-kitchen-total">
                TOTAL: S/ 30.00
              </section>
              <section className="btn-kitchen-send-order">
                LISTO PARA ENTREGAR
              </section>
            </section>

          </section>

          <section className="card-order-container5">
            <p className="nombre-kitchen">Nombre: Sarai S.</p>
            <p className="hora-kitchen">Hora: 13/10/2021</p>
            <section className="kitchen-box">
              <table className="kitchen-box-table">
                <thead className="kitchen-box-table-title">
                  <tr className="table-kitchen-titles">
                    <th className="table-kitchen-title1">Cantidad</th>
                    <th className="table-kitchen-title2">Nombre</th>
                    <th className="table-kitchen-title3">Price</th>
                  </tr>
                </thead>
                <tbody className="table-kitchen">
                  {
                    // pedido.length > 0 && pedido.map((product, index) => (
                    <tr className="table-kitchen-order">
                      <td className="table-kitchen-product">2</td>
                      <td className="table-kitchen-product">Cafe Americano</td>
                      <td className="table-kitchen-product">S/ 14.00</td>
                    </tr>
                    // ))
                  }
                </tbody>
              </table>
              <section className="table-kitchen-total">
                TOTAL: S/ 30.00
              </section>
              <section className="btn-kitchen-send-order">
                LISTO PARA ENTREGAR
              </section>
            </section>

          </section>



          {/* FINAL BORRAR */}
        </section>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Kitchen;
