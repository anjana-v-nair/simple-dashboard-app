import React from 'react';
import './App.css';
import DashboardPage from './pages/dashboard/dashboard.component'
import IntakePage from './pages/intake/intake.component'
import  Layout  from './layout/layout'

import {  Route, Switch } from "react-router-dom";

class App extends React.Component{
render(){
  return(
    <Layout>
      <Switch>
        <Route  exact path='/' component= {DashboardPage} />
        <Route  path='/intake' component= {IntakePage} />
      </Switch>
    </Layout>
  )
}
}

export default App;
