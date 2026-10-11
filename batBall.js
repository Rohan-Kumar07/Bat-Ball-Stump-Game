console.log('JS Loaded');

//Bat
document.querySelector('#Bat').onclick = () => {
  let userMove = 'Bat';
  console.log(userMove);
  let computerChoice = computerMove();
  console.log(computerChoice);
  displayWinner(userMove, computerChoice);
};


//Ball
document.querySelector('#Ball').onclick = () => {
  let userMove = 'Ball';
  console.log(userMove);
  let computerChoice = computerMove();
  console.log(computerChoice);
  displayWinner(userMove, computerChoice);
};


//Stump
document.querySelector('#Stump').onclick = () => {
  let userMove = 'Stump';
  console.log(userMove);
  let computerChoice = computerMove();
  console.log(computerChoice);
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
function displayWinner(userMove, computerChoice){
  if(userMove === 'Bat' && computerChoice === 'Bat'){
    alert("TIE! You chose BAT and Computer also chose BAT");
    console.log("1");
  } else if(userMove === 'Bat' && computerChoice === 'Ball'){
    console.log("2");
    alert("You Won! You chose BAT and Computer chose BALL");
  } else if(userMove === 'Bat' && computerChoice === 'Stump'){
    console.log("3");
    alert("Computer WON! You chose BAT and Computer chose STUMP");
  } else if(userMove == 'Ball' && computerChoice == 'Bat'){
    alert("Computer WON! You chose Ball and Computer chose Bat");
  } else if(userMove == 'Ball' && computerChoice == 'Ball'){
    alert("Tie! You chose BALL and Computer also chose BALL");
  } else if(userMove == 'Ball' && computerChoice == 'Stump'){
    alert("Computer WON! You chose BALL and Computer chose STUMP");
  } else if(userMove == 'Stump' && computerChoice == 'Ball'){
    alert("Computer WON! You chose Stump and Computer chose Ball");
  } else if(userMove == 'Stump' && computerChoice == 'Bat'){
    alert("You WON! You chose STUMP and Computer chose BAT");
  } else if(userMove == 'Stump' && computerChoice == 'Stump'){
    alert("TIE! You chose Stump and Computer chose STUMP");
  } else{
    return 'Invalid';
  }
}