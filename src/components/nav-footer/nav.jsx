import React from 'react';
import burgerLogo from '../../img/burger-logo.png'
import { Link } from 'react-router-dom'
import '../../styles/nav-footer/nav.css'
// import { getAuth, signOut } from "firebase/auth";
// import app from '../../fb-config'

// const auth = getAuth(app);

function NavBar() {
  // falta agregar como referenciar los links
  return (
    <nav className='navBar'>
      <img src={burgerLogo} className='nav-logo' alt='Burguer Queen Logo' />
      <Link className="title-nav" to='/Home'>
        HOME
      </Link>
      <Link className="title-nav" to='/Kitchen'>
        PEDIDOS REALIZADOS
      </Link>
      <Link className="title-nav" to='/Waiter'>
        PEDIDOS ENTREGADOS
      </Link>
      {/* <button onClick={() => signOut()}>Cerrar sesión</button> */}

      {/* <button onClick={
        signOut(auth).then(() => {
          // Sign-out successful.
          alert('saliste')
        }).catch((error) => {
          // An error happened.
        })}> 
        Salir
      </button> */}
    </nav>
  )
}

export default NavBar;