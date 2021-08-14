 class Form {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(150, 80);
    this.option1.html("1: Everyone " );
    this.option1.position(150, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(150, 140);
    this.option4.html("4: Example" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      player.name = this.input1.value();
      player.answer = this.input2.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
    });
  }
}
// class Form {
//     constructor() {
//       this.input = createInput("Name");
//       this.button = createButton('Play');
//       this.greeting = createElement('h3');
//     }
  
//     hide(){
//       this.input.hide();
//       this.button.hide();
//       this.greeting.hide();
//     }
  
//     display(){
//       var title = createElement('h2')
//       title.html("My Quiz Game");
//       title.position(130, 0);
      
      
//       this.input.position(130, 160);
//       this.button.position(250, 200);
  
//      this.button.mousePressed(()=>{
//        this.input.hide();
//        this.button.hide();
  
//         player.name = this.input.value();
        
//         playerCount+=1;
//         player.index==playerCount;
//         player.update();
      
//         player.updateCount(playerCount);
       
//         this.greeting.html("Your welcom is this game " + player.name )
//        this.greeting.position(130, 160)
//       });
  
//     }
//   }
  
   