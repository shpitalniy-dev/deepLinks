import React from "react";
import ReactDOM from "react-dom";
import Layout from "./modules/Layout/index";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer/rootReducer";
import rootSaga from './sagas/rootSaga.js';
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
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Layout />
        <GlobalStyle />
    </Provider>, document.getElementById("root"));
