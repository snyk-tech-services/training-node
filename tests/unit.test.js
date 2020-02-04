const functions = require('../functions');

test('Bestify should return name is the best', () => {
    expect(functions.bestify('Antoine')).toBe('Antoine is the best')
})

test('FigureOutWhatToSay should say the same thing' , () => {
    expect(functions.figureOutWhatToSay('/whateverpath')).toBe("I'm a catch all ! Looking for something whateverpath?")
})
