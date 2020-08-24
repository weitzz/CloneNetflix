import React, { Component } from 'react';
import Img from '../images/tab-1-pic.png';
import styled from 'styled-components';
import {Button} from './Button';
import { generateMedia } from "styled-media-query";
import {Link} from 'react-router-dom';


 class TabContentOne extends Component {
  render() {
    return (
      <TabContentContainer>
        <div className="container">
          <div className="tab-content">
            <div>

            <span className="title" style={{marginBottom:' 2rem'}}>
            Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, 
            aparelhos de Blu-ray e outros aparelhos.
            </span>
            <br/>
            <Link to="/choose-plan">
            <Button  style={{marginTop:' 2rem'}}>Vamos lá</Button>
            </Link>
            </div>
            <img src={Img} />
          </div>
        </div>
      </TabContentContainer>
    )
  }
}
export default TabContentOne;

//Media query
const customMedia = generateMedia({
  smDesktop: '1440px',
  tablet: '960px'
})


//content container

const TabContentContainer = styled.div`
  background: var(--main-deep-dark);

.container{
  margin: 0 10%;
}

img{
  width: 31.875rem;
}
.tab-content{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 2rem;
  align-items:center;
  font-size: 2rem;
  padding: 2.5rem;
  ${customMedia.lessThan('tablet')`
  grid-template-columns: 100%;
  text-align: center;
  padding-left: 0;
  padding-right: 0;
`}
}
.title{
  margin-top: 2rem;
  ${customMedia.lessThan('smDesktop')`
  font-size: 1.2rem;
  line-height: 1;
`}
}
`;