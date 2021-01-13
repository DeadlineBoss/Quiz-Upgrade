class FormThink {
    constructor() {
        //Creating all the elements of the form
        this.button = createButton('Go back');
        this.instructions = createElement('h2');
        this.instructions1 = createElement('h2');
        this.instructions2 = createElement('h2');
        this.instructions3 = createElement('h2');
    }
   
    display(){
        //Setting up all the elements of the form
        this.instructions.html("You don't have all the keys!!");
        this.instructions.position(55,90);

        this.instructions1.html("Go back around the maze and");
        this.instructions1.position(50,120);

        this.instructions2.html("collect all the keys");
        this.instructions2.position(90,150);

        this.instructions3.html("and Come back to the end to win.")
        this.instructions3.position(35,180);
   
        this.button.position(160, 350);
   
        this.button.mousePressed(()=>{
            //Hiding everything once button is pressed
            this.button.hide();
            this.instructions.hide();
            this.instructions1.hide();
            this.instructions2.hide();
            this.instructions3.hide();
 
            //Changing Gamestate to Play
            gameState = Play;
            player.y = player.y + 50;
        });
    }
}   