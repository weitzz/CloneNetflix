import React, { Component } from "react";
import ImgTv from "../images/tab-tv.png";
import ImgMac from "../images/tab-macbook.png";
import ImgTablet from "../images/tab-tablet.png";
import styled from "styled-components";
import { Button } from "./Button";
import { generateMedia } from "styled-media-query";
import {Link} from 'react-router-dom';

class TabContentTwo extends Component {
  render() {
    return (
      <TabContainer>
        <div className="tab-content">
          <div className="tab-top-content">
            <span style={{ fontSize: "1.5rem" }}>
              Salve seus títulos favoritos e sempre tenha algo para assistir.
            </span>
            <Link to="/choose-plan"className="btn">
            <Button >Vamos Lá</Button>
            </Link>
          </div>
          <div className="tab-bottom-content">
            <div>
              <img src={ImgTv} style={{ width: "18.75rem" }} />
              <h3>Assista em Smart TVs</h3>
              <p>
                PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e
                outros aparelhos.
              </p>
            </div>
            <div>
              <img
                src={ImgTablet}
                style={{ width: "18.75rem", paddingTop: "0.625rem" }}
              />
              <h3>Baixe séries para assistir offline.</h3>
              <p>
                Salve seus títulos favoritos e sempre tenha algo para assistir.
              </p>
            </div>
            <div>
              <img
                src={ImgMac}
                style={{
                  width: "18.75rem",
                  paddingTop: "0.625rem",
                  paddingBottom: "0.625rem",
                }}
              />
              <h3>Assista quando quiser.</h3>
              <p>
                Assista no celular, tablet, smart TV ou notebook sem pagar a
                mais por isso.
              </p>
            </div>
          </div>
        </div>
      </TabContainer>
    );
  }
}
export default TabContentTwo;

//Media query
const customMedia = generateMedia({
  smDesktop: "1440px",
  tablet: "960px",
});

//Main Tab content container

const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }
  //Tab top content
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
    ${customMedia.lessThan("smDesktop")`
  grid-template-columns: repeat(2,1fr);
`}
    ${customMedia.lessThan("tablet")`
  grid-template-columns: 1fr;
  text-align: center;
  row-gap: 1.5rem;
`}
  }
  span {
    grid-column: 1/8;
    ${customMedia.lessThan("tablet")`
    grid-column: 1/-1;
    font-size: 1.2rem;
  `}
  }

  .btn {
    margin: 0 1.25rem 1.25rem;
    grid-column: 9 / 12;
    ${customMedia.lessThan("tablet")`
    grid-column: 1/-1;
    margin-left: 30%;
    margin-right: 30%;
  `}
  }

  //tab bottom content
  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
    ${customMedia.lessThan("tablet")`
    grid-template-columns: 1fr;
  `}
  }
  h3 {
    margin: 0.5rem 0;
  }
  p {
    color: var(--main-grey);
  }
`;
