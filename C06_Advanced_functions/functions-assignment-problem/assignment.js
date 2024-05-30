/* Re-write the function you find in <code>assignment.js</code> as an arrow
function*/

const sayHello = name => console.log('Hi ' + name);
sayHello('Vlad');



/*   Adjust the arrow function you created as part of task 1 to use three
        different syntaxes: With two arguments (incl. a phrase that replaces "Hi"),
        with no arguments (hard-coded values in function body) and with one returned value (instead of outputting
        text inside of the function directly). */
const greeting = (greeting, name) => console.log(greeting + ' ' + name);
greeting('Hello', 'Vlad');

const greeting1 = () => console.log('Hi Vlad');
greeting1();

const greeting2 = name => 'Hi ' + name;
console.log(greeting2('Vlad'));




/*  Add a default argument to the function you created: A fallback value for
        the phrase if no value is provided. */
const greeting3 = (greeting, name = 'Vlad') => console.log('HI' + ' ' + name);
greeting3();




/* Add a new function: "checkInput" which takes an unlimited amount of
        arguments (unlimited amount of strings) and executes a callback function
        if NO argument/ string is an empty string. */
const checkInput = (cb, ...strings) => {
  let hasEmptyText = false;

  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
};

checkInput(() => { console.log('All not empty..!'); }, 'Salut', 'Hello', 'Bonjour', '')

