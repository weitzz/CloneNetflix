import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Icon} from 'react-icons-kit';
import {iosWorld} from 'react-icons-kit/ionicons/iosWorld';
import {arrowSortedDown} from 'react-icons-kit/typicons/arrowSortedDown';
import { generateMedia } from "styled-media-query";

 class LoginFooter extends Component {
   state={
     langContent: false
   }
   handleToggle = e =>{
     e.preventDefault();
     this.setState({
       langContent: !this.state.langContent
     })
   }
  render() {
    return (
      <FooterContainer>
        <span style={{marginLeft: '10%',color: '#999'}}>Dúvidas? <Link>Ligue 0800-761-4631</Link></span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link>Gift Card Terms</Link>
            </li>
          
          </ul>
          <ul>
            <li>
              <Link>Termos de uso</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Privacidade</Link>
            </li>
          </ul>
          
            <div className="lang-btn" onClick={this.handleToggle}>
              <Icon icon={iosWorld} size={20}/>
               &nbsp;&nbsp;English&nbsp;&nbsp;
              <Icon icon={arrowSortedDown}/>
            </div>
        </div>
        {this.state.langContent && (
        <div className="lang-toggle">
          <ul>
            <li>English</li>
          </ul>
          <ul>
            <li>Português</li>
          </ul>
          </div>
        )}
      </FooterContainer>
    );
  }
}

export default LoginFooter;

//Media query
const customMedia = generateMedia({
  tablet: "740px"
});


const FooterContainer = styled.footer`
justify-content: center;
background: rgba(0, 0, 0, 0.8);
padding-top: 3rem;
padding-bottom: 6rem;
margin-top: 6rem;

position: relative;
z-index: 5;

.footer-columns{
  width: 80%;
  color: #999;
  margin: 1rem auto 0;
  font-size: 0.9rem;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  ${customMedia.lessThan('tablet')`
  grid-template-columns: repeat(2,1fr);
  
`}
}
ul li {
  list-style:none;
  line-height:2.5;
}
a{
  color: #999;
  font-size: 0.9rem;
}

a:hover{
  text-decoration: underline;
  cursor: pointer;
}
p{
  text-decoration: underline;
  cursor: pointer;
}

//language btn

.lang-btn{
  background: transparent;
  border: 0.9px solid #333;
  padding: 1rem;
  width: 8rem;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  margin-left: 10%;
  margin-top: 2rem;
  cursor: pointer;
}
//toggle lang

.lang-toggle{
  margin-left: 10%;
  position: absolute;

}
.lang-toggle ul {
  background:var(--main-deep-dark);
  width: 8.125rem;
  border:1px solid #333;
  text-align:center;
  &:hover{
    background: #0085ff;
    color: #fff;
  }

}

`;