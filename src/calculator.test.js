const calculator = require ('./calculator')
// import {calculator} from "./calculator.js"

test('Complete addition', () => {
    expect(calculator.add(5,5)).toEqual(10)
})

test('Complete subtraction', () => {
    expect(calculator.subtract(5,5)).toEqual(0)
})


test('Complete multiplication', () => {
    expect(calculator.multiply(5,5)).toBe(25)
})


test('Complete division', () => {
    expect(calculator.divide(6,2)).toBe(3)
})

