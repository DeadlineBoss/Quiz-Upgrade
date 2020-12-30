class FormThink {

    constructor() {
        //Creating all the elements of the form
        this.button = createButton('Go back');
        this.instructions = createElement('h4');
        this.instructions1 = createElement('h4');
        this.instructions2 = createElement('h4');
     }
   
     display(){
        //Setting up all the elements of the form
        this.instructions.html("You don't have all the keys!!");
        this.instructions.position(100,180);

        this.instructions1.html("Go back around the maze and collect all the keys");
        this.instructions1.position(50,200);

        this.instructions2.html("and Come back to the end to win.")
        this.instructions2.position(100,220);
   
        this.button.position(160, 350);
   
        this.button.mousePressed(()=>{
            //Hiding everything once button is pressed
            this.button.hide();
            this.instructions.hide();
            this.instructions1.hide();
            this.instructions2.hide();
 
            //Changing Gamestate to Play
            gameState = Play;
            player.y = player.y + 50;
         });
     }
   }
   