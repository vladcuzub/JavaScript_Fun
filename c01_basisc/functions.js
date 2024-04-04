/*For this exercise, you should create two new functions:
A double function that takes a single value and returns the doubled value(e.g., returns 4 for input 2)
A transform function that takes two inputs:
A number as a first argument
Another function (!) as the second argument
For the function that should be passed to transform, the goal is to call that received function inside of transform and pass the number argument into it.The result produced by calling that received function (b) with the received number(a) inside of transform should then be returned by transform.
    I.e., transform should be callable like this:
transform(10, double);
And this should return 20 as a value(because double should be executed inside of transform and receive 10 as an input there). */

function double(number) {
    return number * 2
}

function transform(number, double) {
    return double(number)
}

console.log(transform(10, double))

// -----------------------------

function greet() {
    console.log('Hello')
}

function greetUser(name) {
    console.log(name)
}

greet()
greetUser('Vlad')

function threeParam(first, second, thirt) {
    console.log(first, second, thirt)
}
threeParam('Vlad', 'Cuzub', 'Alex')