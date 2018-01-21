export const CardType = {
    NUMBER: {value: 'number', name: 'Number Card'},
    PLAYING: {value: 'playing', name: 'Playing Card'}
};

export const Level = {
    INFO: {value: "info"},
    SUCCESS: {value: "success"},
    WARNING: {value: "warning"},
    ERROR: {value: "error"}
};

export const Round = {
    ROUND_1 : { value : "1", name: 'Round 1', pairs : 4, maxNumberOfAttempts : 10 },
    ROUND_2 : { value : "2", name: 'Round 2', pairs : 6, maxNumberOfAttempts : 20 },
    ROUND_3 : { value : "3", name: 'Round 3', pairs : 9, maxNumberOfAttempts : 30 },
    ROUND_4 : { value : "4", name: 'Round 4', pairs : 12, maxNumberOfAttempts : 40 },
    ROUND_5 : { value : "5", name: 'Round 5', pairs : 15, maxNumberOfAttempts : 50 },
    ROUND_6 : { value : "6", name: 'Round 6', pairs : 18, maxNumberOfAttempts : 60 }
};