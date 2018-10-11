import React from "react";
import {Link} from 'react-router-dom';


const Navbar =props =>
 <nav  className='navbar navbar-default'>
    <div className='container-fluid'>
       <a className={
        window.location.pathname === '/' 
        ? 'active' :""
        }
        >
        <Link to='/'>Login</Link>
     </a>
     <a className={
        window.location.pathname === '/Home' 
        ? 'active' :""
        }
        >
        <Link to='/home'>Home</Link>
     </a>
     <a className={
     window.location.pathname === '/search' 
        ? 'active':''}
        >
        <Link to='/search'>
        <div className='search-container'>
            <form action=''>
                <input type='text' placeholder='Search' name='search'/>
                <button type="submit"><i className="fa fa-search"></i>icon</button>
            </form>
</div>
</Link>
</a>

 </div>
 </nav>


export default Navbar;
