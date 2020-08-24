import React from 'react';
import './App.css';
import Main from './pages';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './pages/Login';
import ChoosePlan from './pages/ChoosePlan';

function App() {
  return (
    <BrowserRouter>
   <Switch>
     <Route exact path="/" component={Main}/>
     <Route  path="/login" component={Login}/>
     <Route  path="/choose-plan" component={ChoosePlan}/>

     </Switch>
    </BrowserRouter>
  );
}

export default App;
