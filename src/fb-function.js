/* eslint-disable react-hooks/rules-of-hooks */
// import { useState, useEffect } from 'react';
// import { db } from './fb-config';
// // import { firebase } from "firebase/app";
// import { collection, doc} from 'firebase/firestore';

// const GetProductsFirebase = () => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [getProducts, setProducts] = useState([]);
//   // const db = firebase.firestore();
//   const listProduct = [];
//   useEffect(() => {
//     // console.log(db);
//     const products = collection(db, "product")
//     console.log(products);
//     // db.collection('product').get().then((querySnapshot) => {
      
//     //   querySnapshot.forEach((doc) => {
//     //     listProduct.push(doc.data());
//     //     // console.log(doc.id, " => ", doc.data());
        
//     //   });
//     //   setProducts(listProduct);
//     // });
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return getProducts;
// };

/* eslint-disable react-hooks/rules-of-hooks */
// import { useState } from 'react';
import { db } from './fb-config.js';
/* import { firebase } from "firebase/app"; */
import { collection, getDocs } from "firebase/firestore";

const GetProductsFirebase = async () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [getProducts] = useState([]);

  

  const querySnapshot = await getDocs(collection(db, "product"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });

  return <div>{'hola'}</div>;
};

export default GetProductsFirebase;