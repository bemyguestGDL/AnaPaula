simplyCountdown('#cuenta', {
    year: 2020, 
    month: 7, 
    day: 25, 
    hours: 13,
    minutes: 0,
    seconds: 0,
    words: {
        days: 'DAYS',
        hours: 'HRS',
        minutes: 'MIN',
        seconds: 'SEC',
        pluralLetter: ''
    },
    plural: true, 
    inline: false, 
    inlineClass: 'simply-countdown-inline', 
    
    enableUtc: true, 
    onEnd: function() { return; }, 
    refresh: 1000, 
    sectionClass: 'simply-section', 
    amountClass: 'simply-amount', 
    wordClass: 'simply-word',
    zeroPad: false,
    countUp: false
});