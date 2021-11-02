import './App.css';
// import React, { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/pages/home.jsx'
import Kitchen from './components/pages/kitchen.jsx'
import Waiter from './components/pages/waiter.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './components/pages/notFound';
import Login from './components/menu/Login';



const App = () => {

  return (
    <BrowserRouter>
      <Switch>   
      <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/Home'>
          <Home />
        </Route>     
        <Route exact path='/Kitchen'>
          <Kitchen />
        </Route>
        <Route exact path='/Waiter'>
          <Waiter />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


export { App };
