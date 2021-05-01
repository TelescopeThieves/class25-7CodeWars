// CODEWARS SOLUTIONS


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

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".
function arithmetic(a, b, operator){
  //your code here!
  switch(operator){
      case 'add':
      return a + b
      break
      case 'subtract':
      return a - b
      break
      case 'multiply':
      return a * b
      break
      case 'divide':
      return a / b
      break
  }
}

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits. 

function solution(digits){
  let bigSequence = 0
  let arr =  digits.split('').map(num => Number(num))
  arr.forEach((num,i,a) => {
    if(Number([a[i],a[i+1],a[i+2],a[i+3],a[i+4]].join('')) > bigSequence){
      bigSequence = Number([a[i],a[i+1],a[i+2],a[i+3],a[i+4]].join(''))
    }
  })
  return bigSequence
}

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
  let arr = numbers.sort((a,b) => a - b)
  if(arr[0] !== arr[1]){
      return arr[0]
    }else return arr[arr.length-1]
  }

// Your task is to make function, which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step.
// If begin value is greater than the end, function should returns 0


const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    if(begin > end){
      return 0
    }
    let sum = 0
    for(let i = begin; i <= end; i += step){
        sum += i
    }
    return sum
  };

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

  function nbDig(n, d) {
    // your code
  let arr = []
  for(let i = 0; i <= n; i++){
    arr.push((i**2).toString())
  }
  let count = 0
  arr.forEach(num => {
    count += num.split('').filter(num => num === String(d)).length
    })
  return count
}


// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

let isAnagram = function(test, original) {
  if(test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')){
    return true
  } else return false
};

// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.

function getDivisorsCnt(n){
  // todo
let count = 0
for(let i = 1; i <= n; i++){
  if(n % i === 0){
    count++
  }
}
return count
}

// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

function triangular( n ) {
  let count = 0
  for(let i = 1; i <= n; i++){
    count += i
  }
  return count
}

// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.
function distinct(a) {
  return [...new Set(a)];
}

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce((a,b) => a + Number(b),0)
}

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

let number = function(array){
  //your awesome code here
 let arr = []
 let x = 1
 for(let i = 0; i < array.length; i++){
   arr.push(`${x}: ${array[i]}`)
   x++
 }
  return arr
}
// or
let number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}

// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :

// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.


function maxMultiple(divisor, bound){
  //your code here
  let N = 0
  for(let i = 1; i <= bound; i++){
    if(i % divisor === 0){
      N = i
    }
  }
  return N
}


// Complete the function/method so that it returns the url with anything after the anchor (#) removed. 
function removeUrlAnchor(url){
  // TODO: complete
  let x = url.indexOf('#')
  if(url.includes('#')){
    return url.slice(0,x)
  }
  return url
}

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

let capitals = function (word) {
	// Write your code here
  return word.split('').map((letter, i) => {
    if(letter === letter.toUpperCase()){
      return i
    }
  }).filter(num => Number.isInteger(num))
};

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  return array.sort((a,b) => a.length > b.length)
};

// Create a class Ghost
// Ghost objects are instantiated without any arguments.
// Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated
let Ghost = function() {
  this.color = ['white','yellow','purple','red'][Math.floor(Math.random()*4)]
};




// According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.
// You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

class God{
  /**
   * @returns Human[]
   */
    static create(){
      return [new Man('Adam'), new Woman('Eve')]
    }
  }
  class Human{
    constructor(name){
      this.name = name
    }
  }
  class Man extends Human{
    constructor(name){
      super(name)
    }
  }
  class Woman extends Human{
      constructor(name){
      super(name)
    }
  }
  
// Ahoy matey!
// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.
// Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!

// Add the method

// isWorthIt

// to decide if the ship is worthy to loot. For example:

// titanic.isWorthIt() // return false

// This Kata teaches you the very basic of method creation.

// Good luck!

function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;
  this.isWorthIt = function(){
      if(this.draft - (this.crew * 1.5) > 20){
        return true
      } else return false
    }
  }

// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  get info(){
    return `${this.name}s age is ${this.age}`
  }
}
// Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

// If the user tries to guess more than the limit, the function should throw an error.
// If the user guess is right it should return true.
// If the user guess is wrong it should return false and lose a life.

// Can you finish the game so all the rules are met?

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {

    if((n === this.number) && this.lives > 0){
      return true
    } else if((n !== this.number) && this.lives > 0){
      this.lives -= 1
      return false;
    } else throw `Already dead!`
  }
}

// Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.

Math.roundTo = function (number, precision) {
  // TODO: Program Me
  return Number(number.toFixed(precision))
}

// The following code could use a bit of object-oriented artistry. While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at least, something similar depending on your language)
// Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call. 

class Person {
  constructor(myName, yourName){
    this._myName = myName
    this.yourName = yourName
  }
  get name(){
    return this._myName
  }
  greet(theirName){
    this.yourName = theirName
    return `Hello ${this.yourName}, my name is ${this.name}`
  }
}

// Write a class Block that creates a block (Duh..)
// ##Requirements
// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.
// Define these methods:

// `getWidth()` return the width of the `Block`

// `getLength()` return the length of the `Block`

// `getHeight()` return the height of the `Block`

// `getVolume()` return the volume of the `Block`

// `getSurfaceArea()` return the surface area of the `Block`


class Block{

  constructor(data){
    // ...
    this.data = data
  }
  getWidth(){
    return this.data[0]
  }
  getLength(){
    return this.data[1]
  }
  getHeight(){
    return this.data[2]
  }
  getVolume(){
    return this.data[0] * this.data[1] * this.data[2]
  }
  getSurfaceArea(){
    return (2 * this.data[0] * this.data[1]) + (2 * this.data[0] * this.data[2]) + (2 * this.data[1] * this.data[2])
  }
  
}



// Get Coding :)
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, 'shark', status);
    
  }
}

class Cat extends Animal {
  constructor(name, age, status){
    super(name, age, 4, 'cat', status)
  }
  introduce(){
    return `${super.introduce()}  Meow meow!`
  }
}

class Dog extends Animal {
   constructor(name, age, status, master){
    super(name, age, 4, 'dog', status)
     this.master = master
  }
  greetMaster(){
    return `Hello ${this.master}`
  }
}

// Write a function sum that accepts an unlimited number of integer arguments, and adds all of them together.
// The function should reject any arguments that are not integers, and sum the remaining integers.

function sum(...args){
  //...
  return args.filter(num => Number.isInteger(num)).reduce((a,b) => a + b,0)
  }


// I. Cuboid

// The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.
// The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.

// II. Cube

// class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.  

class Cuboid {
  // TODO: Program Me
  constructor(length, width, height){
    this.length = length
    this.width = width
    this.height = height
  }
  get surfaceArea(){

    return 2 * (this.length*this.width + this.length*this.height + this.width*this.height)
  }
  get volume(){
    return this.length*this.width*this.height
  }
}
class Cube extends Cuboid {
  // Don't forget to make a call to super ;)
  constructor(length){
    super(length, length, length)
  }

}

// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  
  if(fighter1.name === firstAttacker){
    while(fighter1.health > 0 && fighter2.health > 0){
      fighter2.health -= fighter1.damagePerAttack
      fighter1.health -= fighter2.damagePerAttack
    }
    return fighter2.health > 0 ? fighter2.name : fighter1.name;
    
  } else if (fighter2.name === firstAttacker){
    while(fighter1.health > 0 && fighter2.health > 0){
      fighter1.health -= fighter2.damagePerAttack
      fighter2.health -= fighter1.damagePerAttack
    }
    return fighter1.health > 0 ? fighter1.name : fighter2.name;
  }
}

// Define a method/function that removes from a given array of integers all the values contained in a second array.

Array.prototype.remove_ = function(integer_list, values_list){
  //your code here
  return integer_list.filter((num) => !values_list.includes(num))
}

// In this kata, your job is to create a class Dictionary which you can add words to and their entries.

class Dictionary {
  constructor() {
    // 
    this.dict = {}
   
  }
  
  newEntry(key, value) {
    // your code
    return this.dict[key] = value
  }
  
  look(key) {
    // your code
      return this.dict[key] || `Can't find entry for ${key}`
    
  }
}


// You're going to implement a simple counter class. The counter will start at zero, and every time its incr method is called, it will increase by 1.

// There's one caveat: Your counter must act like a number and support arithmetic operations and comparisons.

// examples:
// var c = new Counter();
// c.incr(); // counter is now at 1
// c + 1; // 2
// c > 1; // false
// c > 0; // true
// c == 1; // true
// Math.sqrt(c); // 1

function Counter(){
  this.value = 0
}

Counter.prototype.incr = function() {
  this.value += 1
  
}

Counter.prototype.valueOf = function() {
  return this.value
}


// The Array's reverse() method has gone missing! Re-write it, quick-sharp!
// When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

Array.prototype.reverse = function() {
  // ...

  for(let i = this.length - 1; i >= 0; i--){
    this.push(this[i])
    this.splice(i,1)
  }

  return this
};


// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.
// e.g. transposeTwoStrings(['Hello','World']);

// should return

// H W  
// e o  
// l r  
// l l  
// o d


function transposeTwoStrings(arr){
  //your code here
    let result = []
    let long = Math.max(arr[0].length, arr[1].length)
    for(let i = 0; i < long; i++){
    result.push(`${arr[0][i] || ' '} ${arr[1][i] || ' '}`);
  }
    return result.join('\n');
    }

// You have to create a function named reverseIt.

// Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order. If the data is any other type, return it as it is.

function reverseIt(data){

  if(typeof data === 'string'){
    return data.split('').reverse().join('')
  } else if(typeof data === 'number'){
    return parseFloat(String(data).split("").reverse().join(""));
    }
  else return data
}

// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
// All inputs will be integers. Please return an integer. Round down

function dutyFree(normPrice, discount, hol){
  let dollarsOff = normPrice * (discount * .01)
  return Math.floor(hol/dollarsOff)
}

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.

// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.


function peopleWithAgeDrink(old) {
  return  old < 14 ? 'drink toddy'
        : old < 18 ? 'drink coke'
        : old < 21 ? 'drink beer'
        : 'drink whisky'
}

// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.
// For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.
// Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.

function inAscOrder(arr) {
  // Code your algorithm here :)
  if(arr.length === 1){
    return true
  }
  let check = arr.map((num,i,a) => a[i] < a[i+1]).slice(0,-1)
  return check.every(el => el === true)
}


// There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it. 

// mark the MrFreeze object instance as frozen
Object.freeze(MrFreeze)


// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

function capitalize(s){
  let s1 = s.split('').map((letter,i,a) => {
    if(i % 2 === 0){
      return letter.toUpperCase()
    } else{
      return letter
    }
  }).join('')
  
  let s2 = s.split('').map((letter,i,a) => {
    if(i % 2 !== 0){
      return letter.toUpperCase()
    } else{
      return letter
    }
  }).join('')
  
  return [s1,s2]
};

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
  //...
  let count = 0
  text.toLowerCase().split('').map((letter,i,a) => {
      if(a.indexOf(letter) !== i && a.lastIndexOf(letter) === i){
        count++
      }
    })
  return count
}
// or 
function duplicateCount(text){
  const myObj = {}

  text.toLowerCase().split('').forEach((e) => {
    
    myObj[`${e}`] ? myObj[`${e}`]++ : myObj[`${e}`] = 1
  })
  
  return Object.values(myObj).filter(e => e !== 1).length
}


// We want to generate a function that computes the series starting from 0 and ending until the given number.
// Example:

// Input:

// > 6

// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15

// Output:

// -15<0

// Input:

// > 0

// Output:

// 0=0

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    // for
    if(count === 0){
      return "0=0"
    } else if(count < 0){
      return `${count}<0`
    }
    let x = []
    for(let i = 0; i <= count; i++){
      x.push(i)
    }
    let result = x.reduce((acc,c) => +acc + c)
    let seq = x.map(num => num.toString()+ '+').join('').slice(0,-1)
    return `${seq} = ${result}`
      //while
  };

  return SequenceSum;

})();

// Given a string str, reverse it omitting all non-alphabetic characters.

function reverseLetter(str) {
  //coding and coding..

return str.toLowerCase().split('')
      .filter(char => ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].includes(char))
      .reverse().join('')
  
}

// Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.
// Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.
// If the input number is already a palindrome, the number of steps is 0.
// All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

// For example, start with 87:

//   87 +   78 =  165     - step 1, not a palindrome
//  165 +  561 =  726     - step 2, not a palindrome
//  726 +  627 = 1353     - step 3, not a palindrome
// 1353 + 3531 = 4884     - step 4, palindrome!


let palindromeChainLength = function(n) {
  let step = 0
  if(n === Number(n.toString().split('').reverse().join(''))){
    step = 0
  } else{
     while(n !== Number(n.toString().split('').reverse().join(''))){
       n += Number(n.toString().split('').reverse().join(''))
       step++
     }
  }
  return step
};

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0

var gimme = function (inputArray) {
  // Implement this function
  let x = []
  inputArray.forEach(num => x.push(num))
  x.sort((a,b) => a - b)
  return inputArray.indexOf(x[1])
};


// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). 

function minValue(values){
  //your code here
  let x = new Set(values)
  let y = Array.from(x)
  return Number(y.sort((a,b) => a - b).map(num => num.toString()).join(''))
  
}

// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'


function removeDuplicateWords (s) {
  // your perfect code...
  return Array.from(new Set(s.split(' '))).join(' ')
}

// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?
// examples:
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5

function roundToNext5(n){
  // ...
  if(Math.abs(n % 5) === 0){
    return n
  }
  let result = 0
  for(let i = n; Math.abs(i % 5) !== 0; i++){
    result = i + 1
  }
  return result
}

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

function mxdiflg(a1, a2) {
  // your code
if(a1.length === 0 || a2.length === 0){
  return -1
}
let a1Lengths = a1.map(word => word.length)
let a2Lengths = a2.map(word => word.length)
let x = Math.abs(Math.min(...a1Lengths) - Math.max(...a2Lengths))
let y = Math.abs(Math.min(...a2Lengths) - Math.max(...a1Lengths))

return x > y ? x : y;
}


// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function solve(s){
  //..
let lowCase = 0
let upCase = 0
s.split('').forEach(letter => letter === letter.toLowerCase()? lowCase++ : upCase++)
return lowCase >= upCase ? s.toLowerCase() : s.toUpperCase()
}


// It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

//The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
//     The function should return an object/dict with the same names, showing how much money the members should pay or receive.

// Further points:

// The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.

//If value is a decimal, round to two decimal places.

//Translations and comments (and upvotes!) welcome.


function splitTheBill(x) {
  //code away...
let total = 0
let count = 0

for(let key in x){
total += x[key]
count++
}

let billCut = (total / count)

Object.keys(x).forEach(key => x[key] = +(x[key] - billCut).toFixed(2))
return x

}


// Create a function add(n)/Add(n) which returns a function that always adds n to any number


function add(n) {
  return function(y){
    return n + y
  }
}

// add(3)(2)
// -> 5


// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  // your code
  let arr = [age1,age2,age3,age4,age5,age6,age7,age8]
  return Math.floor(Math.sqrt(arr.map(age => age*age)
             .reduce((a,b) => +a + b)) / 2)
}



function f(n){
  //insert your code here.... and go crazy!
  
    let result = 0
    
    if(Number.isInteger(n) && n > 0){
      for(let i = 1; i <= n; i++){
        result += i
      }
    } else return false
    
      return result
  };

//   The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

  function duplicateEncode(word){
  
    return word.toLowerCase().split('').map((letter,i,a) => {
      return a.indexOf(letter) === a.lastIndexOf(letter) ? letter = '(' : letter = ')' ;
      }).join('')
  }

  var greet = function(name) {
    name = name[0].toUpperCase() + name.slice(1).toLowerCase()
    return `Hello ${name}!`
  };


//Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

  function solution(pairs){
    // TODO: complete
    let keys = Object.keys(pairs)
    let values = Object.values(pairs)
    return keys.map((key,i,a) => `${key} = ${values[i]}`).join(',')
  }

  // Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

  // The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
  
  function mygcd(x,y){
    //your code here
    let divisor = 0
    let smaller = Math.min(x,y)
    for(let i = 1; i <= smaller; i++){
      if(x % i === 0 && y % i === 0){
        divisor = i
      }
    }
    return divisor
  }


  // check if array is in ascending, descending or not in order 


  function isSortedAndHow(array) {
    let ascend = array.slice(0).sort((a,b) => a - b)
    let descend = array.slice(0).sort((a,b) => a - b).reverse()
      if(array.join('') === ascend.join('')){
      return 'yes, ascending'
      }else if (array.join('') === descend.join('')){
      return 'yes, descending'
      }else return 'no'
    }
  
  // Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
  
  // a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

  // You may assume the input is always valid.


  function isPowerOfTwo(n){
    //.. should return true or false ..
    let result = 0
    for(let i = 0; result < n; i++){
      result = Math.pow(2,i)
    }
    if(n === 0){
      return false
    }
    return result === n ? true : false ;
    
  }
  // Write a function that returns the number of occurrences of an element in an array.
  // Examples
  // var arr = [0, 1, 2, 2, 3];
  // arr.numberOfOccurrences(0) === 1;
  // arr.numberOfOccurrences(4) === 0;
  // arr.numberOfOccurrences(2) === 2;
  // arr.numberOfOccurrences("a") === 0;

  Array.prototype.numberOfOccurrences = function(n) {
    return this.filter(num => num === n).length
  }

  // Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.
  function repeater(string, n){
    //Your code goes here.
    return string.repeat(n)
  }

  // Find the number with the most digits.

  // If two numbers in the argument array have the same number of digits, return the first one in the array.
  
  function findLongest(array){
    // code here
    let sorted = array.slice(0).sort((a,b) => a.toString().length - b.toString().length)
    let long = sorted[sorted.length - 1].toString().length
    return array.find(num => num.toString().length === long)
  }

  
  // Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.
  // Examples
  
  //  5  -->  [0,  1,  3,  6,  10,  15]
  // -5  -->  [0, -1, -3, -6, -10, -15]
  //  7  -->  [0,  1,  3,  6,  10,  15,  21,  28]
  // ohboy
  
  
  function sumOfN(n) {
    // insert here your code
      let arr = []
      for(let i = 0; i <= Math.abs(n); i++){
        arr.push(i)
      }
      if( n > 0){
          return arr.map(num => {
                    let x = num
                    for(let i = 0; i < num; i++){
                    x += i
                    }
                    return num = x
                  })
          } else if(n < 0){
              return arr.map(num => {
                    let x = 0 
                    for(let i = 0; i <= Math.abs(num); i++){
                    x -= i
                    }
                    return num = x
                  })
          } else return [n]
    };


    // Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.


    function keysAndValues(data){
      // TODO: complete
      return [Object.keys(data), Object.values(data)]
    }

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
// Example:
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

    function flattenAndSort(array) {
      // Good luck, brave code warrior!
      let sorted = []
      array.forEach(a => a.forEach(num => sorted.push(num)))
      return sorted.sort((a,b) => a - b)
    }

// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array){
  //your code here
  let team1 = []
  let team2 = []
  array.forEach((num, i) => {
    if(i % 2 === 0){
      team1.push(num)
    } else{
      team2.push(num)
    }
  })
  let team1R = team1.reduce((a,c) => a + c, 0)
  let team2R = team2.reduce((a,c) => a + c, 0)
//   return [team1,team2]
  return [team1R,team2R]
}


// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

//     Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
//     Each part will be in a string
//     Elements of a pair must be in the same order as in the original array.

function partlist(arr) {
  // your code
let x = []
let finalArr = []
for(let i = 1; i < arr.length; i++){
  x.push(arr.slice(0,i),arr.slice(i))
}
x = x.map((a) => a.join(' '))
for(let i = 0; i < x.length; i++){
  if(i % 2 === 0){
    finalArr.push([x[i],x[i+1]])
  }
}
return finalArr
}


// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.



function wordsToMarks(string){
  //your code here
  let aplha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let count = 0
  let str = string.split('')
  str.map(letter => {
    count += aplha.indexOf(letter) + 1
  })
  
  return count
}

// alternative 
function wordsToMarks(str)
{
  var sum = 0;
  for (let i = 0; i < str.length; i++)
    sum += str.charCodeAt(i) - 96;
  return sum;
}

// Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

// For Example:

// [
//   [1, 2, 3, 4, 5],       // minimum value of row is 1
//   [5, 6, 7, 8, 9],       // minimum value of row is 5
//   [20, 21, 34, 56, 100]  // minimum value of row is 20
// ]

function sumOfMinimums(arr) {
  // your code here
  return arr.map(a => a.sort((x,y)=> x - y)).map(arr => arr[0]).reduce((acc,c) => acc + c,0)
  
}

// alternative
function sumOfMinimums(arr) {
  return arr.reduce((p, c) => p + Math.min(...c), 0);
}


// Complete the function caffeineBuzz, which takes a non-zero integer as it's one argument.

// If the integer is divisible by 3, return the string "Java".

// If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

// If the integer is one of the above and is even, add "Script" to the end of the string.

// Otherwise, return the string "mocha_missing!"

function caffeineBuzz(n){
  if(n % 4 === 0 && n % 3 === 0 && n % 2 === 0){
    return `CoffeeScript`
  } else if (n % 4 === 0 && n % 3 === 0){
    return `Coffee`
  } else if(n % 3 === 0 && n % 2 === 0){
    return `JavaScript`
  } else if (n % 3 === 0){
    return `Java`
  }else return `mocha_missing!`
  }


  // You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
  function isValidWalk(walk) {
    //insert brilliant code here
    let countNS = 0
     let countEW = 0
     
    if(walk.length < 10 || walk.length > 10){
      return false
    }
    walk.forEach((dir) => {
      if(dir === 'n'){
        countNS++
      }else if(dir === 's'){
        countNS--
      }else if(dir === 'e'){
        countEW++
      }else if(dir === 'w'){
        countEW--
      }
    })
    return countNS === 0 && countEW === 0 ? true : false;
  }


  // Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

  // persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4  // and 4 has only one digit

  function persistence(num) {
    //code me
   let perCount = 0
   while(num.toString().length > 1){
    num = num.toString().split('').reduce((acc,c) => acc * Number(c),1)
     perCount++
   }
   return perCount
 }

//  Complete the function circleArea so that it will return the area of a circle with the given radius. Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return false.
 var circleArea = function(radius) {
  if(radius <= 0 || isNaN(radius)){
    return false
  }
  return Number((Math.PI * radius**2).toFixed(2))
};



// Pattern:

// 1
// 22
// 333
// ....
// .....
// nnnnnn

function pattern(n){
  let output = ''
  if(n < 1){
    return output
  } else{
    for(let i = 1; i <= n; i++){
      let str = i.toString()
      output += str.repeat(i)
      output +=`\n`
    }
  }
 return output.slice(0,-1)
}

// This kata is the first of a sequence of four about "Squared Strings".

// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

// Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
// vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
// Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
// hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"

function vertMirror(strng) {
  // Your code
return strng.split('\n').map(word => word.split('').reverse().join('')).join('\n')
}
function horMirror(strng) {
  // Your code
return strng.split('\n').reverse().join('\n')
}
function oper(fct, s) {
  // Your code
return fct(s)
}


function addLetters(...letters) {
  // your code here
  if(letters.length === 0 || typeof letters === 'undefined'){
    return 'z'
  }
  let count = 0
  letters.forEach((letter,i,a) => {
    count += a[i].charCodeAt(0) - 96
  })
  while(count > 26){
    count -= 26
  }
  return String.fromCharCode(96 + count)
}


// Given a number , Return _The Maximum number _ could be formed from the digits of the number given . 
function maxNumber(n){
  //your code here
  return Number(n.toString().split('').sort((x,y) => y - x).join(''))
}



// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
function adjacentElementsProduct(array) {
  // max product
  let productArr = []
  for(let i = 0; i < array.length; i++){
    if(array[i+1]){
      productArr.push(array[i] * array[i+1])
    }
    
  }
  return Math.max(...productArr)
}


// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]

// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

function sumTriangularNumbers(n) {
  if(n < 0){
    return 0;
  }
  let acc = 1
  let count = 1
  let triangle = []
  for(let i = 1; i <= n; i++){
    triangle.push(count)
    acc += 1
    count += acc
  }
  return triangle.reduce((a,b) => a + b, 0)
}

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
  return text.split('').map(letter => {

      return letter.toLowerCase().charCodeAt(0) - 96
    
  }).filter(num => num > 0 && num <= 26).join(' ')
}


// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1


function alphabetWar(fight){
  let arr = fight.toLowerCase().split('')
  let leftSide = {'w': 4,'p': 3,'b': 2,'s': 1}
  let rightSide = {'m': 4,'q': 3,'d': 2,'z': 1}
  let leftCount = 0
  let rightCount = 0
  
  arr.forEach(letter => {
    for(key in leftSide){
      if(letter === key){
        leftCount += leftSide[key]
      }
    }
    for(key in rightSide){
      if(letter === key){
        rightCount += rightSide[key]
      }
    }
    
  })
  
  if (leftCount > rightCount) {
    return `Left side wins!`
  } else if (rightCount > leftCount){
    return `Right side wins!`
  }
   return "Let's fight again!";
}

// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
// findDigit(5673, 4)     returns 5
// findDigit(129, 2)      returns 2
// findDigit(-2825, 3)    returns 8
// findDigit(-456, 4)     returns 0
// findDigit(0, 20)       returns 0
// findDigit(65, 0)       returns -1
// findDigit(24, -8)      returns -1

var findDigit = function(num, nth){
  if(nth <= 0){
    return -1
  }
let arr = num.toString().split('').filter(num => num !== '-').map(num => Number(num))
while(arr.length < nth){
  arr.unshift(0)
}
arr.reverse()
console.log(arr)
return Math.abs(arr[nth - 1])
}

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]

function tribonacci(signature,n){
  //your code here
  let tribonacci = []
  tribonacci.push(...signature)
  for(let i = 0; i < n; i++){
    let x = tribonacci[i] + tribonacci[i + 1] + tribonacci[i + 2]
    tribonacci.push(x)
  }
  return tribonacci.slice(0,-3)
}

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
  // Program Me
  let x = n.toString(2)
  return x.split('').map(Number).filter(Number).length
};


// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

function order(words){
  // ...
  let inOrder = []
  if(!words){
    return ""
  } else{
    words.split(' ').map((w,i,a) => {
      let newIndex = Number(w.split('').filter(Number)[0])
      inOrder[newIndex - 1] = w
    })
  }
  return inOrder.join(' ')
}


// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

function iqTest(numbers){
  // ...
  let even = 0
  let odd = 0
  let arr = numbers.split(' ').map(Number)
  arr.forEach(num => {
    if(num % 2 === 0){
       even += 1
    }else odd += 1
  })
  if(even > odd){

    return arr.indexOf(arr.find(num => num % 2 !== 0)) + 1
  } else{
    return arr.indexOf(arr.find(num => num % 2 === 0)) + 1
  }

}

// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

function digPow(n, p){
  // ...
  let result = 0
  let arr = n.toString().split('').map(Number)
  for(let i = 0; i < arr.length; i++){
    result += arr[i]**p
    p += 1
  }
  if(result % n === 0){
    return result / n
  } else{
    return -1
  }
}


// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
function toCamelCase(str){
  
  if(str.length === 0){
    return ''
  }
  
  if(str.includes('-')){
    str = str.split('-')
  }else if(str.includes('_')){
    str = str.split('_')
  }

  return str.map((w,i,a) => {
    if(i > 0){
      return w[0].toUpperCase() + w.slice(1)
    } else{
      return w
    }
  }).join('')
  
}

function findEvenIndex(arr){
  //Code goes here!
  let result = -1
  
  arr.forEach((num,i,a) => {
    let leftS = 0
    let rightS = 0
    for(let j = i+1; j < a.length; j++){
      rightS += a[j]
    }
    for(let k = i-1; k >= 0; k--){
      leftS += a[k]
    }
    if(leftS === rightS){
      result = i
    }
  })

  return result
}


function list(names){
  //your code here
  
  if(names.length === 0){
    return ''
  }else if(names.length === 1){
    return names[0].name
  }
  
  let nameList = []
  names.forEach(obj => nameList.push(obj.name))
  return nameList.slice(0,-1).join(', ') + ' & ' + nameList.slice(-1)
}

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

function narcissistic(value) {
  // Code me to return true or false
  let check = value.toString().split('')
              .map((num,i,a) => num**a.length)
              .reduce((a,b) => a + b, 0)
  return value === check
}


function isPangram(string){
  //...
  let alpha = `abcdefghijklmnopqrstuvwxyz`
  let hash = {}
  
  string.toLowerCase().split('')
    .filter(letter => letter.charCodeAt(0) - 96 >= 1 && letter.charCodeAt(0) - 96 <= 26)
    .map(letter => {
      if(hash[letter]){
      hash[letter] += 1
    }else hash[letter] = 1
  })
  
 let check = alpha.split('').map(letter => {
   for(key in hash){
     if(key === letter){
       return true
     }
   }
 })
  return check.every(el => el === true)
}

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  // do magic
  let hash = {}
  arr.forEach(num => {
    if(hash[num]){
      hash[num]+=1
    } else{
      hash[num] = 1
    }
  })
  for(key in hash){
    if(hash[key] === 1){
      return Number(key)
    }
  }
}
// alt 
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(a1, a2){
  //your code here
  if(a1 === null || a2 === null){
    return false
  }
  a1.sort((a,b) => a - b)
  a2.sort((a,b) => a - b)
  a1 = a1.map(num => num**2)
  return a1.every((x,i) => x === a2[i])
}

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
  let pairs = []
  
  if(str.length % 2 !== 0){
       str.split('').map((a,i,arr) => {
      if(i % 2 === 0 && i + 1 < str.length - 1){
        pairs.push(`${a}${arr[i+1]}`)
      }else if(i === str.length - 1){
        pairs.push(`${a}_`)
      }
    })
  } else if(str.length % 2 === 0){
           str.split('').map((a,i,arr) => {
      if(i % 2 === 0){
        pairs.push(`${a}${arr[i+1]}`)
      }
    })
  } 
  return pairs
}

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
  //Code here
  return str.split(' ').map(word => {
    let alpha = 'abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(word.split('').every(x => alpha.includes(x))){
      return word.slice(1)+word[0]+`ay`
    } else{
      return word                        
    }
  }).join(' ')
  
}

var moveZeros = function (arr) {
  // TODO: Program me
  let zeros = arr.filter(el => el === 0)
  
  return arr.map(el => {
    if(el !== 0){
      return el
    } else return ''
  }).concat(zeros).filter(a => a !== '')
}

var moveZeros = function (arr) {
  // TODO: Program me
return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0))
}


// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  if(typeof iterable === 'string'){
    return iterable.split('').filter((x,i,a) => x != a[i+1])
  } else{
    return iterable.filter((x,i,a) => x != a[i+1])
  }
}


function deleteNth(arr,n){
  let hash = {}
  
  arr.forEach(num => {
    if(hash[num]){
      hash[num] += 1
    }else{
      hash[num] = 1
    }
  })

  for(let key of Object.keys(hash)){
    while(hash[key] > n){
      hash[key] -= 1
    }
  }
  
  let newArr = []
//   loops thru array, checks if the element
  arr.forEach(nCount => {
    if(hash[nCount] >  0){
      newArr.push(nCount)
      hash[nCount] -= 1
    }
  })
  return newArr
}

function printArray(array){
  //show me the code!
  return array.join(',')
}

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
function sortArray(array) {
  // Return a sorted array.
  let sortedArr = array.filter(num => num % 2 !== 0).sort((a,b) => a - b)
  let count = 0
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
      array[i] = sortedArr[count]
      count++
    }
  }
  return array
}

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.


function countSmileys(arr) {
  let valid = [':)',':D',':-)',':~)',':-D',':~D',';)',';D',';-D',';~D',';-)',';~)']
  let count = 0
  count = arr.filter(face => valid.includes(face)).length
  return count
  }

  function helloWorld(){
    var str = 'Hello World!'
    console.log(str)
  }

// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// Good luck :)

  function unusualFive(){
    return 'mario'.length
  }

decodeMorse = function(morseCode){
  //your code here
  let code = morseCode.split('   ')
  let str = ''
  code.forEach(word => {
    str += word.split(' ').map(char => MORSE_CODE[char]).join('')
    str += ' '
  })
  return str.trim()
}




function isPrime(num) {
  //TODO
  if(num < 2){
    return false
  }
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0){
      return false
    }
  }
  return num > 1
}


function longestConsec(strarr, k) {
  // your code
if(strarr.length === 0 || k > strarr.length || k <= 0){
  return ''
}

let consec = strarr.map((word,i,a)=>{
  let arr = [word]
  for(let j = 1; j < k; j++){
  if(a[i+j]){
    arr.push(a[i+j])
  }
}
return arr.join('')
})

let longest = 0
consec.forEach(word => {
  if(word.length > longest){
    longest = word.length
  }
})

return consec.find(word => word.length === longest)

}


function high(x){
  
  let hash = {}
  
  x.split(' ').forEach(word => {
    
    word.split('').forEach(letter => {
      if(hash[word]){
        hash[word] += letter.charCodeAt(0) - 96
      } else{
        hash[word] = letter.charCodeAt(0) - 96
      }
    })
  })

  let highscore = 0

  for(let key in hash){
    if(hash[key] > highscore){
      highscore = hash[key]
    }
  }

  let highest = []

  for(let key in hash){
  if(hash[key] === highscore){
    highest.push(key)
  }
  }
  
  return highest[0]
}


function findOddNames(list) {
  // thank you for checking out the Coding Meetup kata :)
  let answer = []
  list.forEach(dev => {
    let name = dev.firstName.split('').reduce((a,c) => a + c.charCodeAt(0), 0)
    if(name % 2 !== 0){
      answer.push(dev)
    }
  })
  
  return answer
}



function towerBuilder(nFloors) {
  // build here
  let x = 1
  for(let i = 0; i < nFloors - 1; i++){
    x+=2
  }
  
  let tower = []
  let ast = '*'
  
  while(tower.length < nFloors){
    tower.push(ast)
    ast+= '*'
    ast+= '*'
  }

 tower = tower.map(floor => floor.split(''))

 for(let i = 0; i < tower.length; i++){
  while(tower[i].length < x){
    tower[i].unshift(' ')
    tower[i].push(' ')
  }
}
return tower.map(floor => floor.join(''))
}


function take(arr, n) {
  // Your code here
  return arr.slice(0,n)
}


function sumDigPow(a, b) {
  // Your code here
  let list = []
  for(let i = a; i <= b; i++){
    list.push(i)
  }
  list = list.map(num => {
    let x = 0
    let check = num.toString().split('').map(el => {
      x++
      return Number(el)**x
    }).reduce((a,b) => a + b, 0)
    if(check === num){
      return num
    } else return ''
      
    })
  
  return list.filter(Number)
}

function count (string) {  
  // The function code should be here
  let hash = {}
  string.split('').forEach(char => {
    if(hash[char]){
      hash[char] += 1
    } else{
      hash[char] = 1
    }
  })
   return hash
}

function solution(string) {
  let caps = []
  string.split('').forEach((el,i,a) => {
    if(el === el.toUpperCase()){
      caps.push(i)
    }
  })
string = string.split('')
for(let i = 0; i < caps.length; i++){
  string[caps[i] - 1] += ' '
}
return string.join('')
}

function wave(str){
  // Code here
  let wave = []
  for(let i = 0; i < str.length; i++){
    if(str[i] !== ' '){
      let crowd = str.split('').map((el,j,a) => {
        if(j === i){
          return el.toUpperCase() 
        }return el
      })
      wave.push(crowd.join(''))
    }
  }
  return wave
}

function toWeirdCase(string){
  //TODO
  let words = string.split(' ')
  words = words.map((el) => {
    return el.split('').map((l,i,a) => {
     if(i % 2 === 0){
       return l.toUpperCase()
     }else return l.toLowerCase() 
    }).join('')
  })
  return words.join(' ')
}


// 5 string codewars
// #1 (6kyu)
function titleCase(title, minorWords) {
  title = title.split(' ').map((w,i,a) =>{
    return w.slice(0,1).toUpperCase() + w.slice(1).toLowerCase()
  })

  if(minorWords){
    minorWords = minorWords.split(' ').map((w,i,a) =>{
    return w.slice(0,1).toUpperCase() + w.slice(1).toLowerCase()
      })
    title = title.map((w,i,a) => {
      if(minorWords.includes(w)){
        return w.toLowerCase()
      }else return w
    })
  }
  
  return title.map((w,i,a) => {
    if(i === 0){
      return w.slice(0,1).toUpperCase() + w.slice(1)
    } else return w
  }).join(' ')

}

// #2 (5kyu)
function anagrams(word, words) {
  let anagram = []
  words.forEach((w,i,a) => {
    if(w.split('').sort().join('') === word.split('').sort().join('')){
      anagram.push(w)
    }
  })
  
  return anagram
}

// #3 (6kyu)

function inArray(array1,array2){
  //...
  let r = []
  array2.forEach((w) => {
    array1.forEach(el => {
      if(w.includes(el)){
        r.push(el)
      }
    })
  })
  r = new Set(r)
  return Array.from(r).sort()
}

// #4 (6ku)
function generateHashtag (str) {
  
  if(str.length === 0){
    return false
  }
  
  let result = '#' + str.split(' ').map((w) => {
    return w.slice(0,1).toUpperCase() + w.slice(1).toLowerCase()
  }).join('')
  
  if(result.length > 140 || result.length <= 1){
    return false
  }
  
  return result
}

// #5 (5kyu)

function firstNonRepeatingLetter(s) {
  // Add your code here
  let lowS = s.toLowerCase()
  let index
  
  if(lowS.split('').every(el => el === s[0].toLowerCase()) && lowS.length > 1){
    return ''
  }
  if(s.length === 0){
    return ''
  }
  
  for(let i = 0; i < lowS.length; i++){
    if(lowS.indexOf(lowS[i]) === lowS.lastIndexOf(lowS[i])){
      index = i
      i = lowS.length
    }
  }
  if(index === undefined){
    return ''
  }
  return s[index]
}

// or

function firstNonRepeatingLetter(s) {
  // Add your code here
  let x = s.toLowerCase()
  for(let i = 0; i < x.length; i++){
    if(x.indexOf(x[i]) === x.lastIndexOf(x[i])){
      return s[i]
    }
  }
  
  return ''
}

String.prototype.camelCase=function(){
  //your code here
  return this.split(' ').map((w,i,a) => {
    return w.split('').map((el,j,arr) => {
      if(j === 0){
        return el.toUpperCase()
      } else{
        return el.toLowerCase()
      }
    }).join('')
  }).join('')
}

function digitize(n) {
  return n.toString().split('').map(Number)
  }

function capMe(names) {
  return names.map(el => el.slice(0,1).toUpperCase() + el.slice(1).toLowerCase())
  }

  function hasUniqueChars(str){
    // ...
    return str.split('').every((char,i,a) => a.indexOf(char) === a.lastIndexOf(char))
  }

  function searchNames( logins ){
    return logins.filter((arr,i,a) => arr[0].slice(-1) === '_')
  }

  function isLockNessMonster(s) {
    //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
    if(s.includes('tree fiddy') || s.includes('three fifty') || s.includes('3.50')){
       return true
       } else return false
  
  }

  function cleanString(s) {
    // 	... your code ...
      if(s.split('').every(char => char === '#')) return ''
      let hashes = s.split('').filter(el => el === '#').length
      for(let i = 0; i < hashes; i++){
        let x = s.indexOf('#')
        s = s.split('')
        s[x - 1] = ''
        s[x] = ''
        s = s.join('')
      }
      
    return s
      
    };

function broken(x){
  return x.split('').map(el => el === '1' ? '0' : '1').join('')
  }

function apple(x){
  return x**2 > 1000 ? `It's hotter than the sun!!` : `Help yourself to a honeycomb Yorkie for the glovebox.`
  }
function catMouse(x){
  let jump = x.slice(1,-1).length
  // console.log(jump)
  return jump > 3 ? 'Escaped!' : 'Caught!'
  }

function sabb(s, val, happiness){
  let total = val + happiness
  s.split('').forEach(l => {
    l.toLowerCase()
    if('sabbatical'.includes(l)){
      total += 1
    }
  })
  return total > 22 ?  `Sabbatical! Boom!` : `Back to your desk, boy.`
  }

function hist(s) {
  // your code
  let hash = {}
  
  s.split('').forEach(l => {
    if(l === 'u' || l === 'w' || l === 'x' || l === 'z'){
      if(hash[l]){
        hash[l] += 1
      } else hash[l] = 1
    }
  })
  
  let output = []
  
  for(const key in hash){
    hash[key] = `${key}  ${hash[key]}     ${'*'.repeat(hash[key])}\r`
    output.push(hash[key])
  }
  return output.sort().join('').slice(0,-1)
}


// 5 array kata

//#1 (7kyu)
function paul(x){
  let misery = 0
  x.forEach(el => {
    if(el === 'eating') misery++
    if(el === 'kata') misery += 5
    if(el === 'Petes kata') misery += 10
  })
  if(misery > 100) return 'Miserable!'
  if(misery >= 70) return 'Sad!'
  if(misery >= 40) return 'Happy!'
  return 'Super happy!'
}

// #2 (7ku)
function smallEnough(a, limit){
  return a.every(el => el <= limit)

}
// #3 (7kyu)
function evenLast(numbers) {
  // Good luck
  if(numbers.length === 0){
    return 0
  }
  let evens = []
  numbers.forEach((el,i,a) => {
    if(i % 2 === 0){
      evens.push(el)
    }
  })
  return evens.reduce((a,c) => a + c, 0) * numbers[numbers.length - 1]
}

// #4 (7ku)

function meeting(x){
  if(x.every(r => r === 'X')){
    return 'None available!'
  }
  
  return x.indexOf('O')

}

// #5 (6kyu)

function twoSum(numbers, target) {
  // ...
  let x = 0
  let y = 0
  numbers.forEach((num,i,a) => {
    for(let j = 0; j < a.length; j++){
      if(j !== i){
        if(num + a[j] === target){
          x = i
          y = j
        }
      }
    }
  })
  
  return [x,y]
  
}


function queueTime(customers, n) {
   if(customers.length === 0){
    return 0
  }
  if(customers.length <= n){
    return Math.max(...customers)
  }
 
  let tills = {}
  for(let i = 1; i <= n; i++){
     tills[i] = 0
  }

  let j = 1
  for(let i = 0; i < customers.length; i++){
    let x = Object.entries(tills).sort(([ ,v1], [ ,v2]) => v1 - v2)    
    tills[x[0][0]] += customers[i]
  }
  let y = Object.entries(tills).sort(([ ,v1], [ ,v2]) => v2 - v1)
  return y[0][1]
}



// Array.prototype.square = function(){
//   return this.map(num => num**2)
//   }

// Array.prototype.cube = function(){
//   return this.map(num => num**3)
//   }
// Array.prototype.sum = function(){
//   return this.reduce((a,c) => a + c,0)
//   }
// Array.prototype.average = function(){
//   let length = this.length
//   let total = this.reduce((a,c) => a + c,0)
//   return total / length
//   }
// Array.prototype.even = function(){
//   return this.map(el => {
//     if(el%2===0) return el
//     else return ''
//   }).filter(el => el !== '')
//   }
// Array.prototype.odd = function(){
//   return this.map(el => {
//     if(el%2!==0) return el
//     else return ''
//   }).filter(el => el !== '')
//   }

function superSize(num){
  return Number(num.toString().split('').sort((a,b) => b - a).join(''))
}

