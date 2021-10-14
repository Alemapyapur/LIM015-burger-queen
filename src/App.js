// import Logo from './img';
import './App.css';
// import React from 'react';
// import hamburguesa from './img/hamburguesa.jpg'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/pages/home.jsx'
import Kitchen from './components/pages/kitchen.jsx'
import Waiter from './components/pages/waiter.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/menu/configLogin';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/Kitchen'>
          <Kitchen />
        </Route>
        <Route path='/Waiter'>
          <Waiter />
        </Route>
        <Route path='/Home'>
          <Home />
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


export { App };