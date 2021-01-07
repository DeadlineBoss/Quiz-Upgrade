class FormCorrect {

    constructor() {
        //Creating all the elements of the form
        this.button = createButton('Go Back');
        this.instructions = createElement('h2');
        this.instructions1 = createElement('h2');
        this.instructions2 = createElement('h2');
    }
   
    display(){
        //Setting up all the elements of the form
        this.instructions.html("Your answer was correct.");
        this.instructions.position(55,100);

        this.instructions2.html("You got a key!!");
        this.instructions2.position(110,140);

        this.instructions1.html("Press Go Back to Continue");
        this.instructions1.position(50,180);

        this.button.position(160, 350);
   
        this.button.mousePressed(()=>{
            //Hiding everything once button is pressed
            this.button.hide();
            this.instructions.hide();
            this.instructions1.hide();
            this.instructions2.hide();

            //Going back to Play
            gameState = Play;
        });
    }
   }