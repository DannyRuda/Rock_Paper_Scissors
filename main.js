let button = document.getElementById('playerRock');
let slider = document.getElementById('progress');

function increaseSliderValue() {
    slider.value++;
}


let buttonStart = document.getElementById('startButton');

function showBattleScreen() {
    let battleElements = document.getElementsByClassName('battleScreen');
    Array.from(battleElements).forEach(element=>{
        element.classList.remove('hide')
        window.setTimeout(function(){
            element.style.opacity = 1;
            element.style.transform = 'scale(1)';
        },200)
    });
}

function hideStartScreen() {
    let startSection = document.querySelector('section');
    startSection.style.opacity = 0;
    startSection.style.transform = 'scale(0)';
    window.setTimeout(function(){
        startSection.classList.add('hide');
    },200);
}

buttonStart.addEventListener('click',showBattleScreen);
buttonStart.addEventListener('click',hideStartScreen);

const botChoices = ['Rock','Paper','Scissors'];
let botChoice = '';
function determineBotChoice() {
    botChoice = botChoices[Math.floor(Math.random()*3)];
};

function movePlayerChoice(choiceID) {
    let choice = document.querySelector(`#${choiceID}`);
    switch (choiceID) {
        case 'playerRock' :
            choice.style.left = '380px';
            choice.style.bottom = '180px';
            break;
        case 'playerPaper' :
            choice.style.left = '275px';
            choice.style.bottom = '180px';
            break;
        case 'playerScissors' :
            choice.style.left = '170px';
            choice.style.bottom = '180px';
            break;
        default:
            break;
    };
}

function moveBotChoice(choiceID) {
    let choice = document.querySelector(`#${choiceID}`);
    switch (choiceID) {
        case 'botScissors' :
            choice.style.left = '-380px';
            choice.style.bottom = '180px';
            break;
        case 'botPaper' :
            choice.style.left = '-275px';
            choice.style.bottom = '180px';
            break;
        case 'botRock' :
            choice.style.left = '-170px';
            choice.style.bottom = '180px';
            break;
        default:
            break;
    };
}

function hideAndDisablePlayerButtons(choiceID) {
    let choice = document.querySelector(`#${choiceID}`);
    switch (choiceID) {
        case 'playerRock':
            choice.style.pointerEvents = 'none';
            document.querySelector('#playerPaper').classList.add('hide');
            document.querySelector('#playerScissors').classList.add('hide');
            break;
        case 'playerPaper':
            choice.style.pointerEvents = 'none';
            document.querySelector('#playerRock').classList.add('hide');
            document.querySelector('#playerScissors').classList.add('hide');
            break;
        case 'playerScissors':
            choice.style.pointerEvents = 'none';
            document.querySelector('#playerPaper').classList.add('hide');
            document.querySelector('#playerRock').classList.add('hide');
            break;
    };
}

function hideBotButtons(choiceID) {
    switch (choiceID) {
        case 'botRock':
            document.querySelector('#botPaper').classList.add('hide');
            document.querySelector('#botScissors').classList.add('hide');
            break;
        case 'botPaper':
            document.querySelector('#botRock').classList.add('hide');
            document.querySelector('#botScissors').classList.add('hide');
            break;
        case 'botScissors':
            document.querySelector('#botPaper').classList.add('hide');
            document.querySelector('#botRock').classList.add('hide');
            break;
    };
}

function playRound(event) {
    determineBotChoice();
    let playerChoiceID = event.target.id;
    hideAndDisablePlayerButtons(playerChoiceID);
    hideBotButtons(`bot${botChoice}`);
    movePlayerChoice(playerChoiceID);
    moveBotChoice(`bot${botChoice}`);
}

let buttonRock = document.getElementById('playerRock');
let buttonPaper = document.getElementById('playerPaper');
let buttonScissors = document.getElementById('playerScissors');

buttonRock.addEventListener('click',playRound);

function showRoundResult() {
    let roundResultScreen = document.querySelector('.roundResultScreen');
    roundResultScreen.classList.remove('hide');
    window.setTimeout(function(){
        roundResultScreen.style.opacity = 1;
        roundResultScreen.style.transform = 'scale(1)';
    },0);
}

/*
button.addEventListener('click',showRoundResult);
*/
