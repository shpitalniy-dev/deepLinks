import React from "react";
import PropTypes from "prop-types";
import logo from '../../../asserts/logo.jpg';
import { App, Button, Name, Logo } from './styledComponent';

export default class Layout extends React.Component {
    static propTypes = {

    }

    constructor(props) {
        super(props)
    }

    openApp = () => {
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            window.location.replace("instagram://user?username=bana.nana.ua");
        } else if (/Android/.test(navigator.userAgent)) {
            window.location.replace("intent://instagram.com/_u/bana.nana.ua/#Intent;package=com.instagram.android;scheme=https;end");
        } else {
            window.location.replace("https://www.instagram.com/bana.nana.ua");
        };
    }

    render() {
        return (
            <App>
                <App.Component>
                    <Logo src={logo}></Logo>
                    <Name>Бананки 🍌 Украина</Name>
                    <Button onClick={this.openApp}>Открыть в Instagram</Button>
                </App.Component>
            </App>
        )
    }
}