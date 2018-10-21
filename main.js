const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

class Game {
     init() {
          canvas.width = document.body.clientWidth;
          canvas.height = document.body.clientHeight;
     }
}

let game = new Game();
game.init();
let maze = new Maze();
maze.draw();
