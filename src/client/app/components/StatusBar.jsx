import React from 'react';

export default class StatusBar extends React.Component {

    render() {
        const status = this.props.status;
        return (
            <div className={'new-line ' + status.level}>{status.message}</div>
        );
    }
}