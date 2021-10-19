import React, { useEffect, useState } from 'react';
import NavBar from '../nav-footer/nav';
import Footer from '../nav-footer/footer';
import { db } from '../../fb-config';
import { collection, getDocs, query, where, } from "firebase/firestore";
import '../../styles/pages/waiter.css'


function Waiter() {
  const [arrayProductList, setArrayProduct] = useState([]);
  const [type, setType] = useState("breakfast");

  // const getProductsFirebase = async () => {
  //   const arrayProduct = [];
  //   const querySnapshot = await getDocs(collection(db, "products"));
  //   querySnapshot.forEach((doc) => {
  //     arrayProduct.push(doc.data())
  //   });

  //   return arrayProduct;

  const getProductsFirebase = async () => {
    const arrayProduct = [];  
    const querySnapshot = await getDocs(query(collection(db, "products"),where("type", "==", type)));
    querySnapshot.forEach((doc) => {
      arrayProduct.push(doc.id, " => ", doc.data())
    });

    return arrayProduct;
  };




  useEffect(() => {
    async function fetchList() {
      const listMenu = await getProductsFirebase()
      // console.log(listMenu);
      setArrayProduct(listMenu);
    }
    fetchList();
  }, [])



  return (

    <div className="waiter">
      {/* PARTE DE NAV */}
      <div>
        <NavBar />
      </div>

      {/* PARTE DONDE INGRESA EL NOMBRE DEL CLIENTE Y EL NUMERO DE MESA */}
      <section className='padre'>
        <section className='temp-waiter side'>
          <div>
            <section className='dataClient'>
              <p>NOMBRE DEL CLIENTE:</p>
              <input type='text' className='text' />
            </section>
            <section className='dataClient'>
              <p>NUMERO DE MESA:</p>
              <input type='text' className='text' />
            </section>
          </div>

          <div className='order'>
            {/* *Aqui iran dinamicamente los pedidos(cambiar los div por otro elemento)* */}
          </div>
          <div className="btn-send-order">
            <button className="btn-order-red">CANCELAR PEDIDO</button>
            <button className="btn-order-green">ENVIAR A LA COCINA</button>
          </div>
        </section>
        {/*AGREGADO 10/10 */}
        <section className='temp-waiter'>
          <section className="btn-order">
            <button className="btn-roder-waiter" onClick={()=>setType('breakfast')}>DESAYUNOS</button>
            <button className="btn-roder-waiter" onClick={()=>setType('lunch')}>HAMBURGUESAS</button>
            <button className="btn-roder-waiter">ACOMPAÑAMIENTOS</button>
            <button className="btn-roder-waiter">BEBIDAS</button>
          </section>

          <div>

            {arrayProductList.map((item, index) => {
              console.log('type',type);
              return (
                <div key={index}>
                  <p className="">{item.name}</p>
                  <p className="">{item.price}</p>

                </div>
              )             
            })}
          </div>
        </section>
      </section>

      {/* FOOTER DE LA PAGINA */}
      <div>
        <Footer />
      </div>

    </div>
  )
};

export default Waiter;

