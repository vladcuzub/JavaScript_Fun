const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 10;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
    const playerDamge = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamge;

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You Lost!');
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('It is draw !');
    }
}

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
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert("You can't heal to more than your max initial health ")
        healtValue = chosenMaxLife -currentPlayerHealth
    } else {
        healtValue = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE ;
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler)