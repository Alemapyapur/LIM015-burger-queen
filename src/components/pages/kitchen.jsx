// import { Link } from 'react-router-dom'
import React from 'react';
import NavBar from '../nav-footer/nav'
import Footer from '../nav-footer/footer'
import '../../styles/pages/kitchen.css'

function Kitchen() {
    return (
    <div className="kitchen">
      {/* PARTE DE NAV */}
      <div>
        <NavBar />
      </div>

      {/* PARTE DE MENU POR SECCIONES
      creo que debe ir en otro jsx como en el nav */}
      <nav className='menu-orden'>
        <li className='orden-breakfasr'>
          PEDIDOS POR HACER
        </li>
        <li className='orden-lunch'>
          PEDIDOS POR ENTREGAR
        </li>
        <li className='orden-drink'>
          PEDIDOS ENTREGADOS
        </li>
      </nav>

      {/* PARTE DONDE INGRESA EL NOMBRE DEL CLIENTE Y EL NUMERO DE MESA */}
      <section>
        <button>COCINANDO</button>
        <button>PEDIDO LISTO</button>
      </section>

    {/* FOOTER DE LA PAGINA */}
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Kitchen;