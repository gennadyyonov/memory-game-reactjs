import React from 'react';
import {CardType} from './Enums.jsx';

export default class Settings {

    static cardTypeOptions() {
        const cardTypes = [];
        const keys = Object.keys(CardType);
        for (let i = 0; i < keys.length; i++) {
            const cardType = CardType[keys[i]];
            cardTypes.push(<option key={i} value={cardType.value}>{cardType.name}</option>)
        }
        return cardTypes;
    }

    static getCardTypeByValue(value) {
        const keys = Object.keys(CardType);
        for (let i = 0; i < keys.length; i++) {
            const cardType = CardType[keys[i]];
            if (cardType.value === value) {
                return cardType;
            }
        }
        return undefined;
    }

    static isPlayingCard(cardType) {
        return cardType === CardType.PLAYING;
    }
}