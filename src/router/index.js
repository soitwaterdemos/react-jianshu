import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import TodoList from '../pages/todolist/index.js';
import Home from '../pages/home/index.js'
import Header from '../common/header/index.js'
import Detail from '../pages/detail/loadable.js';
import Login from '../pages/login';
import Write from '../pages/write';

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Header />
      <Route exact exac path="/" component={Home} />
      <Route path='/login' exact component={Login}></Route>
      <Route path='/write' exact component={Write}></Route>
      <Route path='/detail/:id' exact component={Detail}></Route>
      <Route exact exac path="/todolist" component={TodoList} />
    </Switch>
  </HashRouter>
)

export default BasicRoute