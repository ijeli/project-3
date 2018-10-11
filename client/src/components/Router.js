import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Wrapper from './Wrapper';
// import Home from '../pages/Home';
// import Search from '../pages/Search';
import App from "../App";


const Router = () => (
  <BrowserRouter>
  <Switch>
    <Wrapper>
      <Route exact path ='/'component ={Login}/>
      <Route exact path ='/home' component ={App}/>
      <Route exact path ='/search' component ={App}/>
    </Wrapper>
  </Switch>
  </BrowserRouter>
);

export default Router;
