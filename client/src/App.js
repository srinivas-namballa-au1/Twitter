import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store.js';

import Home from './components/Home.js';
import Login from './components/Authentication/Login.js';
import Signup from './components/Authentication/Signup.js';
import Main from './components/Layout/Main.js';

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