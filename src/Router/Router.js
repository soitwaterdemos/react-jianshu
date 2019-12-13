import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import TodoList from '../TodoList/TodoList.js';


const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={TodoList} />
      <Route exact path="/todolist" component={TodoList} />
    </Switch>
  </HashRouter>
)

export default BasicRoute