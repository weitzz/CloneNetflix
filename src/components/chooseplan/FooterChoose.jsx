import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

 const FooterChoose = () => {
  return (
    <FooterContainer>
      <div className="footer-wrapper">
     <span className="question-link">Dúvidas? <Link>Ligue 0800-761-4631</Link></span>
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
      </div>
      </div>
       
  </FooterContainer>
  )
}
export default FooterChoose;
//Media query
const customMedia = generateMedia({
  tablet: "740px"
});


const FooterContainer = styled.footer`
display: grid;
justify-content: center;
background: #f3f3f3;
padding: 1.875rem 0;
margin-top: 10rem;
position: relative;
border-top: 1px solid #e6e6e6;
z-index: 5;

.footer-columns{
  width: 80%;
  color: #999;
  margin: 1rem 3rem 0 3rem;
  font-size: 0.9rem;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(4,15.625rem);
  grid-gap:
  ${customMedia.lessThan('tablet')`
  grid-template-columns: repeat(2,1fr);
  
`}
}
.footer-wrapper{
  margin: 0 auto;
  padding: 1.25rem ;
}
.question-link{
  margin-left:3rem ;
  font-size: 1rem;
}
ul li {
  list-style:none;
  line-height:2.5;
}
a{
  color: #999;
  font-size: 0.8125rem;
  &:hover{
    text-decoration:underline;
    cursor: pointer;
  }
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
