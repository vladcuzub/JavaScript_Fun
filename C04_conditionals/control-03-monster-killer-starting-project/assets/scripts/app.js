const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 10;
const HEAL_VALUE = 20;
const ATTACK_MODE = 'Attack';
const STRONG_MODE_ATTACK = 'Strong Attack';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';


const enteredNumber = prompt('Maximum of life for you and the monster', '100'); // Life input
let chosenMaxLife = parseInt(enteredNumber);
let battleLog = []; // store all Logs


if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let isBonusLife = true;

adjustHealthBars(chosenMaxLife);
// Life input

// ======= Write to log ===========
function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry;

    switch (ev) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                target: 'MONSTER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealh: playerHealth
            };
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                target: 'MONSTER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealh: playerHealth
            };
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                target: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealh: playerHealth
            };
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry = {
                event: ev,
                value: val,
                target: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealh: playerHealth
            };
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry = {
                event: ev,
                value: val,
                finalMonsterHealth: monsterHealth,
                finalPlayerHealh: playerHealth
            };
            break;
            default : {}
    }


    // if (ev === LOG_EVENT_PLAYER_ATTACK) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'MONSTER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealh: playerHealth
    //     };
    // } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'MONSTER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealh: playerHealth
    //     };
    // } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'PLAYER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealh: playerHealth
    //     };
    // } else if (ev === LOG_EVENT_PLAYER_HEAL) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'PLAYER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealh: playerHealth
    //     };
    // } else if (ev === LOG_EVENT_GAME_OVER) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealh: playerHealth
    //     };
    // }
    battleLog.push(logEntry)

}


//================= Reset Game ==================
function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife)
}
//================= Reset Game ==================


//=======================  Logic game ============================
function endRound() {
    const initialPlayerHealth = currentPlayerHealth
    const playerDamge = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamge;

    writeToLog(
        LOG_EVENT_MONSTER_ATTACK,
        playerDamge,
        currentMonsterHealth,
        currentPlayerHealth);

    if (currentPlayerHealth <= 0 && isBonusLife) {
        isBonusLife = false
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You would be dead but bonus life saved you')
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Won!');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'PLAYER WON',
            currentMonsterHealth,
            currentPlayerHealth);

    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You Lost!');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'MONSTER WON',
            currentMonsterHealth,
            currentPlayerHealth);

    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('It is draw !');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'DRAW',
            currentMonsterHealth,
            currentPlayerHealth);
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
    let maxDamage = attackMode === ATTACK_MODE ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    let logEvent = attackMode === ATTACK_MODE ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;

    // if (attackMode === ATTACK_MODE) {
    //     logEvent = LOG_EVENT_PLAYER_ATTACK;
    //     maxDamage = ATTACK_VALUE;
    // } else if (attackMode === STRONG_MODE_ATTACK) {
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    //     maxDamage = STRONG_ATTACK_VALUE;
    // }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(
        logEvent,
        damage,
        currentMonsterHealth,
        currentPlayerHealth);
    endRound();

}

function attackHandler() {
    attackMonster(ATTACK_MODE);
}

function strongAttackHandler() {
    attackMonster(STRONG_MODE_ATTACK);
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
    writeToLog(
        LOG_EVENT_PLAYER_HEAL,
        healtValue,
        currentMonsterHealth,
        currentPlayerHealth);
    endRound();
}

function printLogEntry() {
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogEntry);
