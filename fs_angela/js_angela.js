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
	if (count % 3 === 0 && count % 5 === 0) {
		output.push('FizzBuzz')
	} else if (count % 3 === 0) {
		output.push('Fizz')
	} else if (count % 5 === 0) {
		output.push('Buzz')
	} else {
		output.push(count)
	}
	count++
	console.log(output)
}
