import React, { useEffect, useState } from 'react';
import NavBar from '../nav-footer/nav';
import Footer from '../nav-footer/footer';
import OrderWaiter from './order-waiter'
import { db } from '../../fb-config';
import { collection, getDocs } from "firebase/firestore";
import '../../styles/pages/waiter.css'


function Waiter() {
  const [contador, setContador] = useState(0);

  const moreClick = () => { setContador(contador + 1) }
  const lessClick = () => { setContador(contador - 1) }


  const [arrayProductList, setArrayProduct] = useState([])

  const getProductsFirebase = async () => {
    const arrayProduct = [];
    const querySnapshot = await getDocs(collection(db, "product"));
    querySnapshot.forEach((doc) => {
      // arrayProduct.push(doc.id, " => ", doc.data())
      arrayProduct.push(doc.data())
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
      <>
        <NavBar />
      </>

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
        </section>
              {arrayProductList.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="">{item.id}</p>
                    <p className="">{item.name}</p>
                  </div>
                )
              })}


            <section>
          <div className='order'>
            {/* *Aqui iran dinamicamente los pedidos(cambiar los div por otro elemento)* */}
            <OrderWaiter />
          </div>
          <div className="btn-send-order">
            <button className="btn-order-red">CANCELAR PEDIDO</button>
            <button className="btn-order-green">ENVIAR A LA COCINA</button>
          </div>
        </section>
        {/*AGREGADO 10/10 */}
        <section className='temp-waiter'>
          <section className="btn-order">
            <button className="btn-roder-waiter">DESAYUNOS</button>
            <button className="btn-roder-waiter">HAMBURGUESAS</button>
            <button className="btn-roder-waiter">ACOMPAÑAMIENTOS</button>
            <button className="btn-roder-waiter">BEBIDAS</button>
          </section>

        <div className="order-container-list">
          {arrayProductList.map((item, index) => {
            return (
              <div className='order-container' key={index}>
                  <p className="">S/. {item.price}.00</p>
                  <img className="img-product" src={item.URL}></img>
                  <p className="">{item.name}</p>
                  <div className="btn--order">
                    <button className="btn-order-container-less" onClick={lessClick}>-</button>
                    <p>{contador}</p>
                    <button className="btn-order-container-more" onClick={moreClick}>+</button>
                  </div>
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

