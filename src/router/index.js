import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import TodoList from '../pages/todolist/index.js';
// import Home from '../pages/home/index.js'
// import Header from '../common/header/index.js'

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      {/* <Header /> */}
      {/* <Route exact exac path="/" component={Home} /> */}
      <Route exact exac path="/todolist" component={TodoList} />
    </Switch>
  </HashRouter>
)

export default BasicRoute