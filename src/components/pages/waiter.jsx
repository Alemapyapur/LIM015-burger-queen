import React, { useEffect, useState } from 'react';
import NavBar from '../nav-footer/nav';
import Footer from '../nav-footer/footer';
import { db } from '../../fb-config';
import { collection, getDocs } from "firebase/firestore";
import '../../styles/pages/waiter.css'


function Waiter() {
  const [arrayProductList,setArrayProduct] = useState([])

  const getProductsFirebase = async () => {
    const arrayProduct = [];
    const querySnapshot = await getDocs(collection(db, "product"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      arrayProduct.push(doc.id)
    });

    return arrayProduct;
  };

  useEffect(() => {
    async function fetchList() {
      const listMenu = await getProductsFirebase()
      console.log(listMenu);
      setArrayProduct(listMenu);
    }
    fetchList();
  } , [])

  return (

    <div className="waiter">
      {/* PARTE DE NAV */}
      <div>
        <NavBar />
      </div>

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
          {/* *Aqui iran dinamicamente los pedidos(cambiar los div por otro elemento)* */}
          <div>

              {arrayProductList.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="">{item}</p>
                  </div>
                )
              })}


          </div>
        </div>
        <div className="btn-send-order">
          <button className="btn-order-red">CANCELAR PEDIDO</button>
          <button className="btn-order-green">ENVIAR A LA COCINA</button>
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

