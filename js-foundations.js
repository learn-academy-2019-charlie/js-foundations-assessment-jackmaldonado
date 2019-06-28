// Javascript Foundations Assessments
// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
//
var divByThree = function (num){
  if((num % 3) === 0){
    return `${num} is divisible by three`
  }else{
    return `${num} is not divisible by three`
  }
}

console.log(divByThree(10))
// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
const helloMe = {
  first_name: "Jack",
  last_name: "Maldonado",
  favSport: "Basketball",
  favFood: "Steak",
  getInfo: function(){
    return `Hello I am ${this.first_name} ${this.last_name}, my favorite sport to watch is ${this.favSport} and I love ${this.favFood}`
  }
}

console.log(helloMe.getInfo())
// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

var grocerys = ["steak","eggs","chicken","fish","guac"]

function shopping(arr){
  return grocerys[0] + ", " + grocerys[Math.floor(grocerys.length/2)] + ", " + grocerys[grocerys.length - 1]

}
console.log(shopping(grocerys))

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
function alphabetSoup(str){
  return str.split('').sort().join('');
}
console.log(alphabetSoup("learn"))


// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]


function animalNums(nums,nouns){
  for(i = 0; i < Math.min(nums.length,nouns.length); i++){
    console.log(nums[i] + " " + nouns[i])
  }
}
animalNums(nums,nouns)
// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

var numbers = [1,2,3,4,5]

function multFive(numbers){
  var answer = []
  for(i = 0; i < numbers.length; i++){
    answer.push(numbers[i] * 5)
  }
  return answer
}

// function multFive(numbers){
//   var answer = []
//   numbers.forEach(element => {
//     answer.push(element * 5)
//   });
//   return answer
// }

console.log(multFive(numbers))
