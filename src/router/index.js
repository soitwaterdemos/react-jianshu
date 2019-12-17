import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TodoList from '../pages/todolist/index.js';
import Home from '../pages/home/index.js'
import Header from '../common/header/index.js'
import Detail from '../pages/detail/loadable.js';
import Login from '../pages/login';
import Write from '../pages/write';

const BasicRoute = () => (
  <BrowserRouter>
    <Header />
    <Route exact path="/" component={Home} />
    <Route path='/login' exact component={Login}></Route>
    <Route path='/write' exact component={Write}></Route>
    <Route path='/detail/:id' exact component={Detail}></Route>
    <Route exact path="/todolist" component={TodoList} />
  </BrowserRouter>
)

export default BasicRoute