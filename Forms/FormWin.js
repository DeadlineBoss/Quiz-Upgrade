class FormWin {
    constructor() {
        //Creating all the elements of the form
        this.instructions = createElement('h2');
        this.instructions1 = createElement('h2');
    }
   
    display(){
        //Setting up all the elements of the form
        this.instructions.html("Well Done!! You won!!");                   
        this.instructions.position(80,175);

        this.instructions1.html("You have won " + correctAnswers + " points");
        this.instructions1.position(65,205);
    }
}   