const capitalize = require ('./capitalize')

test('Capitalize the first letter', () => {
    expect(capitalize('what is up')).toMatch('What is up');
})