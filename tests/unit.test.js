const bestify = require('../functions');

test('Bestify should return name is the best', () => {
    expect(bestify('Antoine')).toBe('Antoine is the best');
})

