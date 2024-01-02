//Write a function that takes an array of numbers and returns the sum of all the elements.
function sumArray(arr) {
    // Your code here
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
  }
  console.log(sumArray())

//Write a function that takes an array of numbers and returns an object with the maximum and minimum numbers.
function findMaxAndMin(arr) {
    // Your code here
    if(arr.length === 0){
        return null
    }
    let max = arr[0]
    let min = arr[0]

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        else if(arr[i] < min){
            min = arr[i]
        }
    }
    return {
        max: max,
        min: min
    }
  }
  console.log(findMaxAndMin())

//Write a function that takes an array and returns a new array with only the unique elements.
function removeDuplicates(arr) {
    // Your code here
return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
})
  }
  console.log(removeDuplicates())

//Write a function that reverses the elements of an array without using the built-in reverse method.
function reverseArray(arr) {
    // Your code here
    for(let i = 0; i < Math.floor(arr.length / 2); i++){
        const temp = arr[i]
        arr[i] = arr[arr.length - 1- i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
  }
  console.log(reverseArray())

//Write a function that takes an array of numbers and returns a new array with only the even numbers.
function filterEvenNumbers(arr) {
    // Your code here
    return arr.filter(number => number % 2 === 0)
  }
console.log(filterEvenNumbers())

//Write a function that takes an array and an element, and returns the index of the element in the array. If the element is not present, return -1.
function indexOfElement(arr, element) {
    // Your code here
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === element){
            return i
        }
    }
    return -1
  }
console.log(indexOfElement())

//Write a function that takes two arrays and concatenates them.
function concatenateArrays(arr1, arr2) {
    // Your code here
    return arr1.concat(arr2)
  }
  console.log(concatenateArrays())

//Write a function that takes a string and returns true if it's a palindrome, false otherwise.
function isPalindrome(str) {
    // Your code here
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    return cleanedStr === cleanedStr.split('').reverse().join('')
  }
  console.log(isPalindrome("A man, a plan, a canal: Panama"))

//Write a function that takes an array of numbers and returns the sum of all even numbers.  
function sumOfEvenNumbers(arr) {
    // Your code here
    return arr.reduce((sum, number) => {
        if(number % 2 === 0){
            return sum + number
        }
        return sum
    }, 0)
}
console.log(sumOfEvenNumbers())

//Write a function that takes two arrays and returns a new array with the common elements.
function findCommonElements(arr1, arr2) {
    // Your code here
    return arr1.filter(element => arr2.includes(element))
  }
  