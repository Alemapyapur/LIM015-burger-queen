import './App.css';
// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/pages/home.jsx'
import Kitchen from './components/pages/kitchen.jsx'
import Waiter from './components/pages/waiter.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logueo from './components/pages/login';
import NotFound from './components/pages/404.jsx';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./fb-config";

const auth = getAuth(app);

const App = () => {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
  //     if (usuarioFirebase) {
  //       //código en caso de que haya sesión inciiada
  //       setUsuarioGlobal(usuarioFirebase);
  //     } else {
  //       //código en caso de que no haya sesión iniciada
  //       setUsuarioGlobal(null);
  //     }
  //   });
  //   return () => {
  //     unsubscribe();
  //   }
  // },[])

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //código en caso de que haya sesión inciiada
      setUsuarioGlobal(usuarioFirebase);
    } else {
      //código en caso de que no haya sesión iniciada
      setUsuarioGlobal(null);
    }
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/Home' render={({ location }) => (usuarioGlobal ? (<Home />) : (
          <Redirect
            to={{ pathname: '/', state: { from: location } }}
          />
        ))} >
        </Route>
        {/* <Route exact path='/Kitchen' render={({ location }) => (usuarioGlobal ? (<Kitchen />) : (
              <Redirect
                to={{ pathname: '/', state: { from: location }}}
              />
                ))} >
        </Route> */}
        {/* <Route exact path='/Waiter' render={({ location }) => (usuarioGlobal ? (<Waiter />) : (
              <Redirect
                to={{ pathname: '/', state: { from: location }}}
              />
                ))} >
        </Route> */}
        <Route exact path='/Kitchen'>
          <Kitchen />
        </Route>
        <Route exact path='/Waiter'>
          <Waiter />
        </Route>
        <Route exact path='/'>
          <Logueo />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


export { App };
