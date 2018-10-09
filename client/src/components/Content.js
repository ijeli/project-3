import React from 'react';
// import {Link} from 'react-router-dom';

// const Content = () => (
//     <div>
//         <button className = 'btn btn-primary'><Link to = '/Login' className = 'nav-link'>Login</Link></button>
//         <button className = 'btn btn-primary'><Link to = '/Register' className = 'nav-link'>Register</Link></button>
//     </div>
// )

const Content = (props) => (
    <div>
        <button className = 'btn btn-primary' onClick={() => props.handlePageChange("Login")}>Login</button>
        <button className = 'btn btn-primary' onClick={() => props.handlePageChange("Register")}>Register</button>
    </div>
)

export default Content;