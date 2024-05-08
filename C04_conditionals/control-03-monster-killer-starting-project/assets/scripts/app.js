const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 10;
const HEAL_VALUE = 20;

const enteredNumber = prompt('Maximum of life for you and the monster','100');
let chosenMaxLife = parseInt.enteredNumber;

if(isNaN(chosenMaxLife) || chosenMaxLife <= 0){
    chosenMaxLife = 100
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let isBonusLife = true;

adjustHealthBars(chosenMaxLife);


//================= Reset Game ==================

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife)
}
//================= Reset Game ==================


//=======================  Logic game ============================
function endRound() {
    const playerDamge = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamge;

    if (currentPlayerHealth <= 0 && isBonusLife) {
        isBonusLife = false
        removeBonusLife();
        currentPlayerHealth = increasePlayerHealth
        setPlayerHealth(initialPlayerHealth)
        alert('You would be dead but bonus life saved you')
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You Lost!');
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('It is draw !');
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0 ||
        currentPlayerHealth <= 0 && currentMonsterHealth > 0 ||
        currentMonsterHealth <= 0 && currentPlayerHealth <= 0
    ) {
        reset()
    }

}
//=======================  Logic game ============================


function attackMonster(attackMode) {
    let maxDamage;

    if (attackMode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (attackMode === 'STRONG ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG ATTACK');
}

function healPlayerHandler() {
    let healtValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max initial health ")
        healtValue = chosenMaxLife - currentPlayerHealth
    } else {
        healtValue = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE;
    endRound();
}


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler)