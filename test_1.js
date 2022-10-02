const {expect} = require('expect')
const {test} = global


test('sum', async () => {
	let received = 1 + 2
	let expected = 3

	expect(received).toBe(expected)
})