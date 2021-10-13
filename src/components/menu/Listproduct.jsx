// import React from 'react'

// function Listproduct({arrayproductos}) {
//   return (
//     // <div>
//     //     Lista de productos
//     // </div>

//     <div>
//       {arrayproductos.map((objetoTareas) => {
//         return (
//           <div>
//             <p>{objetoTareas.id}</p>
//             <p>{objetoTareas.name}</p>
//             <p>{objetoTareas.price}</p>
//           </div>
//         )
//       })}
//     </div>
//   );
// };

// export default Listproduct

// *--------------------------CONFIGURACION--------------------------------------*

import { db } from '../../fb-config';
import { collection, getDocs } from "firebase/firestore";

const GetProductsFirebase = async () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [getProducts] = useState([]);

  const querySnapshot = await getDocs(collection(db, "product"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data(doc.name));
  });

  return <div>{'hola'}</div>;
};

export default GetProductsFirebase;
