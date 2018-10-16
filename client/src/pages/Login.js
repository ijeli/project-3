import React from 'react';
import Sample from '../components/login/login';
// import GoogleLogin from 'react-google-login';
// import { GoogleLogin } from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';


class Login extends React.Component{

    render(){
        return <div><p>Login page</p>
        {/* <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    // onSuccess={responseGoogle}
    // onFailure={responseGoogle}
  />,
    <FacebookLogin
    appId="1931385593565712"
    autoLoad={true}
    fields="name,email,picture"
    // onClick={componentClicked}
    // callback={responseFacebook} />,
    />, */}
        <Sample/>
        </div>
    }
}


export default Login;