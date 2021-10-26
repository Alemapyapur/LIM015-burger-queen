// import { useState } from 'react';

// ************************** INTENTO DE TABLA *********************** //

// function OrderWaiter () {
//   const [usuario, setUsuarios ] = useState([
//     { id: 1, name: "Cafe simple", price: "5" },
//     { id: 1, name: "Cafe doble", price: "5" },
//     { id: 1, name: "Cafe capuchino", price: "5" } ,
//   ]);

//   return (

//     <table>
//       <thead>
//         <tr>
//         <th>Cantidad</th>
//         <th>Nombre</th>
//         <th>Price</th>

//         </tr>
//       </thead>

//       <tbody>
//         {usuario.map(usuario=>(
//           <tr>
//             <th>{usuario.id}</th>
//             <th>{usuario.name}</th>
//             <th>{usuario.price}</th>

//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )
// };

// export default OrderWaiter;