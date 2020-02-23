import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductsPage from './components/ProductsPage';
import Navigator from './components/Navigator';
import ErrorPage from './components/ErrorPage';


function Home(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
        <div>
          <Navigator />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/products" component={ProductsPage}/>
            <Route component={ErrorPage}/>
           </Switch>
        </div> 
      </BrowserRouter>
  );
}

export default App;
