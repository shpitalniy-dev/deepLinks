import React from "react";
import ReactDOM from "react-dom";
import Routing from "./modules/routing/index";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer/rootReducer";
import createSagaMiddleware from 'redux-saga';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
    }

    #root{
        height: 100vh;
        width: 100%;
    }
`

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Routing />
        <GlobalStyle />
    </Provider>, document.getElementById("root"));
