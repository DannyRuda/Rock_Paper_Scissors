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

function movePlayerChoice(choiceID,choiceElement) {
    switch (choiceID) {
        case 'playerRock' :
            choiceElement.style.left = '380px';
            choiceElement.style.bottom = '180px';
            break;
        case 'playerPaper' :
            choiceElement.style.left = '275px';
            choiceElement.style.bottom = '180px';
            break;
        case 'playerScissors' :
            choiceElement.style.left = '170px';
            choiceElement.style.bottom = '180px';
            break;
        default:
            break;
    };
}

function moveBotChoice(choiceID,choiceElement) {
    switch (choiceID) {
        case 'botScissors' :
            choiceElement.style.left = '-380px';
            choiceElement.style.bottom = '180px';
            break;
        case 'botPaper' :
            choiceElement.style.left = '-275px';
            choiceElement.style.bottom = '180px';
            break;
        case 'botRock' :
            choiceElement.style.left = '-170px';
            choiceElement.style.bottom = '180px';
            break;
        default:
            break;
    };
}

function hideAndDisablePlayerButtons(choiceID, choiceElement) {
    switch (choiceID) {
        case 'playerRock':
            choiceElement.style.pointerEvents = 'none';
            document.querySelector('#playerPaper').style.visibility = 'hidden';
            document.querySelector('#playerScissors').style.visibility = 'hidden';
            break;
        case 'playerPaper':
            choiceElement.style.pointerEvents = 'none';
            document.querySelector('#playerRock').style.visibility = 'hidden';
            document.querySelector('#playerScissors').style.visibility = 'hidden';
            break;
        case 'playerScissors':
            choiceElement.style.pointerEvents = 'none';
            document.querySelector('#playerPaper').style.visibility = 'hidden';
            document.querySelector('#playerRock').style.visibility = 'hidden';
            break;
    };
}

function hideBotButtons(choiceID) {
    switch (choiceID) {
        case 'botRock':
            document.querySelector('#botPaper').style.visibility = 'hidden';
            document.querySelector('#botScissors').style.visibility = 'hidden';
            break;
        case 'botPaper':
            document.querySelector('#botRock').style.visibility = 'hidden';
            document.querySelector('#botScissors').style.visibility = 'hidden';
            break;
        case 'botScissors':
            document.querySelector('#botPaper').style.visibility = 'hidden';
            document.querySelector('#botRock').style.visibility = 'hidden';
            break;
    };
}

function showBotChoice(choiceElement) {
    choiceElement.innerText = botChoice;
}

function expressWinningChoice(winningChoice,loosingChoice) {
    winningChoice.style.backgroundColor = 'green';
    loosingChoice.style.backgroundColor = 'grey';
}

function expressDraw(playerChoiceElement,botChoiceElement) {
    playerChoiceElement.style.backgroundColor = 'grey';
    botChoiceElement.style.backgroundColor = 'grey';
}

function writeResultScreen(phrase,winner) {
    console.log(typeof phrase);
    if (typeof phrase !== 'undefined') {
        document.querySelector('.roundResultPhrase').innerText = phrase;
        document.querySelector('.roundWinner').innerText = `${winner} wins the Round`;
    } else {
        console.log('enters else statement')
        document.querySelector('.roundResultPhrase').innerText = `draws with`;
        document.querySelector('.roundWinner').innerText = 'Draw!';
    }
}

function determineWinner(playerChoiceElement, botChoiceElement) {
    switch (playerChoiceElement.innerText) {
        case 'Rock':
            if (botChoice === 'Paper') {
                expressWinningChoice(botChoiceElement,playerChoiceElement);
                writeResultScreen('gets wraped by','Bot');
                slider.value--;
            } else if (botChoice === 'Scissors') {
                expressWinningChoice(playerChoiceElement,botChoiceElement);
                writeResultScreen('crushes','Player');
                slider.value++;
            } else {
                expressDraw(playerChoiceElement,botChoiceElement);
                writeResultScreen();
            }
            break;
        case 'Paper':
            if (botChoice === 'Rock') {
                expressWinningChoice(playerChoiceElement,botChoiceElement);
                writeResultScreen('wraps','Player');
                slider.value--;
            } else if (botChoice === 'Scissors') {
                expressWinningChoice(botChoiceElement,playerChoiceElement);
                writeResultScreen('gets cut by','Bot');
                slider.value--;
            } else {
                expressDraw(playerChoiceElement,botChoiceElement);
                writeResultScreen();
            }
            break;
        case 'Scissors':
            if (botChoice === 'Paper') {
                expressWinningChoice(playerChoiceElement,botChoiceElement);
                writeResultScreen('cut','Player');
                slider.value--;
            } else if (botChoice === 'Rock') {
                expressWinningChoice(botChoiceElement,playerChoiceElement);
                writeResultScreen('gets crushed by','Bot');
                slider.value--;
            } else {
                expressDraw(playerChoiceElement,botChoiceElement);
                writeResultScreen();
            }
            break;
    }
}

function hideBattleText() {
    document.getElementById('currentRound').classList.add('hide');
    document.getElementById('vs').classList.add('hide');
}

function playRound(event) {
    determineBotChoice();
    let playerChoiceID = event.target.id;
    let playerChoiceElement = event.target;
    let botChoiceID = `bot${botChoice}`;
    let botChoiceElement = document.getElementById(botChoiceID);
    hideAndDisablePlayerButtons(playerChoiceID,playerChoiceElement);
    hideBotButtons(botChoiceID);
    movePlayerChoice(playerChoiceID, playerChoiceElement);
    moveBotChoice(botChoiceID,botChoiceElement);
    window.setTimeout(showBotChoice,2000,botChoiceElement);
    window.setTimeout(determineWinner , 2000 , playerChoiceElement , botChoiceElement);
    window.setTimeout(hideBattleText , 2000);
    window.setTimeout(showRoundResult , 2000);
}

let buttonRock = document.getElementById('playerRock');
let buttonPaper = document.getElementById('playerPaper');
let buttonScissors = document.getElementById('playerScissors');

buttonRock.addEventListener('click',playRound);
buttonPaper.addEventListener('click',playRound);
buttonScissors.addEventListener('click',playRound);

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
