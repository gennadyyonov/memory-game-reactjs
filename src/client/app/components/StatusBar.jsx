import React from 'react';

export default class StatusBar extends React.Component {

    render() {
        const message = this.props.message;
        return (
            <div className="warning">{message}</div>
        );
    }
}