import React from "react";
import { Link } from 'react-router-dom'
import '../../styles/pages/home.css'
import { getAuth, signOut } from "firebase/auth";
// import {  signOut } from "firebase/auth";
// import Logueo from "../pages/login";
import app from '../../fb-config'




function Home() {
  const auth = getAuth(app);

  return (

      (
   <div className = "Home" >
      <br/>
      <div className='btn-home'>

      <button onClick={() => signOut (auth)}>Cerrar sesión</button>

      <button className="Home-btn">
        <Link className="link-btn" to='/Waiter'>
          Mesero
        </Link>
        </button>
      <button className="Home-btn">
        <Link className="link-btn" to='/Kitchen'>
          Cocinero
        </Link>
      </button>
      </div>
    </div> 
    ) 

    
  );
}



export default Home;
