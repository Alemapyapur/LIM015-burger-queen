import { useState } from "react";
import OrderProduct from "../orders/OrderProduct";
import NavBar from "../nav-footer/navBar";
import Footer from "../nav-footer/footer";
import OrderWaiter from "../orders/orderWaiter";
import "../../styles/pages/waiter.css";
import ClientData from "../orders/ClientData";
import ModalCancel from "../menu/modalCancel";
import ModalConfirm from "../menu/modalConfirm";


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
        <section className="btn-send-order">
          <ModalCancel />
          <ModalConfirm name={name} table={table} />
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










// import { useState } from "react";
// import ModalCancel from "../menu/modalCancel";
// import ModalConfirm from "../menu/modalConfirm";
// import OrderProduct from "../orders/OrderProduct";
// import NavBar from "../nav-footer/navBar";
// import Footer from "../nav-footer/footer";
// import "../../styles/pages/waiter.css";


// function Waiter() {
//   const [pedido, setPedido] = useState([]);
//   const deleteTrash = (index) => {
//     // eslint-disable-next-line array-callback-return
//     pedido.map((product, i) => {
//       if (product.id === index) {
//         if (product.count === 1) {
//           const deleteId = pedido.filter((product) => product.id !== index);
//           console.log(deleteId, "eliminar");
//           setPedido(deleteId);
//         } else {
//           product.count = product.count - 1;
//           return setPedido([...pedido]);
//         }
//       }
//     });
//   };

//   return (
//     <div className="waiter">
//       <>
//         <NavBar />
//       </>
//       <div className="padre">
//         <section className="section-side-left">
//           <div className="box-client-table">
//             <section className="dataClient">
//               <p className="dataClient-text">NOMBRE DEL CLIENTE:</p>
//               <input type="text" className="name-box" />
//             </section>
//             <section className="dataClient">
//               <p className="dataClient-text">NUMERO DE MESA:</p>
//               <input type="text" className="name-box" />
//             </section>
//           </div>

//           <section className="order-box-list">
//             <div className="scroll">
//               <table className="order">
//                 <thead className="table-order">
//                   <tr className="table-order-titles">
//                     <th className="table-order-title1">Cantidad</th>
//                     <th className="table-order-title2">Nombre</th>
//                     <th className="table-order-title3">Price</th>
//                     <th className="table-order-title4">Eliminar</th>
//                   </tr>
//                 </thead>
//                 <tbody className="table-order-product-order">
//                   {
//                     pedido.length > 0 && pedido.map((product, index) => (
//                       <tr className="table-product-order" key={product.id}>
//                         {/* <p>{cantidad}</p> */}
//                         <td className="table-order-product">{product.count}</td>
//                         <td className="table-order-product">{product.nombre}</td>
//                         <td className="table-order-product">S/{product.precio}.00</td>
//                         <td className="table-order-product">
//                           <button className="btn-order-trash" onClick={() => deleteTrash(product.id)}></button>
//                         </td>
//                       </tr>
//                     ))
//                   }
//                 </tbody>
//               </table>
//             </div>
//             <section className="table-order-total">
//               Total: S/ {pedido.reduce((accumulator, value) => accumulator + Number(value.precio) * Number(value.count), 0)}.00
//             </section>
//             <section className="btn-send-order">
//               <ModalCancel />
//               <ModalConfirm />
//             </section>
//           </section>
//         </section>

//         <section>
//           <OrderProduct setPedido={setPedido} pedido={pedido} />
//         </section>
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }


// export default Waiter;