import React, { useEffect, useState } from "react";
import { db } from "../../fb-config";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function OrderProduct() {
    const [pedido, setPedido] = useState([]);
    const [arrayProductList, setArrayProductList] = useState([]);
    const [type, setType] = useState("breakfast");

    const moreClick = (products) => {
        console.log('rocio', products)
        setPedido([...pedido, products])
    };
    // console.log(pedido)
    const lessClick = (index) => {
        // console.log(index)
        const deleteProducts = pedido.filter((p, i) => i !== index);
        // console.log(deleteProducts)
        setPedido(deleteProducts);
    };

    const getProductsFirebase = async (type) => {
        const arrayProduct = [];
        const querySnapshot = await getDocs(query(collection(db, "products"), where("type", "==", type)));
        querySnapshot.forEach((doc) => {
            arrayProduct.push(doc.data());
        });

        return arrayProduct;
    };

    useEffect(() => {
        async function fetchList() {
            const listMenu = await getProductsFirebase(type);
            // console.log(listMenu);
            setArrayProductList(listMenu);
        }
        fetchList();
    }, [type]);
    return (
        <>
            <section>
                <button className="btn-roder-waiter" onClick={() => setType('breakfast')}>DESAYUNOS</button>
                <button className="btn-roder-waiter" onClick={() => setType('dinner')}>HAMBURGUESAS</button>
                <button className="btn-roder-waiter" onClick={() => setType('addfood')}>ACOMPAÑAMIENTOS</button>
                <button className="btn-roder-waiter" onClick={() => setType('drink')}>BEBIDAS</button>
            </section>
            {arrayProductList.map((item, index) => {
                //console.log('type', type);
                return (
                    <div className="order-container" >
                        <p className="">S/. {item.price}.00</p>
                        <img className="img-product" alt='img-burguerqueen' src={item.URL}></img>
                        <p className="">{item.name}</p>
                        <div className="btn--order">
                            <button className="btn-order-container-less" onClick={() => lessClick(index)}> - </button>
                            <p>{pedido.filter(p => p.id === item.id).length}</p>
                            <button className="btn-order-container-more" onClick={() => moreClick(item)}> + </button>
                        </div>
                    </div>
                );
            })}
        </>
    )
}

// export default function OrderProduct({ products, index, order, setOrder }) {
//   const changeQuantity = (index, originalOrder, num ) =>{
//     const copyOrder = [...originalOrder];
//     copyOrder[index].quantity += num;
//     if (copyOrder[index].quantity <= 0){
//       copyOrder.splice(index, 1);
//     }
//     products.total = products.price*products.quantity
//     return copyOrder
//   };
//   console.log("hola")
// //   return (
// //       <div className='Order-product Center-row' key={index}>
// //         <p className='Order-product-name'>{product.product}</p>

// //         <div className='Order-quantity Center-row'>
// //           <button
// //             className='Btn-product'
// //             aria-label='Restar producto'
// //             onClick={() => setOrder(changeQuantity(index,order, -1))}>
// //             <i className='fas fa-minus'></i>
// //           </button>

// //           <p className='Order-number'>{product.quantity}</p>

// //           <button
// //             className='Btn-product'
// //             aria-label='Sumar producto'
// //             onClick={()=> setOrder(changeQuantity(index,order, 1))}>
// //               <i className='fas fa-plus'></i>
// //           </button>
// //         </div>

// //         <div className='Order-price'>
// //           <p className='Order-number-price'>{'$ ' + product.total }</p>
// //           <button
// //             className='Btn-product'
// //             aria-label='Eliminar producto'
// //             onClick={() => setOrder(order.filter((_,idx) => idx !== index ))}>
// //               <i className='fas fa-trash'></i>
// //           </button>
// //         </div>

// //       </div>
// //   )
// };

