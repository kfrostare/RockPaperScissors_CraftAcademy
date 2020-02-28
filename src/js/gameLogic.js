// this function is the whole game
const game = () => {
  // here I put stuff I need multiple times.
  let pScore = 0; 
  let cScore = 0;

  // this is the "start game"- function, it just fades the pages, 
  // I make it its own constant because I'll only use it once.
  const startGame = () => {
    const playBtn = document.querySelector('.startPage button');
    const startScreen = document.querySelector('.startPage');
    const gameScreen = document.querySelector('.gamePage');
    
    // every time you click on the startPage button the following events will run
    playBtn.addEventListener('click', () => {
      startScreen.classList.add('fadeOut'); // when somebody clicks a button on the start page we want to fade the game out
    });
  };

  // this calls/executes the inner functions
  startGame();
  updateScore();


};

// starts/executes the game function
game();