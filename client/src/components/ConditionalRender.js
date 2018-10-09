import React, {Component} from 'react';
import Login from './nav/Login';
import Register from './nav/Register';
import Content from './Content';

class ConditionalRenderer extends Component {
    state = {
        currentPage : ""
    };

    handlePageChange = (page) => {
        this.setState({currentPage : page});
    };

    renderPage = () => {
        if(this.state.currentPage === 'Login') { 
            return <Login/>
        }
        else if(this.state.currentPage === "Register") { 
            return <Register/>
        }
    }

    render() {
        return (
            <div>
                <Content handlePageChange = {this.handlePageChange}/>
                {this.renderPage()}
            </div>
        );
    };


};

export default ConditionalRenderer;