import React from 'react';

export default class StatusBar extends React.Component {

    render() {
        const message = this.props.message;
        return (
            <div>{message}</div>
        );
    }
}