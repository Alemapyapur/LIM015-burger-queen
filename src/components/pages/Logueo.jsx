import React, { Fragment } from "react";
// import { Stack, Container, Form, Button } from "react-bootstrap";
import app from "../../fb-config";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import '../../styles/pages/logueo.css';
import imagenLogo from '../../img/burger-logo.png'


const auth = getAuth(app);

const Logueo = () => {

  async function submitHandler(e) {
    e.preventDefault();
    const correo = e.target.formBasicEmail.value;
    const contra = e.target.formBasicPassword.value;

    // si está iniciando sesión
    signInWithEmailAndPassword(auth, correo, contra)
      .then((userCredential) => {
        // Signed in
        // eslint-disable-next-line no-unused-vars
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });

  }


  return (
    <Fragment>
      <div className='login-page'>
        {/* <h1>{"INICIA SESIÓN"}</h1> */}
        <img src={imagenLogo} alt="" className='imagenLogo' />
        <form onSubmit={submitHandler} className="bodyContainer">
          <section className="mb-3" >
            <h1 className="labelInicio">{"INICIA SESIÓN"}</h1>
            <label>Email address:</label>
            <input type="email" placeholder="Enter email" id="formBasicEmail" className="inputEmail" />
          </section>

          <section className="mb-3" >
            <label>Password:</label>
            <input type="password" placeholder="Password" id="formBasicPassword" className="inputPassword" />
          </section>

          <button type="submit" className="buttonSubmit">
            {"INGRESAR"}
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Logueo;
