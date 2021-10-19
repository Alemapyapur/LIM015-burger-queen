
// import React from 'react'

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