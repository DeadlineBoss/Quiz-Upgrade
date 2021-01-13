class FormStart {
   constructor() {
        //Creating all the elements of the form
        this.button = createButton('Play');
        this.button1 = createButton('How to play')
        this.title = createElement('h2');
    }
  
    display(){
        //Setting up all the elements of the form
        this.title.html("QUIZ UPGRADE");
        this.title.position(100, 10);
  
        this.button.position(170, 300);
        this.button1.position(150, 350);
  
        this.button.mousePressed(()=>{
            //Hiding everything once button is pressed
            this.button.hide();
            this.button1.hide();
            this.title.hide();

            //Changing Gamestate to Play
            gameState = Play;
        });

        this.button1.mousePressed(()=>{
            //Hiding everything once button is pressed
            this.button.hide();
            this.button1.hide();
            this.title.hide();

            //setting up the help form
            var formHelp = new FormHelp();
            formHelp.display();
        })
    }
}
  