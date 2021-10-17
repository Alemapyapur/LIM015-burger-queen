import React from 'react';
import app from '../../fb-config'
import { Link } from 'react-router-dom'
import '../../styles/pages/home.css'
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app);

function Home() {
  return (
    <div className="Home">
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
  );
}



export default Home;
