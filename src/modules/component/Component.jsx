import React from "react";
import PropTypes from "prop-types";
import { ComponentContainer } from './styledComponent';

export default class Component extends React.Component {
    static propTypes = {
        account: PropTypes.string.isRequired,
    }

    openApp = () => {
        const { account } = this.props;
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            window.location.replace(`instagram://user?username=${account}`);
        } else if (/Android/.test(navigator.userAgent)) {
            window.location.replace(`intent://instagram.com/_u/${account}/#Intent;package=com.instagram.android;scheme=https;end`);
        } else {
            window.location.replace(`https://www.instagram.com/${account}`);
        };
    }

    render() {
        const { account } = this.props;
        return (
            <ComponentContainer>
                <ComponentContainer.Title>@{account}</ComponentContainer.Title>
                <ComponentContainer.Button onClick={this.openApp}>Открыть в Instagram</ComponentContainer.Button>
            </ComponentContainer>
        )
    }
}