// this function is the whole game
const game = () => {
  // here I put stuff I need multiple times.
  let pScore = 0; 
  let cScore = 0;

  // this is the "start game"- function, it just fades the pages, 
  // I make it its own constant because I'll only use it once.
  const startGame = () => {
    const playBtn = document.querySelector('.startOptions');
    const startScreen = document.querySelector('.startPage');
    const gameScreen = document.querySelector('.gamePage');
    const gameOptions = document.querySelector('.gameOptions')
    
    // every time you click on the startPage button the following events will run
    playBtn.addEventListener('click', () => {
      playBtn.classList.add('fadeOut')
      startScreen.classList.add('fadeOut');
      gameScreen.classList.add('fadeIn');
      gameOptions.classList.add('fadeIn');
    });
  };

  // play match function
  const playGame = () => {

    // we need to give the player their options for buttons
    const gameOptions = document.querySelectorAll('.gameOptions button');

    // now we're getting the player their images
    const playerHand = document.querySelector('.playerHand');
    const computerHand = document.querySelector('.computerHand');
    
    // now we're getting the computer's options and for this we are
    // actually generating a random number between 1-3 that we will then
    // associate to an image (rock, paper or scissors)
    const computerOptions = ['rock', 'paper', 'scissors']; // <--- Array with three string options

    // we only want things to run after we click on one of the buttons, so let's bring them in
    computerOptions.forEach((gameOptions) => {
      option.addEventListener('click', function(){
        
      })
    })

    // this variable will be set equal to a random- funcion
    // the random- function by itself only generate a random number between 0-1
    // therefor we add * 3 to get three options to choose from
    // but the function generates floats which we do not need
    // so if when wrapped in parenthesis and put 'math.floor' at the beginning it will convert to integers
    const computerNumber = Math.floor(Math.random() * 3); // <--- Function that generates a random number between 1-3
    
  }

  // this calls/executes the inner functions 
  //(needs to be commented out while running Cypress)
  startGame();
  updateScore();
  playMatch();

};

// starts/executes the game function 
//(needs to be commented out while running Cypress)
game();