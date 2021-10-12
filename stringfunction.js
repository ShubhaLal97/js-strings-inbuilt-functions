var myFirstString = "this is a javascript string inbuilt function"

// returns the length of the string
console.log(myFirstString.length)

// find index of a string inside another string
console.log(myFirstString.indexOf('javascript'))
console.log(myFirstString.indexOf('is'))

// find last index of a string inside another string
console.log(myFirstString.lastIndexOf('javascript'))
console.log(myFirstString.lastIndexOf('is'))

// get a part of our string slice(start, end)
console.log(myFirstString.slice(0,5))
console.log(myFirstString.slice(5,20))
console.log(myFirstString.slice(-12))
console.log(myFirstString.slice(5))

// get sub string function - substr(startpos, length)
console.log(myFirstString.substr(0,5))

console.log(myFirstString.substr(5,10))

// toUpperCase() - It convert string into uppercase
console.log(myFirstString.toUpperCase())

// toLowerCase( - It converts string into lowercase)
console.log(myFirstString.toLowerCase())

// concat() - it merges two or more strings

var firstName = "Java"
var lastName = "script"

console.log(firstName.concat(' ',lastName,' ',myFirstString))

// we can concat by using '+'
console.log(firstName + lastName + myFirstString)

// trim() remove extra spaces
var extraSpaces = "    my string      "
console.log(extraSpaces.trim())

// charAt() this tries to get the char at given position
console.log(myFirstString.charAt(5))

// split() it tries to split entire on the basis of arguments passed

console.log(myFirstString.split(' '))

var myFirstString1 = "this,string,is,a,javascript"

console.log(myFirstString.split(','))