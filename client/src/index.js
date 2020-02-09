import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import {Provider} from 'react-redux'
import {
    BrowserRouter as Router,
} from "react-router-dom";
import store from './store'

ReactDom.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>


    , document.getElementById('root'))