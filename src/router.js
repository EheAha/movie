// import Products from './routes/Products';
// <Route path="/products" exact component={Products} />

import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic'
// import Home from './routes/Home'
// import Cinema from './routes/cinema'
// import Person from './routes/Person'

const menuGlobal=[
    {
        id:'aaa',
        pid:'0',
        name:'首页',
        icon:'user',
        path: '/aaa',
        models: () => [import('./models/home')], //models可多个
        component: () => import('./routes/Home'),
    }, 
    {
        id:'bbb',
        pid:'0',
        name:'影院',
        icon:'user',
        path: '/aaa/bbb',
        models: () => [import('./models/cinema')], //models可多个
        component: () => import('./routes/Cinema'),
    }, 
    {
        id:'ccc',
        pid:'0',
        name:'ccc页',
        icon:'user',
        path: '/ccc',
        models: () => [import('./models/person')], //models可多个
        component: () => import('./routes/Person'),
    }, 
  ];
   
  function RouterConfig({ history, app }) {
    return (
      <Router history={history}>
        <Switch>
          {
            menuGlobal.map(({path,...dynamics},index)=>(
              <Route
                key={index} 
                path={path} 
                exact 
                component={dynamic({
                  app,
                  ...dynamics
                })} 
              />
              ))
            }
          </Switch>
        </Router>
      );
    }
     
    export default RouterConfig;