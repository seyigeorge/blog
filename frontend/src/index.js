import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import ShowPost from './components/showPost';
import { Route, Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import history from './history';

ReactDOM.render(  
       <Router history={history}>
           <Route exact path="/" component={App} />  
           <Route path="/" component={ShowPost} />
        </Router>
      ,document.getElementById('root'));

             

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
