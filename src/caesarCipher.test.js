const caesarCipher = require ('./caesarCipher')

test('Caeser Cipher dat text!', () => {
    expect(caesarCipher('Big bank take little bank!')).toMatch('Cjh cbol ublf mjuumf cbol!');
})