import React from 'react';
import './App.css';
import DashboardPage from './pages/dashboard/dashboard.component'
import IntakePage from './pages/intake/intake.component'

import {  Link, Route } from "react-router-dom";

class App extends React.Component{
render(){
  return(
    <div>
      <ul>
        <li><Link to='/'>Dashboard</Link></li>
        <li><Link to='/intake'>Intake</Link></li>
      </ul>
      <Route  exact path='/' component= {DashboardPage} />
      <Route  path='/intake' component= {IntakePage} />
    </div>
  )
}
}

export default App;
