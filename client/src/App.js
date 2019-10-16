import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import jwt_decode from 'jwt-decode';

import store from './store.js';

import Home from './components/Home.js';
import Login from './components/Authentication/Login.js';
import Signup from './components/Authentication/Signup.js';
import Main from './components/Layout/Main.js';
import setAuthHeader from './utils/setAuthHeader.js';
import { logoutUser, getCurrentUser } from './actions/authAction.js';

if (localStorage.getItem('jwtToken')) {
  const currentTime = Date.now() / 1000
  const decode = jwt_decode(localStorage.getItem('jwtToken'))

  if (currentTime > decode.exp) {
    store.dispatch(logoutUser())
    window.location.href = '/'
  } else {
    setAuthHeader(localStorage.getItem('jwtToken'))
    store.dispatch(getCurrentUser())
  }
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} /> 
            </Switch>
          </Main>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;