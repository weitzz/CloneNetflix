import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Icon} from 'react-icons-kit';
import {iosWorld} from 'react-icons-kit/ionicons/iosWorld';
import {arrowSortedDown} from 'react-icons-kit/typicons/arrowSortedDown';
import { generateMedia } from "styled-media-query";

 class Footer extends Component {
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
        <span style={{marginLeft: '18%',fontSize: '1.120rem'}}>Dúvidas? <Link>Ligue 0800-761-4631</Link></span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link>Perguntas frequentes</Link>
            </li>
            <li>
              <Link>Relações com investidores</Link>
            </li>
            <li>
              <Link>Formas de assistir</Link>
            </li>
            <li>
              <Link>Informações corporativas</Link>
            </li>
            <li>
              <Link>Originais Netflix</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Centro de ajuda</Link>
            </li>
            <li>
              <Link>Carreiras</Link>
            </li>
            <li>
              <Link>Termos de uso</Link>
            </li>
            <li>
              <Link>Entre em contato</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Conta</Link>
            </li>
            <li>
              <Link>Resgatar cartão pré-pago</Link>
            </li>
            <li>
              <Link>Privacidade</Link>
            </li>
            <li>
              <Link>Teste de velocidade</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Imprensa</Link>
            </li>
            <li>
              <Link>Comprar cartão pré-pago</Link>
            </li>
            <li>
              <Link>Preferências de cookies</Link>
            </li>
            <li>
              <Link>Avisos legais</Link>
            </li>
          </ul>
          
            <div className="lang-btn" onClick={this.handleToggle}>
              <Icon icon={iosWorld} size={20}/>
               &nbsp;&nbsp;English&nbsp;&nbsp;
              <Icon icon={arrowSortedDown}/>
            </div>
        </div>
        {this.state.langContent &&(
        <div className="lang-toggle">
          <ul>
            <li>English</li>
          </ul>
          <ul>
            <li>Português</li>
          </ul>
          </div>
        )}
        <br/>
        <span style={{marginLeft: '18%',fontSize: '0.8rem'}}>Netflix Brasil</span>
      </FooterContainer>
    );
  }
}

export default Footer;

//Media query
const customMedia = generateMedia({
  tablet: "1350px"
});


const FooterContainer = styled.footer`
background:var(--main-deep-dark);
padding-top: 10rem;
padding-bottom: 3rem;
color: #999;

.footer-columns{
  width: 70%;
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
}

a:hover{
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
  margin: 1rem 0 1rem 2rem;
  cursor: pointer;
}
//toggle lang

.lang-toggle{
  margin-left: 17%;
  position: absolute;
  margin-top: -1.8rem;

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