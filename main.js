const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;
const COUNT_COLUMN = 10;
const COUNT_ROW = 10;
const SQUARE_SIZE = width / COUNT_COLUMN;

// Iteration 1
function drawGrid() {
  context.strokeStyle = 'black';
  context.lineWidth = 2;

  for (let j = 0; j < COUNT_ROW; j++) {
    for (let i = 0; i < COUNT_COLUMN; i++) {
      context.rect(i * 50, j * 50, 50, 50);
    }
  }
  context.stroke();
}

// Iteration 2: The Character Class

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.row--;
  }
  moveRight() {
    this.col++;
  }
  moveDown() {
    this.row++;
  }
  moveLeft() {
    this.col--;
  }
}

const player = new Character(0, 0);

//Position started at 0 and this commands are the only way to move the player in the canvas - couldnt make the arrow keys move the player
player.moveDown();
console.log(player.col, player.row);

// Iteration 3
function drawPlayer() {
  const viking = new Image();
  viking.src = 'images/character-down.png';

  viking.addEventListener('load', () => {
    context.drawImage(
      viking,
      player.col * SQUARE_SIZE,
      player.row * SQUARE_SIZE,
      50,
      50
    );
  });
}

// Iteration 4

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  setRandomPosition() {
    let treasurePosX = Math.floor(Math.random() * 10);
    let treasurePosY = Math.floor(Math.random() * 10);

    this.col = treasurePosX;
    this.row = treasurePosY;
  }
}

function drawTreasure() {
  const treasureImage = new Image();
  treasureImage.src = 'images/treasure.png';

  treasureImage.addEventListener('load', () => {
    context.drawImage(
      treasureImage,
      treasure.col * SQUARE_SIZE,
      treasure.row * SQUARE_SIZE,
      50,
      50
    );
  });
}

let treasure = new Treasure(3, 3); // (0,0) = Initial position
treasure.setRandomPosition();

// Iteration 5 - couldn't make the player move through keydown event :(

function drawEverything() {
  context.clearRect(0, 0, width, height);

  window.addEventListener('keydown', event => {
    event.preventDefault();
    console.log(event);

    switch (event.keyCode) {
      case 37:
        player.moveLeft();
        break;
      case 38:
        player.moveUp();
        break;
      case 39:
        player.moveRight();
        break;
      case 40:
        player.moveDown();
        break;
    }
  });

  drawGrid();

  drawPlayer();

  drawTreasure();
}

drawEverything();
