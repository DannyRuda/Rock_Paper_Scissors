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
buttonStart.addEventListener('click',()=>{slider.value = 2});

const botChoices = ['Rock','Paper','Scissors'];
let botChoice = '';

function determineBotChoice() {
    botChoice = botChoices[Math.floor(Math.random()*3)];
};

function movePlayerChoice(choiceID,choiceElement) {
    if (getComputedStyle(choiceElement).bottom === '0px') {
        choiceElement.style.transition = 'left 1s ease-in-out, bottom 1s ease-in-out 0.5s';
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
    } else if (roundCounter > 1) {
        choiceElement.style.transition = 'left 1s ease-in-out 0.5s, bottom 1s ease-in-out';
        switch (choiceID) {
            case 'playerRock' :
                choiceElement.style.left = '0';
                choiceElement.style.bottom = '0';
                break;
            case 'playerPaper' :
                choiceElement.style.left = '0';
                choiceElement.style.bottom = '0';
                break;
            case 'playerScissors' :
                choiceElement.style.left = '0';
                choiceElement.style.bottom = '0';
                break;
            default:
                break;
        };
    } else {
        choiceElement.style.transition = 'left 0s, bottom 0s';
        switch (choiceID) {
            case 'playerRock' :
                choiceElement.style.left = '0';
                choiceElement.style.bottom = '0';
                break;
            case 'playerPaper' :
                choiceElement.style.left = '0';
                choiceElement.style.bottom = '0';
                break;
            case 'playerScissors' :
                choiceElement.style.left = '0';
                choiceElement.style.bottom = '0';
                break;
            default:
                break;
        };
    };
}

function moveBotChoice(choiceID,choiceElement) {
    if (getComputedStyle(choiceElement).bottom === '0px') {
        choiceElement.style.transition = 'left 1s ease-in-out, bottom 1s ease-in-out 0.5s';
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
    } else if (roundCounter > 1) {
        choiceElement.style.transition = 'left 1s ease-in-out 0.5s, bottom 1s ease-in-out';
        switch (choiceID) {
            case 'botScissors' :
                choiceElement.style.left = '0';
                choiceElement.style.bottom = '0';
                break;
            case 'botPaper' :
                choiceElement.style.left = '0';
                choiceElement.style.bottom = '0';
                break;
            case 'botRock' :
                choiceElement.style.left = '0';
                choiceElement.style.bottom = '0';
                break;
            default:
                break;
        };
    } else {
        choiceElement.style.transition = 'left 0s, bottom 0s';
        switch (choiceID) {
            case 'botScissors' :
                choiceElement.style.left = '0';
                choiceElement.style.bottom = '0';
                break;
            case 'botPaper' :
                choiceElement.style.left = '0';
                choiceElement.style.bottom = '0';
                break;
            case 'botRock' :
                choiceElement.style.left = '0';
                choiceElement.style.bottom = '0';
                break;
            default:
                break;
        };
    }
}

function togglePlayerButtons(choiceID, choiceElement) {
    if (getComputedStyle(choiceElement).pointerEvents === 'auto') {
        choiceElement.style.pointerEvents = 'none';
        switch (choiceID) {
            case 'playerRock':
                document.querySelector('#playerPaper').style.visibility = 'hidden';
                document.querySelector('#playerScissors').style.visibility = 'hidden';
                break;
            case 'playerPaper':
                document.querySelector('#playerRock').style.visibility = 'hidden';
                document.querySelector('#playerScissors').style.visibility = 'hidden';
                break;
            case 'playerScissors':
                document.querySelector('#playerPaper').style.visibility = 'hidden';
                document.querySelector('#playerRock').style.visibility = 'hidden';
                break;
        };
    } else if (roundCounter > 1) {
        window.setTimeout(()=>{
            choiceElement.style.pointerEvents = 'auto';
            switch (choiceID) {
                case 'playerRock':
                    document.querySelector('#playerPaper').style.visibility = 'visible';
                    document.querySelector('#playerScissors').style.visibility = 'visible';
                    break;
                case 'playerPaper':
                    document.querySelector('#playerRock').style.visibility = 'visible';
                    document.querySelector('#playerScissors').style.visibility = 'visible';
                    break;
                case 'playerScissors':
                    document.querySelector('#playerPaper').style.visibility = 'visible';
                    document.querySelector('#playerRock').style.visibility = 'visible';
                    break;
            }
        },1500);
    } else {
        choiceElement.style.pointerEvents = 'auto';
        switch (choiceID) {
            case 'playerRock':
                document.querySelector('#playerPaper').style.visibility = 'visible';
                document.querySelector('#playerScissors').style.visibility = 'visible';
                break;
            case 'playerPaper':
                document.querySelector('#playerRock').style.visibility = 'visible';
                document.querySelector('#playerScissors').style.visibility = 'visible';
                break;
            case 'playerScissors':
                document.querySelector('#playerPaper').style.visibility = 'visible';
                document.querySelector('#playerRock').style.visibility = 'visible';
                break;
        };
    };
}

function toggleBotButtons(choiceID,choiceElement) {
    if (choiceElement.innerText === '?') {
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
    } else if (roundCounter > 1){
        window.setTimeout(()=>{
            switch (choiceID) {
                case 'botRock':
                    document.querySelector('#botPaper').style.visibility = 'visible';
                    document.querySelector('#botScissors').style.visibility = 'visible';
                    break;
                case 'botPaper':
                    document.querySelector('#botRock').style.visibility = 'visible';
                    document.querySelector('#botScissors').style.visibility = 'visible';
                    break;
                case 'botScissors':
                    document.querySelector('#botPaper').style.visibility = 'visible';
                    document.querySelector('#botRock').style.visibility = 'visible';
                    break;
            };
        },1500);
    } else {
        switch (choiceID) {
            case 'botRock':
                document.querySelector('#botPaper').style.visibility = 'visible';
                document.querySelector('#botScissors').style.visibility = 'visible';
                break;
            case 'botPaper':
                document.querySelector('#botRock').style.visibility = 'visible';
                document.querySelector('#botScissors').style.visibility = 'visible';
                break;
            case 'botScissors':
                document.querySelector('#botPaper').style.visibility = 'visible';
                document.querySelector('#botRock').style.visibility = 'visible';
                break;
        };
    };
}

function toggleBotChoiceText(choiceElement) {
    choiceElement.innerText === '?' ? choiceElement.innerText = botChoice : choiceElement.innerText = '?';
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
    if (typeof phrase !== 'undefined') {
        document.querySelector('.roundResultPhrase').innerText = phrase;
        document.querySelector('.roundWinner').innerText = `${winner} wins the Round`;
    } else {
        document.querySelector('.roundResultPhrase').innerText = `draws with`;
        document.querySelector('.roundWinner').innerText = 'Draw!';
    }
}
let roundCounter = 1;
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
                slider.value++;
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
                slider.value++;
            } else if (botChoice === 'Rock') {
                expressWinningChoice(botChoiceElement,playerChoiceElement);
                writeResultScreen('get crushed by','Bot');
                slider.value--;
            } else {
                expressDraw(playerChoiceElement,botChoiceElement);
                writeResultScreen();
            }
            break;
    }
}

function toggleBattleText() {
    let currentRound = document.getElementById('currentRound');
    let vs = document.getElementById('vs');
    if(!currentRound.classList.toggle('hide')) {
        vs.classList.toggle('hide');
        window.setTimeout(()=>{
            currentRound.style.opacity = '1';
            currentRound.style.transform = 'scale(1)';
            vs.style.opacity = '1';
            vs.style.transform = 'scale(1)';
        },10);
    } else {
        vs.classList.toggle('hide');
        currentRound.style.opacity = '0';
        currentRound.style.transform = 'scale(0)';
        vs.style.opacity = '0';
        vs.style.transform = 'scale(0)';
    };
    currentRound.innerText = `Round ${roundCounter}`;
}

function resetButtons(playerChoiceID,playerChoiceElement,botChoiceID,botChoiceElement) {
    movePlayerChoice(playerChoiceID,playerChoiceElement);
    moveBotChoice(botChoiceID,botChoiceElement);
    togglePlayerButtons(playerChoiceID,playerChoiceElement);
    toggleBotButtons(botChoiceID , botChoiceElement);
    toggleBotChoiceText(botChoiceElement);
    playerChoiceElement.style.backgroundColor = '';
    botChoiceElement.style.backgroundColor = '';
}

let lastPlayerChoiceElement = '';
let lastBotChoiceElement = '';
function playRound(event) {
    let sliderStartValue = slider.value;
    roundCounter++;
    determineBotChoice();
    let playerChoiceID = event.target.id;
    let playerChoiceElement = event.target;
    let botChoiceID = `bot${botChoice}`;
    let botChoiceElement = document.getElementById(botChoiceID);
    lastPlayerChoiceElement = playerChoiceElement;
    lastBotChoiceElement = botChoiceElement;
    togglePlayerButtons(playerChoiceID,playerChoiceElement);
    toggleBotButtons(botChoiceID,botChoiceElement);
    movePlayerChoice(playerChoiceID, playerChoiceElement);
    moveBotChoice(botChoiceID,botChoiceElement);
    window.setTimeout(() => {
        toggleBotChoiceText(botChoiceElement);
        determineWinner(playerChoiceElement,botChoiceElement);
        createAndAddRoundtoHistory(playerChoiceElement,botChoiceElement,sliderStartValue);
        toggleBattleText();
        toggleRoundResult();
        if(slider.value < 4 && slider.value > 0) {
            window.setTimeout(resetButtons,1500,playerChoiceID,playerChoiceElement,botChoiceID,botChoiceElement);
            window.setTimeout(toggleRoundResult , 3000);
            window.setTimeout(toggleBattleText , 3000);
        } else {
            window.setTimeout(() => {
                toggleEndScreen();
                playerChoiceElement.style.visibility = 'hidden';
                botChoiceElement.style.visibility = 'hidden';
                toggleRoundResult();
            },1500);
        }
    }, 2000)
}

function toggleEndScreen() {
    if(slider.value >= 4) {
        document.getElementById('gameWinner').innerText = 'Player wins the Game!';
    } else {
        document.getElementById('gameWinner').innerText = 'Bot wins the Game!';
    };
    document.getElementById('gameResultScreen').classList.toggle('hide')
}

let buttonRock = document.getElementById('playerRock');
let buttonPaper = document.getElementById('playerPaper');
let buttonScissors = document.getElementById('playerScissors');

buttonRock.addEventListener('click',playRound);
buttonPaper.addEventListener('click',playRound);
buttonScissors.addEventListener('click',playRound);

function toggleRoundResult() {
    let roundResultScreen = document.querySelector('.roundResultScreen');
    if (roundResultScreen.classList.contains('hide')) {
        roundResultScreen.classList.toggle('hide');
        window.setTimeout(() => {
            roundResultScreen.style.opacity = 1;
            roundResultScreen.style.transform = 'scale(1)';
        });
    } else {
        roundResultScreen.classList.toggle('hide');
        roundResultScreen.style.opacity = 0;
        roundResultScreen.style.transform = 'scale(0)';
    }
}

function resetGame() {
    roundCounter = 1;
    slider.value = 2;
    resetHistory();
    let playerChoiceElement = lastPlayerChoiceElement;
    let botChoiceElement = lastBotChoiceElement; 
    let playerChoiceID = playerChoiceElement.id;
    let botChoiceID = `bot${botChoice}`;
    botChoiceElement.style.visibility = 'visible';
    resetButtons(playerChoiceID,playerChoiceElement,botChoiceID,botChoiceElement);
    window.setTimeout(() => {
        playerChoiceElement.style.visibility = 'visible';
        botChoiceElement.style.visibility = 'visible';
    },0);
    toggleEndScreen();
    toggleBattleText();
};

let buttonNewGame = document.getElementById('newGame');
buttonNewGame.addEventListener('click',resetGame);


let history = document.querySelector('.history');
function createAndAddRoundtoHistory(playerChoiceElement,botChoiceElement,sliderStartValue) {
    let historyPlayerChoice = document.createElement('li');
    historyPlayerChoice.classList.add('playerHistory');
    historyPlayerChoice.innerText = `${playerChoiceElement.innerText} `;

    let historyBotChoice = document.createElement('li');
    historyBotChoice.classList.add('botHistory');
    historyBotChoice.innerText = botChoiceElement.innerText;

    let listOfChoices = document.createElement('ul');
    listOfChoices.append(historyPlayerChoice,historyBotChoice);

    let choices = document.createElement('div');
    choices.classList.add('choices');
    choices.appendChild(listOfChoices);

    let roundHeader = document.createElement('p');
    roundHeader.innerText = `Round ${roundCounter-1}`;
    
    let historyRoundWinner = document.createElement('p');

    let round = document.createElement('div');
    round.classList.add('round');
    round.append(roundHeader,choices,historyRoundWinner);
    if(sliderStartValue !== slider.value) {
        historyRoundWinner.innerText = slider.value > sliderStartValue ? 'Player Won' : 'Bot Won';
        round.style.borderColor = slider.value > sliderStartValue ? '#3d79fa' : '#e01515';
    } else {
        historyRoundWinner.innerText = 'Draw';
        round.style.borderColor = 'lightgrey';
    }

    history.appendChild(round);
}

function resetHistory() {
    history.textContent = '';
}


function scrollWithWheel(event) {
    history.scrollLeft += event.deltaY;
}

//function gets called by event handler function and executes the in the event handler specified callback function 15 times
function setIntervalX(callback, delay, repetitions) {
    var x = 0;
    history.style.scrollSnapType = 'none';
    history.style.scrollBehavior = 'auto';
    var intervalID = window.setInterval(function () {
       
       callback();
       
       if(x === repetitions-2) {
        history.style.scrollBehavior = 'smooth';
        history.style.scrollSnapType = 'inline mandatory';
       }

       if (++x === repetitions) {
           window.clearInterval(intervalID);
       }
    }, delay);
}

// setIntervalX gets called and each interval sets the scrollLeft value += a portion of the scolled amount. Thats why setIntervalX has to deactivate scrollBehavior and scrollSnaptype
// at the start since otherwhise after each little change of scrollLeft, the scrollsnap would make it snap back to the start position 
history.addEventListener('wheel',(event)=>{
    setIntervalX(()=>{
        document.querySelector('.history').scrollLeft += (event.deltaY)/14;
    },1,15);
});

function scrollWithClickAndDrag(event) {
    if(mouseisdown===true){
        history.scrollLeft -= event.movementX;
    }
}

let mouseisdown
history.addEventListener('mousedown',()=>{
    mouseisdown=true;
    history.style.scrollBehavior = 'auto';
    history.style.scrollSnapType = 'none';
});
history.addEventListener('mouseup',()=>{
    mouseisdown=false;
    history.style.scrollBehavior = 'smooth';
    history.style.scrollSnapType = 'inline mandatory'
})
history.addEventListener('mousemove',scrollWithClickAndDrag);

let buttonAutofillHistory = document.getElementById('autofillHistory');
buttonAutofillHistory.addEventListener('click',()=>{
    let playerArray = ['Rock','Paper','Scissors'];
    let botArray = ['Paper','Rock','Scissors'];
    let savedRoundCounter = roundCounter
    for (let i = 0; i< 20; i++) {
        roundCounter++;
        let randomNumber = Math.floor(Math.random()*3);
        autofillHistory(playerArray,botArray,randomNumber);
    }
    roundCounter = savedRoundCounter;
})

function autofillHistory(playerArray,botArray,randomNumber) {
    let historyPlayerChoice = document.createElement('li');
    historyPlayerChoice.classList.add('playerHistory');
    historyPlayerChoice.innerText = `${playerArray[randomNumber]} `;

    let historyBotChoice = document.createElement('li');
    historyBotChoice.classList.add('botHistory');
    historyBotChoice.innerText = botArray[randomNumber];

    let listOfChoices = document.createElement('ul');
    listOfChoices.append(historyPlayerChoice,historyBotChoice);

    let choices = document.createElement('div');
    choices.classList.add('choices');
    choices.appendChild(listOfChoices);

    let roundHeader = document.createElement('p');
    roundHeader.innerText = `Round ${roundCounter-1}`;
    
    let historyRoundWinner = document.createElement('p');

    let round = document.createElement('div');
    round.classList.add('round');
    round.classList.add('autofilledRounds')
    round.append(roundHeader,choices,historyRoundWinner);
    if(randomNumber > 0) {
        historyRoundWinner.innerText = randomNumber===1 ? 'Player Won' : 'Draw';
        round.style.borderColor = randomNumber===1 ? '#3d79fa' : 'lightgrey';
    } else {
        historyRoundWinner.innerText = 'Bot won';
        round.style.borderColor = '#e01515';
    }

    history.appendChild(round);
}

let buttonDeleteAutofilled = document.getElementById('deleteAutofilledRounds');
buttonDeleteAutofilled.addEventListener('click',deleteAutofilledRounds);
function deleteAutofilledRounds() {
    let filledRounds = document.getElementsByClassName('autofilledRounds');
    while(filledRounds.length > 0) {
        filledRounds[0].parentNode.removeChild(filledRounds[0]);
    }
}