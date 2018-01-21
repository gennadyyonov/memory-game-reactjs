import React from 'react';
import Settings from './Settings.jsx';

export default class DropDown extends React.Component {

    constructor(props) {
        super(props);

        this.handleDropDownChange = this.handleDropDownChange.bind(this);
    }

    handleDropDownChange(event) {
        const enumType = this.props.enumType;
        const enumConst = Settings.getEnumByValue(enumType, event.target.value);
        this.props.onDownChange(enumConst);
    }

    render() {
        const enumType = this.props.enumType;
        const items = Settings.options(enumType);
        return (
            <div className={'mainselection ' + this.props.clazz}>
                <label>
                    <select value={this.props.selected.value} onChange={this.handleDropDownChange}>
                        {items}
                    </select>
                </label>
            </div>
        );
    }
}