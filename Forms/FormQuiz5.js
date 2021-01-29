class FormQuiz5 {
    constructor() {
        //Creating all the elements of the form
        this.button = createButton('Submit');
        this.button1 = createButton('Ctrl + Shift + K');
        this.button2 = createButton('Shift + Ctrl + J');
        this.button3 = createButton('Ctrl + Shift + J');
        this.button4 = createButton('Ctrl + Shift + C');
        this.question = createElement('h2');
    }
   
    display(){
        //Setting up all the elements of the form
        var selected = 0;
        
        this.question.html("Shortcut to open console");
        this.question.position(80,10);

        this.button1.position(90, 170);
        this.button2.position(210, 170);
        this.button3.position(90, 230);
        this.button4.position(210, 230);
        this.button.position(345, 375);

        this.button1.mousePressed(()=>{
            selected = 1;
            this.button1.style('background-color', rgb(76, 228, 76));
            this.button2.style('background-color', "white");
            this.button3.style('background-color', "white");
            this.button4.style('background-color', "white");
        });

        this.button2.mousePressed(()=>{
            selected = 2;
            this.button2.style('background-color', rgb(76, 228, 76));
            this.button1.style('background-color', "white");
            this.button3.style('background-color', "white");
            this.button4.style('background-color', "white");
        });

        this.button3.mousePressed(()=>{
            selected = 3;
            this.button3.style('background-color', rgb(76, 228, 76));
            this.button1.style('background-color', "white");
            this.button2.style('background-color', "white");
            this.button4.style('background-color', "white");
        });

        this.button4.mousePressed(()=>{
            selected = 4;
            this.button4.style('background-color', rgb(76, 228, 76));
            this.button1.style('background-color', "white");
            this.button2.style('background-color', "white");
            this.button3.style('background-color', "white");
        });

        this.button.mousePressed(()=>{
            if(selected > 0) {
                this.button.hide();
                this.button1.hide();
                this.button2.hide();
                this.button3.hide();
                this.button4.hide();
                this.question.hide();

                if(selected == 3) {
                    correctAnswers = correctAnswers + 10;
                    var formCorrect = new FormCorrect();
                    formCorrect.display();
                }

                else{
                    var formWrong = new FormWrong();
                    formWrong.display();
                }
            }
        });
    }
}