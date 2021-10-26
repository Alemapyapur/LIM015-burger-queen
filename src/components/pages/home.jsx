import React from "react";
import { Link } from 'react-router-dom'
import '../../styles/pages/home.css'
// import {  signOut } from "firebase/auth";
// import Logueo from "../pages/login";

function Home() {

  return (

    <div className = "Home" >
      <br/>
      <div className='btn-home'>

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

  );
}



export default Home;
