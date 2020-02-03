const bestify = require('../index.js');

test('Bestify should return name is the best', () => {
    expect(bestify('Antoine')).toBe('Antoine is the best');
})

