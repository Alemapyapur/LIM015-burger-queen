// import React, { useEffect, useState } from 'react';
import React from 'react';
import NavBar from '../nav-footer/nav';
import Footer from '../nav-footer/footer';
// import ListProduct from '../menu/Listproduct';
import GetProductsFirebase from '../menu/Listproduct'
import ImgProduct from '../../img/breakfast1.png';
// import firebaseApp from '../../fb-config';
// import { getFirestore, getDoc } from 'firebase/firestore';
import '../../styles/pages/waiter.css'


// const firestore = getFirestore(firebaseApp)

function Cocinero(props) {
  // const [arrayProductList,setArrayProduct] = useState()
  // const fakeData = [
  //   {id: 1, name: "Cafe americano", price: 7},
  //   {id: 2, name: "Cafe con Leche", price: 5},
  //   {id: 3, name: "Cafe frapuchino", price: 7},
  // ];

  // async function buscarLista(idLista) {
  //   // eslint-disable-next-line no-undef
  //   const docRef = doc(firestore, `product/$(idLista)`);

  //   const consulta = await getDoc(docRef);

  //   if (consulta.exists()) {
  //     const infoDoc = consulta.data();
  //     console.log(infoDoc);
  //     return infoDoc.product003;
  //   }
  // }

  // useEffect(() => {
  //   async function fetchList() {
  //     const productFetch = await buscarLista();
  //     setArrayProduct(productFetch);
  //   }

  //   fetchList();
  // } , [])

  return (

    <div className="waiter">
      {/* PARTE DE NAV */}
      <div>
        <NavBar />
      </div>

      {/* PARTE DE MENU POR SECCIONES
      creo que debe ir en otro jsx como en el nav */}

      {/* <nav className='menu-orden'>
        <li className='orden-breakfasr' onClick={props.home}>
          BREAKFAST
        </li>
        <li className='orden-lunch' onClick={props.kitchen}>
          LUNCH
        </li>
        <li className='orden-drink' onClick={props.waiter}>
          DRINKS
        </li>
      </nav> */}

      {/* PARTE DONDE INGRESA EL NOMBRE DEL CLIENTE Y EL NUMERO DE MESA */}
      <section className = 'padre'>
      <section className = 'temp-waiter side'>
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
          *Aqui iran dinamicamente los pedidos(cambiar los div por otro elemento)*
          <div>
            {/* <ListProduct arrayproductos={fakeData}/> */}
            <GetProductsFirebase />
          </div>
        </div>
        <div className="btn-send-order">
          <button className="btn-order-green">ENVIAR A LA COCINA</button>
          <button className="btn-order-red">CANCELAR PEDIDO</button>
        </div>
      </section>
      {/*AGREGADO 10/10 */}
      <section className = 'temp-waiter'>
        <section className="btn-order">
          <button className="btn-roder-waiter">DESAYUNOS</button>
          <button className="btn-roder-waiter">HAMBURGUESAS</button>
          <button className="btn-roder-waiter">ACOMPAÑAMIENTOS</button>
          <button className="btn-roder-waiter">BEBIDAS</button>
        </section>
        <div className="order-container-list">
          *Aqui iran los productos para elegir*
          <div className="order-container">
              <h3>Dinero</h3>
              <img className="img-product" src={ImgProduct} alt="" />
              <h2>Cafe americano</h2>
              <div className="btn--order">
                <button className="btn-order-container">+</button>
                <button className="btn-order-container">-</button>
              </div>
          </div>
          <div className="order-container">
              <h3>Dinero</h3>
              <img className="img-product" src={ImgProduct} alt="" />
              <h2>Cafe con leche</h2>
              <div className="btn--order">
                <button className="btn-order-container">+</button>
                <button className="btn-order-container">-</button>
              </div>
          </div>
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

export default Cocinero;

