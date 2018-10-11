import React from "react";
import {Link} from 'react-router-dom';
import '../App.css';


const Navbar =props =>
 <nav className="navbar navbar-default">
<div className="container-fluid">
  <div className="navbar-header">
    <a className="navbar-brand">logo</a>
  </div>
  <ul className="nav navbar-nav">
    <li className="active">  <a classNameName={
      window.location.pathname === '/' 
      ? 'active' :""
      }
      >
      <Link to='/'>Login</Link>
   </a></li>
    <li><a classNameName={
      window.location.pathname === '/Home' 
      ? 'active' :""
      }
      >
      <Link to='/home'>Home</Link>
   </a></li>
    <li><a classNameName={
   window.location.pathname === '/search' 
      ? 'active':''}
      >
      <Link to='/search'>Search</Link><form action=''>
              <input type='text' placeholder='Search' name='search'/>
              <button type="submit"><i classNameName="fa fa-search"></i>icon</button>
          </form>
</a></li>
   
  </ul>
</div>
</nav>

export default Navbar;
