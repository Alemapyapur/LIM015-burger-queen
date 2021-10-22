// import React, { useState } from "react";
// import Logueo from "../pages/login";
// import Home from '../pages/home'
// import app from "../../fb-config";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// const auth = getAuth(app);

// function Login() {
//   const [usuarioGlobal, setUsuarioGlobal] = useState(null);

//   // onAuthStateChanged(auth, (usuarioFirebase) => {
//   //   if (usuarioFirebase) {
//   //     //código en caso de que haya sesión inciiada
//   //     setUsuarioGlobal(usuarioFirebase);
//   //   } else {
//   //     //código en caso de que no haya sesión iniciada
//   //     setUsuarioGlobal(null);
//   //   }
//   // });

//   return (
//     <>
//       {usuarioGlobal ? (<Home />) : (<Logueo />)}
//     </>
//   );
// }

// export default Login;
