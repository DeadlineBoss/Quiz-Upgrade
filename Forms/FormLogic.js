class FormLogic {
    constructor() {
        //Creating all the elements of the form
        this.button = createButton('Submit');
        this.textbox1 = createInput('Enter Width');
        this.textbox2 = createInput('Enter Height');
        this.title = createElement('h2');
    }
   
    display(){
        this.title.html("Build  brige to pass the hole");
        this.title.position(70,10);

        this.textbox1.position(110,150);
        this.textbox2.position(110,180);

        this.button.position(160, 350);
   
        this.button.mousePressed(()=>{
            //add values we put in variables
            LogicX = this.textbox1.value();
            LogicY = this.textbox2.value();
            
            //Hiding everything once button is pressed
            this.button.hide();
            this.textbox1.hide();
            this.textbox2.hide();
            this.title.hide();

            //Changing value to one
            logicTest = 1;

            //Changing gamestate
            gameState = Logic; 
        });
    }
}