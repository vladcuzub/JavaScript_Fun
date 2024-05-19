const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// if(randomNumber > 0.7){
//     alert('Greater then 0.7')
//     console.log(randomNumber)
// } else {
//     alert(' Not greater ')
// }

const array = [1, 2, 3, 4, 5, 6];


// First way
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// Second Way
for (const number of array) {
    console.log(number)
}

// Thirt way

let counter = 0;
while (counter < array.length) {
    console.log(array[counter]);
    counter++;
}


//for loops backwords
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i])
}


const randomNumber2 = Math.random();

if ((randomNumber > 0.7 && randomNumber2 > 0.7) || randomNumber2 <= 0.2 || randomNumber <= 0.2) {
    console.log('Greater then 0.7')
}