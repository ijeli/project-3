import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Content from './components/Content';
// import Login from './components/nav/Login';
// import Register from './components/nav/Register';
// import ConditionalRender from './components/ConditionalRender';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import Search from './pages/Search';
import Navbar from './components/Navbar';

import Login from './pages/Login';


class App extends Component {
  render() {
    return (
      <div className="App">

 
    <div>
        <Wrapper>
         <Route exact path ='/' component ={Login}/>
          <Navbar/>
          <Route exact path ='/home' component ={Home}/>
          <Route exact path ='/search' component ={Search}/>
        </Wrapper>
      </div>
  

        {/* // <img src={logo} className="App-logo" alt="logo" />
        // <h1>Am I Dying?</h1>
       <Router>
        //     <div>
        //       <Content/>>
        //       <Route exact path = '/Login' component={Login}/>
        //       <Route exact path = '/Register' component={Register}/>
        //     </div>
        // </Router>
        // <ConditionalRender/> */}
    

      </div>
    );
  }
}

export default App;
