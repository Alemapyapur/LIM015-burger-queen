import React, { useState, useEffect } from "react";
import Logueo from "../pages/Logueo";
import Home from '../pages/home'
import app from "../../fb-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);

function Login() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        //código en caso de que haya sesión inciiada
        setUsuarioGlobal(usuarioFirebase);
      } else {
        //código en caso de que no haya sesión iniciada
        setUsuarioGlobal(null);
      }
    });
    return () => {
      unsubscribe();
    }
  },[])

//   onAuthStateChanged(auth, (usuarioFirebase) => {
//     if (usuarioFirebase) {
//       //código en caso de que haya sesión inciiada
//       setUsuarioGlobal(usuarioFirebase);
//     } else {
//       //código en caso de que no haya sesión iniciada
//       setUsuarioGlobal(null);
//     }
//   });

  return (
    <>
      {usuarioGlobal ? (
        <Home correoUsuario={usuarioGlobal.email} />
      ) : (
        <Logueo />
      )}
    </>
  );
}

export default Login;
