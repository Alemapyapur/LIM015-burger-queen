import React, { Component } from 'react'

export default class ListProduct extends Component {
    render() {
        const {pedido} = this.props
        const {deleteTrash} = this.props

        

        return (
            <div>
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
                                    <button className="btn-order-trash" onClick={() => deleteTrash(index)}></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <section className="table-order-total">
                TOTAL: S/ {pedido.length > 0 && pedido.reduce((a, b) => (a + b.precio), 0)}.00
            </section>
            {/* <section>
                <OrderProduct setPedido={setPedido} pedido={pedido} />
            </section> */}
        </div>
        )
    }
}

// import React from 'react'
// // import OrderProduct from "../orders/OrderProduct";

// function ListProduct({pedido, setPedido}) {

//     // const [pedido, setPedido] = useState([]);
//     // console.log(pedido);
//     const deleteTrash = (index) => {
//         const deleteItem = pedido.filter((product, i) => index !== i)
//         console.log(deleteItem);
//         return setPedido(deleteItem);
//     }
//     return (
//         <div>
//             <table className="order">
//                 <thead className="table-order">
//                     <tr className="table-order-titles">
//                         <th className="table-order-title1">Cantidad</th>
//                         <th className="table-order-title2">Nombre</th>
//                         <th className="table-order-title3">Price</th>
//                         <th className="table-order-title4">Eliminar</th>
//                     </tr>
//                 </thead>
//                 <tbody className="table-order-product-order">
//                     {
//                         pedido.length > 0 && pedido.map((product, index) => (
//                             <tr className="table-product-order" key={product.id}>
//                                 <td className="table-order-product">{product.count}</td>
//                                 <td className="table-order-product">{product.nombre}</td>
//                                 <td className="table-order-product">S/{product.precio}.00</td>
//                                 <td className="table-order-product">
//                                     <button className="btn-order-trash" onClick={() => deleteTrash(index)}></button>
//                                 </td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//             <section className="table-order-total">
//                 TOTAL: S/ {pedido.length > 0 && pedido.reduce((a, b) => (a + b.precio), 0)}.00
//             </section>
//             {/* <section>
//                 <OrderProduct setPedido={setPedido} pedido={pedido} />
//             </section> */}
//         </div>
//     )
// }

// export default ListProduct
