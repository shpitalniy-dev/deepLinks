import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Component from '../component/Component.jsx';

export default class Layout extends React.Component {
    static propTypes = {
        accounts: PropTypes.array.isRequired,
    }

    render() {
        return (
            <Router>
                <Switch>
                    {this.props.accounts.map((item, index) => 
                        <Route key={index} path={item.path}>
                            <Component account={item.account} />
                        </Route>
                    )}
                </Switch>
            </Router>
        )
    }
}