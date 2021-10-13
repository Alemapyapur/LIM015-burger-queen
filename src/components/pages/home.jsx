import React from 'react';
import { Link } from 'react-router-dom'
// import melissa from '../../img/inicio-bur.gif';
import '../../styles/pages/home.css'

function Home() {
  return (
    <div className="Home">
      {/* <p>Burguer Queen</p> */}
      {/* <img src={melissa} className='Home-logo' alt='Burguer Queen Logo'/> */}
      {/* <section style={ melissa } className='Home-logo'>  </section> */}
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
