import React from "react";
// import {Button} from 'react-bootstrap/';
// import {Modal} from 'react-bootstrap/';
// import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button} from 'react-bootstrap';






// const Login = () => {
        
//         return(
//             <div>
//                 <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//                     Launch demo modal
//                 </button>

//                 <div className="modal fade" id="exampleModal" tabindex="+1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div className="modal-dialog" role="document">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//                                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div className="modal-body">
//                                 <textarea></textarea>
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                                 <button type="button" className="btn btn-primary">Save changes</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
    
// }

class Login extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }

  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
  
      return (
        <div>

            {/* <div className="static-modal">
                <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>One fine body...</Modal.Body>

                <Modal.Footer>
                    <Button>Close</Button>
                    <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>
                </Modal.Dialog>
            </div> */}

          <p>Am I dying?</p>
  
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Get Start
          </Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
            {/* <Modal.Header closeButton> */}
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
  
              <h4>Popover in a modal</h4>
              <p>
                there is a{' '}
                here
              </p>
  
              <h4>Tooltips in a modal</h4>
              <p>
                there is a{' '}
                here
              </p>
              
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }



export default Login;