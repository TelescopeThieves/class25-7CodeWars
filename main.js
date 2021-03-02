// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
// Implement a function that checks if something is a palindrome.
function isPalindrome(line) {
    return line == line.split('').reverse().join('');
  }

//Define a method hello that returns "Hello, Name!" to a given name or says Hello, World! if name is not given (or passed as an empty String.
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
function hello(name) {
    if(name){
        let nameFix = name.toLowerCase().slice(1)
        let nameChar = name[0].toUpperCase()
        
        return `Hello, ${nameChar + nameFix}!`;
    } else{
        return `Hello, World!`
    }
  }

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]
function getSize(w, h, l){
    let arr = []
    arr.push(2*l*w + 2*l*h + 2*w*h)
    arr.push(l*w*h)
    return arr
}

// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.// Find the errors in the code to get the celsius converter working properly.

function weatherInfo (temp) {
    var c = convertToCelsius(temp)
    if (c < 0)
      return (c + " is freezing temperature")
    else
      return (c + " is above freezing temperature")
}
  
  function convertToCelsius (temperature) {
    return (temperature - 32) * (5/9)
}

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    // Go for it
    return str.split(' ').map(word => word.split('').reverse('').join('')).join(' ')
  }

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list. // Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    // throw "TODO: removeSmallest";
    if(numbers === []){
        return numbers
    }
    const smallest = Math.min(...numbers)
    const smallElementIndex = numbers.indexOf(smallest)
    return numbers.filter((e,i) => i !== smallElementIndex)
  }



// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
function oddOrEven(array) {
    //enter code here
    if(array === []){
        return 'even'
    }
    let sum = array.reduce((a,b) => a + b, 0)
    if(sum % 2 === 0){
        return `even`
    } else {
        return `odd`
    }
 }
