import React from "react";
import "../../styles/pages/waiter.css";
import ModalCancel from "../menu/modalCancel";
import ModalConfirm from "../menu/modalConfirm";

function OrderWaiter({ setPedido, pedido, name, table }) {
    
    const deleteTrash = (index) => {
        // eslint-disable-next-line array-callback-return
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

        <section className="order-box-list">
            <div className="scroll">
                <table className="order">
                    <thead className="table-order">
                        <tr className="table-order-titles">
                            <th className="table-order-title1">Cantidad</th>
                            <th className="table-order-title2">Nombre</th>
                            <th className="table-order-title3">Price</th>
                            <th className="table-order-title4">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody className="table-order-product-order">
                        {
                            pedido.length > 0 && pedido.map((product, index) => (
                                <tr className="table-product-order" key={product.id}>
                                    <td className="table-order-product">{product.count}</td>
                                    <td className="table-order-product">{product.nombre}</td>
                                    <td className="table-order-product">S/{product.precio}.00</td>
                                    <td className="table-order-product">
                                        <button className="btn-order-trash" onClick={() => deleteTrash(product.id)}></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <section className="table-order-total">
                Total: S/ {pedido.reduce((accumulator, value) => accumulator + Number(value.precio) * Number(value.count), 0)}.00
            </section>
            {/* <input type= "text " /> */}
            <section className="btn-send-order">
                <ModalCancel />
                <ModalConfirm name={name} table={table}/>
            </section>
        </section>
    );
}

export default OrderWaiter;