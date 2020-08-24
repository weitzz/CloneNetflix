import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import styled from 'styled-components';
import LoginForm from '../components/Login/LoginForm';
import LoginFooter from '../components/Login/LoginFooter';
import { generateMedia } from "styled-media-query";

 class Login extends Component {
  render() {
    return (
      <div>
        <div className="main-login-container">
          <div className="header-top"> 
            <Logo src={logo} alt='logo' className="logo"/>
          </div>
          <LoginForm/>
          <LoginFooter/>
        </div>
      </div>
    )
  }
}

export default Login;

//media
const customMedia = generateMedia({
  tablet: '640px',
  lgTable: '740px'
})

const Logo = styled.img`

width:10rem;
height: 3.5rem;
position:absolute;
top:25%;
left:11%;
transform: translate(-50%,-50%);
margin-left: 0;
${customMedia.lessThan('tablet')`
top:45%;
left:23%;
`}

`;