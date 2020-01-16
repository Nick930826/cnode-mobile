import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'
import Header from './components/Header'

const RouterMap = () => {
  return <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/detail' component={Detail} />
    </Switch>
  </BrowserRouter>
}

export default RouterMap