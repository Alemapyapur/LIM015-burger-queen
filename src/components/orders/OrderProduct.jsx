import React, { useEffect, useState } from "react";
import { db } from "../../fb-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import AddProducts from './addProducts'
import "../../styles/pages/waiter.css";

export default function OrderProduct() {
  
  const [arrayProductList, setArrayProductList] = useState([]);
  const [type, setType] = useState("breakfast");
  // const [pedido, setPedido] = useState([]);

  // const moreClick = (products) => {
  //     console.log('products', products)
  //     setPedido([...pedido, products])
  // };
  

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
    <section className="temp-waiter">
      <section className="btn-order">
        <button className="btn-roder-waiter" onClick={() => setType('breakfast')}>DESAYUNOS</button>
        <button className="btn-roder-waiter" onClick={() => setType('dinner')}>HAMBURGUESAS</button>
        <button className="btn-roder-waiter" onClick={() => setType('addfood')}>ACOMPAÑAMIENTOS</button>
        <button className="btn-roder-waiter" onClick={() => setType('drink')}>BEBIDAS</button>
      </section>

      <div className="order-container-list">
        {arrayProductList.map((item, index) => {
          //console.log('type', type);
          const productList = {
            nombre: item.name,
            precio: item.price
          }

          return (
            <div className="order-container" >
              <p className="">S/. {item.price}.00</p>
              <img className="img-product" alt='img-burguerqueen' src={item.URL}></img>
              <p className="">{item.name}</p>
              {/* <section> <AddProducts /> </section> */}
              <div className="btn--order">
            {/* <button onClick={() => moreClick(item)}> Agregar</button> */}
            <section><AddProducts productList={productList}/></section>
        </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}
