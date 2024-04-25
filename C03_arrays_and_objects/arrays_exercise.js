/*For this exercise, your task is to push two new numbers onto the existing numbers array: 8 and 2, in that order.

Don't create a new array, don't overwrite the existing array - instead manipulate the existing array as taught earlier in the course. */

let numbers = [10,4,-2]

function addNewNumber(){
    numbers.push(8)
    numbers.push(2)
}

addNewNumber()
console.log(numbers)