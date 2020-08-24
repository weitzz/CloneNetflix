import React from 'react'
import styled from 'styled-components';
import {Button} from './Button';
import {Icon} from 'react-icons-kit';
import {cross} from 'react-icons-kit/icomoon/cross';
import {checkmark} from 'react-icons-kit/icomoon/checkmark';
import { generateMedia } from "styled-media-query";
import {Link} from 'react-router-dom';

 function TabContentThree() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{fontSize: '1.5rem'}}>
            Sem contrato nem taxas extras.
          </span>
          <Link to="/choose-plan"className="btn">
          <Button >Vamos Lá</Button>
          </Link>
        </div>
        <div className="tab-bottom-content">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Básico</th>
                <th>Padrão</th>
                <th>Premium</th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mensal</td>
                <td>R$9.99</td>
                <td>R$15.99</td>
                <td>R$25.99</td>
              </tr>
              <tr>
                <td>Imagem em HD disponível</td>
                <td><Icon  size={10} icon={cross} /></td>
                <td><Icon  size={10} icon={checkmark} /></td>
                <td><Icon  size={10} icon={checkmark} /></td>
              </tr>
              <tr>
                <td>Imagem em Ultra HD disponível</td>
                <td><Icon  size={10} icon={cross} /></td>
                <td><Icon  size={10} icon={cross} /></td>
                <td><Icon  size={10} icon={checkmark} /></td>
              </tr>
              <tr>
                <td>Quantas Telas simultâneas</td>
                <td>1</td>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Assistir na TV, notebook, videogame, tablet ou smartphone</td>
                <td><Icon  size={10} icon={checkmark} /></td>
                <td><Icon  size={10} icon={checkmark} /></td>
                <td><Icon  size={10} icon={checkmark} /></td>
              </tr>
              <tr>
                <td>Filmes e séries ilimitados</td>
                <td><Icon  size={10} icon={checkmark} /></td>
                <td><Icon  size={10} icon={checkmark} /></td>
                <td><Icon  size={10} icon={checkmark} /></td>
              </tr>
              <tr>
                <td>Cancele quando quiser</td>
                <td><Icon  size={10} icon={checkmark} /></td>
                <td><Icon  size={10} icon={checkmark} /></td>
                <td><Icon  size={10} icon={checkmark} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </TabContainer>
  )
}
export default TabContentThree;

//Media query
const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: '1000px'
})

//Main container
const TabContainer = styled.div`
background: var(--main-deep-dark);


.tab-content{
  margin: 0 15%;
  padding-bottom: 1%;
}
.tab-top-content{
  display: grid;
  grid-template-columns: repeat(12,1fr);
  padding: 3rem 0 0;
  ${customMedia.lessThan('lgDesktop')`
  grid-template-columns: 1fr;
  row-gap:1.5rem;
  text-align: center;
`}
}
span{
  grid-column: 3 / 9;
  ${customMedia.lessThan('lgDesktop')`
  grid-column: 1/-1;
  
`}
}
.btn{
  margin-left: 3rem;
  margin-right: 4.0rem;
  grid-column: 9 / 12;
  ${customMedia.lessThan('mdDesktop')`
  grid-column: 1/-1;
  margin-left: 30%;
  margin-right: 30%;
  
`}
}
//tab bottom content
.tab-bottom-content{
  margin: 2rem auto;
}
//table

table{
  width: 100%;
  margin-top: 2rem;
  border-collapse: collapse;
}
table thead th{
text-transform: uppercase;
padding: 0.8rem;
}
table tbody{
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;

}
table tbody tr td{
  color: #999;
  padding: 0.8rem 1.2rem;
  text-align: center;

}
table tbody tr td:first-child{
  text-align: left;

}
table tbody tr:nth-child(even){
  background: #222;
}
`;