
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database,name;

var form, player, game ,contestent;


function setup(){
  canvas = createCanvas(850,400);
  database= firebase.database();
  game= new Game();
  game.getState();
  game.start();
}


function draw(){
  background("pink");
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

}
