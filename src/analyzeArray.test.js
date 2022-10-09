const analyzeArray = require ('./analyzeArray')

test('Analyze these numbers!', () => {
    expect(analyzeArray([24, 34, 46])).toEqual({average: 35, min: 24, max: 46, length:3 });
})