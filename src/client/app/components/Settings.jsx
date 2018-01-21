import React from 'react';
import {CardType} from './Enums.jsx';

export default class Settings {

    static isPlayingCard(cardType) {
        return cardType === CardType.PLAYING;
    }

    static options(enumType) {
        const options = [];
        const keys = Object.keys(enumType);
        for (let i = 0; i < keys.length; i++) {
            const value = enumType[keys[i]];
            options.push(<option key={i} value={value.value}>{value.name}</option>)
        }
        return options;
    }

    static getEnumByValue(enumType, value) {
        const keys = Object.keys(enumType);
        for (let i = 0; i < keys.length; i++) {
            const enumValue = enumType[keys[i]];
            if (enumValue.value === value) {
                return enumValue;
            }
        }
        return undefined;
    }
}