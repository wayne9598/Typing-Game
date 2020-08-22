import Bomb from './bomb.js'
import TextBox from './textBox.js'
import Game from './game.js'

import InputHandler from '/input.js'




//--------------------------Setup Canvas------------------------------------------------------------------------
let canvas = document.getElementById('gameScreen');
let context = canvas.getContext('2d');
context.font = 'normal 20px VT323';

let gameWidth = 1000;
let gameHeight = 600;

//-------------------------- Load Background------------------------------------------------------------------------

let bg1 = document.getElementById('img_bg1');
let bg2 = document.getElementById('img_bg2');
let bg3 = document.getElementById('img_bg3');

function loadBackground(context) {
    context.drawImage(bg1, 0, 200, gameWidth, gameHeight);
    context.drawImage(bg3, 600, 120, 300, 100);
    context.drawImage(bg3, 100, 50, 300, 100);


}

//------------------------------Setup fps--------------------------------------------------------------------
var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}

//-------------------------------Def out of loop-------------------------------------------------------------------

let bomb = new Bomb(gameWidth, gameHeight);
let textBox = new TextBox(gameWidth, gameHeight);
let game = new Game(textBox, gameWidth, gameHeight);
new InputHandler(textBox, game);



//-------------------------------Main Loop-------------------------------------------------------------------
function animate() {

    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    



    if (elapsed > fpsInterval) {

        then = now - (elapsed % fpsInterval);
//-----------------------------------My Code---------------------------------------------------------------

        // Put your drawing code here
        context.clearRect(0,0,gameWidth,gameHeight);

        loadBackground(context)

       
        game.draw(context);
        game.update(context);


        

        
        
    }
}


startAnimating(60)















