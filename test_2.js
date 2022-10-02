const {expect} = require('expect')
const {test} = global

// # File test_2.js ( TEST: 15 mins)
// - calculate age of person(give user object), age =  currentYear - birthYear
// - get random candies(TEST: candies should be less than 10): single digit random number generator: Math.floor(Math.random() * 10)
// - comparison: greater than
// - comparison: greater than equal to
// - comparison: smaller than
// - comparison: smaller than equal to
// - comparison: equal to

test('calculate age of person', async () => {
	let received = 2022 - 1997
	let expected = 25

	expect(received).toBe(expected)
})

test('get random candies, always less than 10', async () => {
	// The Math.random() function returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1.
	let candies = Math.floor(Math.random() * 10)
	let received = candies < 10
	let expected = true

	expect(received).toBe(expected)
})

test('comparison: greater than', async () => {
	let received = 10 > 3
	let expected = true

	expect(received).toBe(expected)
})

test('comparison:greater than equal to', async () => {
	let received = 10 >= 10

	let expected = true

	expect(received).toBe(expected)
})

test('comparison: smaller than', async () => {
	let received = 3 < 12
	let expected = true

	expect(received).toBe(expected)
})

test('comparison:smaller than equal to', async () => {
	let received = 10 <= 10

	let expected = true

	expect(received).toBe(expected)
})
//Never use single equal to compare 2 values ,becz it is used to assign value to a variable
test('equal to', async () => {
	let received = 10 == 10

	let expected = true

	expect(received).toBe(expected)
})

test('equal to, triple equal is best', async () => {
	let received = 10 === 10

	let expected = true

	expect(received).toBe(expected)
})
