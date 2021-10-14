// import Logo from './img';
import './App.css';
// import React from 'react';
// import hamburguesa from './img/hamburguesa.jpg'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/pages/home.jsx'
import Kitchen from './components/pages/kitchen.jsx'
import Waiter from './components/pages/waiter.jsx'

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
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


export { App };