import React from "react";
import PropTypes from "prop-types";
import { App, Button } from './styledComponent';

export default class Layout extends React.Component {
    static propTypes = {

    }

    constructor(props) {
        super(props)
    }

    openApp = () => {
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            console.log('instagram://user?username=shpitalniy');
            window.location.replace("instagram://user?username=shpitalniy");
        } else if (/Android/.test(navigator.userAgent)) {
            console.log('intent://instagram.com/_u/shpitalniy/#Intent;package=com.instagram.android;scheme=https;end');
            window.location.replace("intent://instagram.com/_u/shpitalniy/#Intent;package=com.instagram.android;scheme=https;end");
        } else {
            console.log('https://www.instagram.com/shpitalniy');
            window.location.replace("https://www.instagram.com/shpitalniy");
        };
    }

    render() {
        return (
            <App>
                <App.Component>
                    <Button onClick={this.openApp}>Open in Instagram</Button>
                </App.Component>
            </App>
        )
    }
}