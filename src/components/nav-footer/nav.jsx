import React from 'react';
import burgerLogo from '../../img/burger-logo.png'
import { Link } from 'react-router-dom'
import '../../styles/nav-footer/nav.css'

function NavBar ( ) {
  // falta agregar como referenciar los links
    return (
      <nav className='navBar'>
        <img src={burgerLogo} className='nav-logo' alt='Burguer Queen Logo'/>
        <Link className= "title-nav" to='/Home'>
          HOME
        </Link>
        <Link className= "title-nav" to='/Cocinero'>
          PEDIDOS REALIZADOS
        </Link>
        <Link className= "title-nav" to='/Mesero'>
          PEDIDOS ENTREGADOS
        </Link>
      </nav>
    )
}

export default NavBar;