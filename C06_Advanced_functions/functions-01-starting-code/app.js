const startGameBtn = document.getElementById('start-game-btn');

function startGame(){
console.log('Game is starting...!')
}



const person = {
    name: 'Max',               //  <======   this is a propety from a object
    greet: function greet(){      //  <======   a function stored in a object is called METHOD
        console.log('Hello Max!')
    }
}

person.greet();


startGameBtn.addEventListener('click',startGame)