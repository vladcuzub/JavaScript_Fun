const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 10;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentUserHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;

    const playerDamge = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentUserHealth -= playerDamge

    if(currentMonsterHealth <= 0){
        alert('You Won!')
    } else if (currentUserHealth <= 0){
        alert('You Lost!')
    }
}

function strongAttackHandler () {
    const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
    currentMonsterHealth -= damage;

    const playerDamge = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentUserHealth -= playerDamge

    if (currentMonsterHealth <= 0) {
        alert('You Won!')
    } else if (currentUserHealth <= 0) {
        alert('You Lost!')
    }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);