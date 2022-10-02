const {expect} = require('expect')
const {test} = global


test('sum', async () => {
	let received = 1 + 3
	let expected = 4

	expect(received).toBe(expected)
})

test('sub', async () => {
	let received = 10 - 9
	let expected = 1

	expect(received).toBe(expected)
})

test('mul', async () => {
	let received = 2 * 2
	let expected = 4

	expect(received).toBe(expected)
})

test('combination of add & sub', async () => {
	let received = 2 + 3 - 1
	let expected = 4

	expect(received).toBe(expected)
})

test('calculating distance travelled', async () => {
	// distance = speed * time
	// Calculate distance when speed is 10km/hr and time is 5hr?
	let receivedDistance = 10 * 5
	let expectedDistance = 50

	expect(receivedDistance).toBe(expectedDistance)
})

// - CHALLENGE: 15 minutes
// - test: days in 4 weeks = 4 * 7 = 28
// - division simple test
// - division test: Weight in kg (person) =  weight in grams/ 1000
// - combination of multiplication and division
// - power e.g., 2**4 = 16

test('days in 4 weeks ', async () => {
	// days in 1 week = 7
	let receivedDistance = 4 * 7
	let expectedDistance = 28

	expect(receivedDistance).toBe(expectedDistance)
})

test('division simple test ', async () => {
	// distance = speed * time
	// Calculate distance when speed is 10km/hr and time is 5hr?
	let receivedDistance = 2/2
	let expectedDistance = 1


	expect(receivedDistance).toBe(expectedDistance)
})


test('division test: Weight in kg (person) =  weight in grams/ 1000 ', async () => {
	// distance = speed * time
	// Calculate distance when speed is 10km/hr and time is 5hr?
	let receivedkilograms = 50
	let expectedgrams = 50000/1000


	expect(receivedkilograms).toBe(expectedgrams)

})


 test('days in 4 w of multiplication and divisioneeks ', async () => {
	// daycombination = 7
	let receivedDays = 7*4
	let expectedDays = 28

	expect(receivedDays).toBe(expectedDays)

 })

 test('combination of multiplication and division ', async () => {
	// daycombination = 7
	let received = 4*10/2
	let expected = 20

		expect(received).toBe(expected)
	
 })


 test('power e.g., 2**4 = 16 ', async () => {
	// daycombination = 7
	let received = 2**4
	let expected = 16

	expect(received).toBe(expected)
	
 })