/*********Глобальные переменые********************************************/
    let playerSelection;
    let computerSelection;
    let arr = ["Rock", "Paper", "Scissors"];
    let element1 = arr[0];
    let element2 = arr[1];
    let element3 = arr[2];
    let winRoundComputer = 0;    
    let winRoundPlayer = 0;   
    const rezultPlayer = document.querySelector('.player_score');
    const rezultComputer = document.querySelector('.computer_score');
    const info_rezult = document.querySelector('.info_rezult');
    const computer_selection = document.querySelector('.computer_selection');
/*********************************************************************/
/************************Выбор рандомного элемента массива*************/
function computerPlay() {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
};
/***************************************************************************/
/************************Раунд игры**********************************/    
function playRound (playerSelection , computerSelection) {   
/***************************Сравнеие элементов************************************/   
    computerSelectionInput = computerSelection;  
    if (playerSelection == element1) {
        if (computerSelectionInput == element1) { console.log("No Winner")}
        if (computerSelectionInput == element2) { console.log("Computer Win."); 
            winRoundComputer = winRoundComputer + 1 };
        if (computerSelectionInput == element3) { console.log("Winner Player");
            winRoundPlayer = winRoundPlayer + 1 };
    }
    if (playerSelection == element2) {
        if (computerSelectionInput == element2) { console.log("No Winner")}
        if (computerSelectionInput == element3) { console.log("Computer Win."); 
            winRoundComputer = winRoundComputer + 1 };
        if (computerSelectionInput == element1) { console.log("Winner Player");
            winRoundPlayer = winRoundPlayer + 1 };
    }
    if (playerSelection == element3) {
        if (computerSelectionInput == element3) { console.log("No Winner")}
        if (computerSelectionInput == element1) { console.log("Computer Win."); 
            winRoundComputer = winRoundComputer + 1 };
        if (computerSelectionInput == element2) { console.log("Winner Player");
            winRoundPlayer = winRoundPlayer + 1 };
    }
    return;    
};
/*********************************************************************/
/**********************Игра******************************************/
function game(Input) { 
/**************Перевод в нижний регистр с первой заглавной буквой**************/  
        playerInput = Input.toLocaleLowerCase();
        playerSelection = playerInput.replace(playerInput[0], playerInput[0].toLocaleUpperCase()); 
/*****************Какую кнопку нажали*************************************************/
        computerSelection = computerPlay(); 
/***********************Если строка соответствует вариантам*****************************/ 
           if (playerSelection == element1 || playerSelection == element2 || playerSelection == element3) { 
                console.log("Player selection = " + playerSelection);
                console.log("Computer selection = " + computerSelection);      
                playRound(playerSelection, computerSelection);
                computer_selection.textContent = computerSelection;

                rezultPlayer.textContent = winRoundPlayer;
                console.log(winRoundPlayer);

                rezultComputer.textContent = winRoundComputer;
                console.log(winRoundComputer);
           }
/**********************Результат*****************************************/
if (winRoundPlayer == 0 || winRoundComputer == 0) {
    info_rezult.classList.remove('info_rezult_alert');
    info_rezult.textContent = "";
};

if  (winRoundPlayer == 5) {
    console.log("Player Win Game");
    info_rezult.textContent = "Player Win Game " + winRoundPlayer + " : " + winRoundComputer;
    info_rezult.classList.add('info_rezult_alert');
    winRoundPlayer = 0;
    winRoundComputer = 0;
};
if (winRoundComputer == 5) {
    console.log("Computer Win Game");
    info_rezult.textContent = "Computer Win Game " + winRoundComputer + " : " + winRoundPlayer;
    info_rezult.classList.add('info_rezult_alert');
    winRoundPlayer = 0;
    winRoundComputer = 0;
};   
};
/***************************Обработчик событи на div********************************************/
const div_key = document.querySelectorAll('.div_key');
div_key.forEach((div_key) => {
  div_key.addEventListener('click', () => {
    game(div_key.id);
  });
});