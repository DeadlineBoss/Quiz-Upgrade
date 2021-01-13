// Creating the Player
var player;
var playerImage;

// Creating variables for the keys
var Key1, Key2, Key3, Key4, Key5;
var keyImage;
var KeyCount = 0;
var correctAnswers = 0;

// Gamestates
var gameState = -1;
var Serve = -1;
var Play = 0;
var Logic = 6;
var Thinking = 8;
var Nothing = 9;

// Creating variables for edges so player doesnt go out of maze
var Edge1, Edge2, Edge3, Edge4;
var Mazeblocks;

//Creating sprites for the ending
var endSprite;
var endSpriteImage;

//Creating sprites for logic question
var logicSprite;
var logicSpriteImage;
var logicTest;
var LogicX;
var LogicY;
var testSubject;
var cliffLeft;
var cliffRight;
var cliffLeftSoil;
var cliffRightSoil;

function preload() {
    //Loading the images
    playerImage = loadImage("Images/am.png");
    keyImage = loadImage("Images/key.png");
    endSpriteImage = loadImage("Images/end.png");
    logicSpriteImage = loadImage("Images/hole.png");
}

function setup() {
    createCanvas(400, 400);
    
    //Creating the Player Sprite
    player = createSprite(1310,1340,100,100);
    player.addImage(playerImage);
    player.scale = 0.2;

    //Creating group for all the maze blocks
    Mazeblocks = new Group();

    //Creating the edges
    Edge1 = createSprite(1250,-10,2540,20);
    Mazeblocks.add(Edge1);
    Edge2 = createSprite(1250,2510,2540,20);
    Mazeblocks.add(Edge2);
    Edge3 = createSprite(-10,1250,20,2540);
    Mazeblocks.add(Edge3);
    Edge4 = createSprite(2510,1250,20,2540);
    Mazeblocks.add(Edge4);

    //Creating the maze using blocks
    Block1 = createSprite(1400,1100,20,600);
    Mazeblocks.add(Block1);
    Block2 = createSprite(1030,1000,300,20);
    Mazeblocks.add(Block2);
    Block3 = createSprite(890,1165,20,350);
    Mazeblocks.add(Block3);
    Block4 = createSprite(1160,1350,20,400);
    Mazeblocks.add(Block4);
    Block5 = createSprite(1160,1550,550,20);
    Mazeblocks.add(Block5);
    Block6 = createSprite(1610,1450,20,500);
    Mazeblocks.add(Block6);
    Block7 = createSprite(1150,800,520,20);
    Mazeblocks.add(Block7);
    Block8 = createSprite(1400,1710,440,20);
    Mazeblocks.add(Block8);
    Block9 = createSprite(900,650,20,300);
    Mazeblocks.add(Block9);
    Block10 = createSprite(660,920,20,850);
    Mazeblocks.add(Block10);
    Block11 = createSprite(775,1350,250,20);
    Mazeblocks.add(Block11);
    Block12 = createSprite(1250,510,700,20);
    Mazeblocks.add(Block12);
    Block13 = createSprite(1610,770,20,540);
    Mazeblocks.add(Block13);
    Block14 = createSprite(900,170,20,380);
    Mazeblocks.add(Block14);
    Block15 = createSprite(1040,330,20,380);
    Mazeblocks.add(Block15);
    Block16 = createSprite(1190,170,20,380);
    Mazeblocks.add(Block16);
    Block17 = createSprite(1340,330,20,380);
    Mazeblocks.add(Block17);
    Block18 = createSprite(1490,170,20,380);
    Mazeblocks.add(Block18);
    Block19 = createSprite(1610,330,20,380);
    Mazeblocks.add(Block19);
    Block20 = createSprite(550,150,700,20);
    Mazeblocks.add(Block20);
    Block21 = createSprite(435,320,470,20);
    Mazeblocks.add(Block21);
    Block22 = createSprite(210,850,20,1040);
    Mazeblocks.add(Block22);
    Block23 = createSprite(435,930,20,890);
    Mazeblocks.add(Block23);
    Block24 = createSprite(435,1550,500,20);
    Mazeblocks.add(Block24);
    Block25 = createSprite(195,1950,20,800);
    Mazeblocks.add(Block25);
    Block26 = createSprite(325,2340,250,20);
    Mazeblocks.add(Block26);
    Block27 = createSprite(665,2105,20,810);
    Mazeblocks.add(Block27);
    Block28 = createSprite(440,2040,20,615);
    Mazeblocks.add(Block28);
    Block29 = createSprite(840,1710,360,20);
    Mazeblocks.add(Block29);
    Block30 = createSprite(2275,300,20,600);
    Mazeblocks.add(Block30);
    Block31 = createSprite(870,2110,20,500);
    Mazeblocks.add(Block31);
    Block32 = createSprite(1200,2350,680,20);
    Mazeblocks.add(Block32);
    Block33 = createSprite(1410,1860,750,20);
    Mazeblocks.add(Block33);
    Block34 = createSprite(1780,1535,20,670);
    Mazeblocks.add(Block34);
    Block35 = createSprite(1780,590,20,900);
    Mazeblocks.add(Block35);
    Block36 = createSprite(1950,150,350,20);
    Mazeblocks.add(Block36);
    Block37 = createSprite(1950,590,350,20);
    Mazeblocks.add(Block37);
    Block38 = createSprite(2100,370,350,20);
    Mazeblocks.add(Block38);
    Block39 = createSprite(1540,2210,1000,20);
    Mazeblocks.add(Block39);
    Block40 = createSprite(2000,2350,570,20);
    Mazeblocks.add(Block40);
    Block41 = createSprite(2275,1580,20,1550);
    Mazeblocks.add(Block41);
    Block42 = createSprite(2030,1510,20,1400);
    Mazeblocks.add(Block42);
    Block43 = createSprite(2510,1250,20,2500);
    Mazeblocks.add(Block43);
    Block44 = createSprite(2150,815,260,20);
    Mazeblocks.add(Block44);
    Block45 = createSprite(1540,2050,1000,20);
    Mazeblocks.add(Block45);
    
    //Creating the keys
    Key1 = createSprite(1950,2130,10,10);
    Key1.addImage(keyImage);
    Key1.scale = 0.2;

    Key2 = createSprite(320,2250,10,10);
    Key2.addImage(keyImage);
    Key2.scale = 0.2;

    Key3 = createSprite(800,75,10,10);
    Key3.addImage(keyImage);
    Key3.scale = 0.2;

    Key4 = createSprite(1050,650,10,10);
    Key4.addImage(keyImage);
    Key4.scale = 0.2;

    Key5 = createSprite(775,2450,10,10);
    Key5.addImage(keyImage);
    Key5.scale = 0.2;

    //Creating endSprite
    endSprite = createSprite(2400,50,10,10);
    endSprite.addImage(endSpriteImage);
    endSprite.scale = 0.3;

    //Creating logicSprite
    logicSprite = createSprite(2400,250,10,10);
    logicSprite.addImage(logicSpriteImage);
    logicSprite.scale = 0.7;

    //Creating Logic question sprites
    testSubject = createSprite(200, 150, LogicX, LogicY);
    cliffLeft = createSprite(0,250,250,20);
    cliffRight = createSprite(400,250,250,20);
    cliffLeftSoil = createSprite(0,325,250,150);
    cliffRightSoil = createSprite(400,325,250,150);

    //Setting visible to false so doesnt cause a mess
    testSubject.visible = false;
    cliffLeft.visible = false;
    cliffRight.visible = false;
    cliffLeftSoil.visible = false;
    cliffRightSoil.visible = false;

    // Creating the starting form
    if (gameState = Serve) {
        formStart = new FormStart();
        formStart.display();
    }
}

function draw() {
    //Creating the background
    background("white");     

    //What happens when we start the game 
    if (gameState == Play) {

        //Movement Using W,A,S,D
        if(keyDown("W")) {
            player.y = player.y - 10;
        }

        if(keyDown("S")) {
            player.y = player.y + 10;
        }
    
        if(keyDown("A")) {
          player.x = player.x - 10;
        }

        if(keyDown("D")) {
            player.x = player.x + 10;
        }

        //Using collide so player cannot pass throught the mazeblocks
        player.collide(Mazeblocks);

        //Changing Gamestate if Player touches key & hiding them
        if(player.isTouching(Key1) && Key1.visible == true){
            var formQuiz1 = new FormQuiz1();
            formQuiz1.display();
            gameState = Nothing;
            Key1.visible = false;
            KeyCount = KeyCount + 1;
        }

        if(player.isTouching(Key2) && Key2.visible == true){
            var formQuiz2 = new FormQuiz2();
            formQuiz2.display();
            gameState = Nothing;
            Key2.visible = false;
            KeyCount = KeyCount + 1;
        }

        if(player.isTouching(Key3) && Key3.visible == true){
            var formQuiz3 = new FormQuiz3();
            formQuiz3.display();
            gameState = Nothing;
            Key3.visible = false;
            KeyCount = KeyCount + 1;
        }

        if(player.isTouching(Key4) && Key4.visible == true){
            var formQuiz4 = new FormQuiz4();
            formQuiz4.display();
            gameState = Nothing;
            Key4.visible = false;
            KeyCount = KeyCount + 1;
        }

        if(player.isTouching(Key5) && Key5.visible == true){
            var formQuiz5 = new FormQuiz5();
            formQuiz5.display();
            gameState = Nothing;
            Key5.visible = false;
            KeyCount = KeyCount + 1;
        }

        //Checking if player is at the end
        if(player.isTouching(endSprite)){
            gameState = Thinking;
        }

        //Checking if player is at logic question
        if(player.isTouching(logicSprite) && logicSprite.visible == true){
            var formLogic = new FormLogic;
            formLogic.display();

            logicSprite.visible = false;

            gameState = Nothing
        }
        
        //Setting up the camera
        camera.position.x = player.x;
        camera.position.y = player.y;

        //Displaying everything
        drawSprites();
    }

    //Checking if the player has all the keys
    if(gameState == Thinking) {
        if(KeyCount == 5){
            var formWin = new FormWin;
            formWin.display();

            gameState = Nothing;
        }
        else {
            var formThink = new FormThink();
            formThink.display();
            gameState = Nothing;
        }   
    }

    //Logic Question Trying if the values work
    if(gameState == Logic) {
        //Using var logicTest to run this code only once
        if(logicTest == 1){
            //seting the sprites according to the current scene
            testSubject.x = player.x;
            testSubject.y = player.y - 150;
            testSubject.width = LogicX;
            testSubject.height = LogicY;
            cliffLeft.x = player.x - 200;
            cliffLeft.y = player.y + 50;
            cliffRight.x = player.x + 200;
            cliffRight.y = player.y + 50;
            cliffLeftSoil.x = player.x - 200;
            cliffLeftSoil.y = player.y + 125;
            cliffRightSoil.x = player.x + 200;
            cliffRightSoil.y = player.y + 125; 

            //Turning it to zero
            logicTest = 0
        }

        //Using rect funtion and setting every parameter accordingly also adding colors
        fill(193,154,107);
        rect(testSubject.x - testSubject.width/2,testSubject.y - testSubject.height/2,testSubject.width,testSubject.height);
        fill(0,204,0);
        rect(cliffLeft.x - cliffLeft.width/2,cliffLeft.y - cliffLeft.height/2,cliffLeft.width,cliffLeft.height);
        rect(cliffRight.x - cliffRight.width/2,cliffRight.y - cliffRight.height/2,cliffRight.width,cliffRight.height);
        fill(132,105,78);
        rect(cliffLeftSoil.x - cliffLeftSoil.width/2,cliffLeftSoil.y - cliffLeftSoil.height/2,cliffLeftSoil.width,cliffLeftSoil.height);
        rect(cliffRightSoil.x - cliffRightSoil.width/2,cliffRightSoil.y - cliffRightSoil.height/2,cliffRightSoil.width,cliffRightSoil.height);

        //making testsubject go bottom
        testSubject.y = testSubject.y + 1;

        if(testSubject.isTouching(cliffLeft) && testSubject.isTouching(cliffRight)){
            var formLogicCorrect = new FormLogicCorrect;
            formLogicCorrect.display();

            gameState = Nothing;
        }

        if(testSubject.y > 600){
            var formLogicWrong = new FormLogicWrong;
            formLogicWrong.display();

            gameState = Nothing;
        }
    }

    //Gamestate Nothing to give a pause when forms are working so they dont get printed again and again
    if(gameState == Nothing) {
        //see doing nothing like a lazy person lol :P
    }
}