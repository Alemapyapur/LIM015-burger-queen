import React from 'react';
import burgerLogo from '../../img/burger-logo.png'
import { Link } from 'react-router-dom'
import '../../styles/nav-footer/nav.css'
import { getAuth, signOut } from "firebase/auth";
import app from '../../fb-config'

function NavBar() {
  const auth = getAuth(app);

  return (
    <nav className='navBar'>
      <img src={burgerLogo} className='nav-logo' alt='Burguer Queen Logo' />

      <Link className="title-nav1" to='/Home'>
        HOME
      </Link>
      <Link className="title-nav2" to='/Kitchen'>
        PEDIDOS
      </Link>
      {/* <Link className="title-nav3" to='/Waiter'>
        PEDIDOS ENTREGADOS
      </Link> */}
      <Link className="btn-sign-out" onClick={() => signOut(auth)}>CERRAR SESIÓN</Link>

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