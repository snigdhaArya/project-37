class Game{
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    // start(){
    //   if(gameState === 0){
    //     player = new Player();
    //     player.getCount();
    //     form = new Form()
    //     form.display();
    //   }
    // }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    }
  
    play(){
      form.hide();
  
      // backgroundImage("yellow");
      fill(0);
      textSize(30);
      text("result of the Quiz",340,50);
      text("--------------------------",320,65)
      Player.getplayerinfo();

      if(allPlayers !== undefined){
        fill("blue");
        textSize(20);
        text("*NOTE: contestent who answred correct are highlighted in green colour",130,230);
        var display_Answers = 230;
        for(var plr in allPlayers){
          var plr="2"
          if (plr === "player" + player.index)
            fill("green")
          else
            fill("red");
  
          display_Answers=display_Answers+30
          textSize(15);
          text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance +=50
          player.update();
        }
  
     }
    }
  }
  
  
  
  