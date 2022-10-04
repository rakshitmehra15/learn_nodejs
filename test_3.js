const {expect} = require('expect')
const {test} = global

// npm i bcrypt
const bcrypt = require('bcrypt')

test('hashing Password', async () => {
	const SALT_VALUE = 10
	const generatehash = async (password) => await bcrypt.hash(password, SALT_VALUE)

	let passHashSignup = await generatehash('ABc@1234') //fetched from database. We save pass hash for all users on signup process.
	let loginPass = 'ABc@1234'
	let passwordMatched = await bcrypt.compare(loginPass, passHashSignup)
	expect(passwordMatched).toBe(true)
})
