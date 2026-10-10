console.log('JS Loaded');

//Click on Bat button
document.querySelector('#Bat').onclick = () => {
  let userMove = 'Bat';
  let computerChoice = computerMove();
  displayWinner(userMove, computerChoice);
};


//Ball
document.querySelector('#Ball').onclick = () => {
  let userMove = 'Ball';
  let computerChoice = computerMove();
  displayWinner(userMove, computerChoice);
};


//Stump
document.querySelector('#Stump').onclick = () => {
  let userMove = 'Stump';
  let computerChoice = computerMove();
  displayWinner(userMove, computerChoice);
};


//function 1
function computerMove() {
  let randomNum = (Math.random()*3);
  if(randomNum<1){
    return 'Bat';
  }else if(randomNum<2){
    return 'Ball';
  }else if(randomNum<3){
    return 'Stump';
  }
}

//function 2
function displayWinner(computerMove, userMove){
  if(userMove == 'Bat' && computerMove == 'Bat'){
    alert("TIE! You chose BAT and Computer also chose BAT");
  } else if(userMove == 'Bat' && computerMove == 'Ball'){
    alert("You Won! You chose BAT and Computer chose BALL");
  } else if(userMove == 'Bat' && computerMove == 'Stump'){
    alert("Computer WON! You chose BAT and Computer chose STUMP");
  } else if(userMove == 'Ball' && computerMove == 'Bat'){
    alert("Computer WON! You chose Ball and Computer chose Bat");
  } else if(userMove == 'Ball' && computerMove == 'Ball'){
    alert("Tie! You chose BALL and Computer also chose BALL");
  } else if(userMove == 'Ball' && computerMove == 'Stump'){
    alert("Computer WON! You chose BALL and Computer chose STUMP");
  } else if(userMove == 'Stump' && computerMove == 'Ball'){
    alert("Computer WON! You chose Stump and Computer chose Ball");
  } else if(userMove == 'Stump' && computerMove == 'Bat'){
    alert("You WON! You chose STUMP and Computer chose BAT");
  } else if(userMove == 'Stump' && computerMove == 'Stump'){
    alert("TIE! You chose Stump and Computer chose STUMP");
  } else{
    return 'Invalid';
  }
}
