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