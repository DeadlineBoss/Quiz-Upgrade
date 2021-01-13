class FormLogicWrong {
    constructor() {
        //Creating all the elements of the form
        this.button = createButton('Try Again');
        this.instructions = createElement('h2');
        this.instructions1 = createElement('h2');
        this.instructions2 = createElement('h2');
    }
   
    display(){
        //Setting up all the elements of the form
        this.instructions.html("Your answer was wrong :(");
        this.instructions.position(55,100);

        this.instructions2.html("Your Brigde Fell");
        this.instructions2.position(100,140);

        this.instructions1.html("Press Try Again to get another chance!");
        this.instructions1.position(5,180);

        this.button.position(160, 350);
   
        this.button.mousePressed(()=>{
            //Hiding everything once button is pressed
            this.button.hide();
            this.instructions.hide();
            this.instructions1.hide();
            this.instructions2.hide();

            //Going back to Play
            var formLogicAgain = new FormLogic();
            formLogicAgain.display();
        });
    }
}