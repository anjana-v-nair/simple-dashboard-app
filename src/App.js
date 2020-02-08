import React from 'react';
import './App.css';
import DashboardPage from './pages/dashboard/dashboard.component'
import IntakePage from './pages/intake/intake.component'

import {  Route } from "react-router-dom";

class App extends React.Component{
render(){
  return(
    <div>
      <Route  exact path='/' component= {DashboardPage} />
      <Route  path='/intake' component= {IntakePage} />
    </div>
  )
}
}

export default App;
