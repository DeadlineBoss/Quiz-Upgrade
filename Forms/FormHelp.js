class FormHelp {

    constructor() {
        //Creating all the elements of the form
        this.button = createButton('Go Back');
        this.instructions = createElement('h4');
        this.instructions1 = createElement('h4');
        this.instructions2 = createElement('h4');
        this.title = createElement('h2');
    }
   
    display(){
        //Setting up all the elements of the form
        this.title.html("How to Play");
        this.title.position(130, 10);
        
        this.instructions.html("Use the arrow keys to move.");
        this.instructions.position(100,180);

        this.instructions1.html("Collect all the keys!! Answer the questions.");
        this.instructions1.position(50,200);

        this.instructions2.html("And reach to the end to win.")
        this.instructions2.position(100,220);

        this.button.position(160, 350);
   
        this.button.mousePressed(()=>{
            //Hiding everything once button is pressed
            this.button.hide();
            this.title.hide();
            this.instructions.hide();
            this.instructions1.hide();
            this.instructions2.hide();

            //Going back to MainForm
            formStart = new FormStart();
            formStart.display();
        });
    }
   }