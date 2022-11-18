//Leap Year checker program

function isLeap(year) {
	if (year % 4 === 0) {
		if (year % 100 === 0) {
			if (year % 400 === 0) {
				return 'Leap year.'
			}

			return 'Not leap Year'
		} else {
			return 'Leap Year.'
		}
	} else {
		return 'Not leap year.'
	}
}
isLeap(2020)

//Cross check the invite list and guest
var guestname = ['yuli', 'juli', 'buli', 'zuli']
var naam = prompt('what ur name')
if (guestname.includes(naam)) {
	alert('welcome')
} else {
	alert('next time')
}

//Fizz Buzz
var output = []
var count = 1

function fizzBuzz() {
	while (count <= 100) {
		if (count % 3 === 0 && count % 5 === 0) {
			output.push('fizzbuzz')
		} else if (count % 3 === 0) {
			output.push('fizz')
		} else if (count % 5 === 0) {
			output.push('buzz')
		} else {
			output.push(count)
		}
		count++
	}
	console.log(output)
}

//Who's Buying Lunch? Code Challenge
function whosPaying(names) {
	var totalPerson = names.length
	var randomperson = Math.floor(Math.random() * totalPerson)
	var random = names[randomperson]

	return random + ' is going to buy lunch today!'
}

//99 bottles of beer
var i = 99

while (i >= 1) {
	var e = i - 1
	if (e === 0)
		console.log(
			i +
				'bottle of beer on the wall,' +
				i +
				'bottle of beer Take one down and pass it around, no more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.'
		)
	else {
		console.log(
			i +
				' bottles of beer on the wall, ' +
				i +
				' bottles of beer. Take 1 down and pass it around, ' +
				e +
				' bottles of beer on the wall.'
		)
	}
	i--
}

//fibonacci generator

function fibonacciGenerator(n) {
	var output = []
	if (n === 1) {
		output = [0]
	} else if (n === 2) {
		output = [0, 1]
	} else {
		output = [0, 1]
		for (var i = 2; i < n; i++) output.push(output[output.length - 2] + output[output.length - 1])
	}

	return output

	output = fibonacciGenerator(1)
	console.log(output)
}
