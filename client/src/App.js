import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,withRouter, Route} from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Login from './pages/Login';
import Modal from 'react-modal';


 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('body');

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      // redirect: false,
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    console.log(this);
  }
    
// renderRedirect = () => {
//   if (this.setState.renderRedirect){
//     return <redirect to='/search'/>
//   }
// }
//  setRedirect = () => {
//    this.setState({redirect: true})
//  }
nextPath(path) {
  this.props.history.push(path);
}


  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <div className="App">
      {/* -------------------------------NEED TO BE IN LOGIN----------------------------------------
      ----------------------------------I CREATED THIS TO ROUTE the Modal------------------------- */}
      <Container className="p-5">
        <Form onSubmit={this. openModal}>
          <FormGroup>
            <Label>Name:</Label>
            <Input
              type="text"
              name="text"
              placeholder="Name"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </FormGroup>
         <Button onClick={this.openModal}>Submit</Button>
        </Form>
      </Container>
     {/* ----------------------------------------------------------------------------------------------
     ------------------------------------------------------------------------------------------------- */}
       

       <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          onClick={this.onClick}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Welcome to Illness Check</h2>
          <form>
            <div> name:{this.state.name}</div>
            <div> email:{this.state.email}</div>
            <button onClick={() => this.nextPath('/home') }> Search by Symptom</button>
            <button onClick={() => this.nextPath('/search') }> Search by Disease</button>      
          </form>

           <button onClick={this.closeModal}>close</button>
        </Modal> 


 
<div>
     <Wrapper>
         <Route exact path ='/' component ={Login}/>
          <Navbar/>
          <Route exact path ='/home' component ={Home}/>
          <Route exact path ='/search' component ={Search}/>
        </Wrapper>
      </div>

      </div>
    );
  }
}

export default App;
