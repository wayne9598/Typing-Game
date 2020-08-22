// import {createBomb, vocab3, vocab4, vocab5, vocab6} from '/createBomb.js'
import {buildLevel, level0, level1, level2, level3, level4} from './level.js'
// ------------------------------------------------------------------------
const GAMESTATE = {
    PAUSED : 0,
    RUNNING : 1,
    PRACTICE : 6,
    MENU : 2,
    MENU2: 5,
    GAMEOVER : 3, 
    NEWLEVEL: 4,

}
export default class Game {
    constructor(textBox,gameWidth, gameHeight){
        // this.bomb = bomb;

        this.gamestate = GAMESTATE.MENU2;

        this.textBox = textBox;
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.hit = 0;
        this.unhit = 0;

        this.bombs = [];
        this.number = 4;
        this.totalScore = 0;
        this.maxScore = 0;
        this.level = 0;
        this.bottom = gameHeight -160;
        this.explodedBombs = [];
        this.solvedBombs = [];

        this.opacity = 1;


    }
    

// Create bombs in different level---------------------------------------------------------------------
    start(level){
        this.bombs = buildLevel(level);
    }

    startGame(){
        if(this.gamestate == GAMESTATE.MENU){
            this.gamestate = GAMESTATE.RUNNING;
        } else if(this.gamestate == GAMESTATE.MENU2){
            this.gamestate = GAMESTATE.PRACTICE;
        }
    }

    drawAddScore(context, score, y){
        context.font = '30px VT323';
        context.fillStyle = 'black'; 
        context.fillText('+' + score, 830, y);
    }

    drawMinusScore(context, score, y){
        context.font = '30px VT323';
        context.fillStyle = 'black'; 
        context.fillText('-' + score, 860, y);
    }

    drawLevel(context){
        context.globalAlpha = this.opacity;
        context.font = '50px VT323';
        context.fillStyle = 'black'; 
        context.textAlign = 'center';
        let currentLevel = this.level - 1 
        context.fillText('LEVEL ' + currentLevel, this.gameWidth/2, this.gameHeight /2);
        context.globalAlpha = 1;
        if(this.opacity > 0.01){
            this.opacity -= 0.01;
        } else {
            this.opacity = 0;
        }
        console.log(this.opacity)

    }

// Draw textBox and bombs and scores---------------------------------------------------------------------------------
    draw(context){
        // Game State
        if (this.gamestate == GAMESTATE.MENU){
            context.rect(0,0,this.gameWidth, this.gameHeight);
            context.fillStyle = 'rgba(0,0,0,0.2)';
            context.fill();

            context.font = '50px VT323';
            context.fillStyle = 'black'; 
            context.textAlign = 'center';
            context.fillText('Press Space to Start GAME', this.gameWidth/2, this.gameHeight /2);
        }

        if (this.gamestate == GAMESTATE.MENU2){
            context.rect(0,0,this.gameWidth, this.gameHeight);
            context.fillStyle = 'rgba(0,0,0,0.2)';
            context.fill();

            context.font = '50px VT323';
            context.fillStyle = 'black'; 
            context.textAlign = 'center';
            context.fillText('Press Space to Start PRACTICE', this.gameWidth/2, this.gameHeight /2);
        }

        if(this.gamestate == GAMESTATE.GAMEOVER) {
            context.rect(0,0,this.gameWidth, this.gameHeight);
            context.fillStyle = 'rgba(0,0,0,0.9)';
            context.fill();

            context.font = '30px Arial';
            context.fillStyle = 'white'; 
            context.textAlign = 'center';
            context.fillText('GAMEOVER!', this.gameWidth/2, this.gameHeight /2.5);
            context.fillText('You Score: ' + this.totalScore +'/'+ this.maxScore, this.gameWidth/2, this.gameHeight /2);
            let total = this.unhit + this.hit;
            context.fillText('You hit: ' + this.hit + '/' + total, this.gameWidth/2, this.gameHeight /1.7);



        }



        // Draw textbox
        this.textBox.draw(context)

        // Draw all bombs
        this.bombs.forEach((bomb) => {
            bomb.draw(context);
        })

        // Draw Score
        context.font = '30px VT323';
        context.fillStyle = 'black'; 
        context.fillText('Score: '+ this.totalScore, 800, 30);

        if(this.opacity > 0 && this.gamestate == GAMESTATE.PRACTICE || this.opacity > 0 && this.gamestate == GAMESTATE.RUNNING){
            this.drawLevel(context);
        }

    }




// Update Level, text in textBox, bomb movement, delete bombs, count score-------------------------------------------
// Draw explode and draw solve-----------------------------------------------------------------------------------------------
    update(context){

        
        if(this.gamestate == GAMESTATE.MENU || this.gamestate == GAMESTATE.MENU2 || this.gamestate == GAMESTATE.GAMEOVER) {
            return;
        }

        if(this.gamestate == GAMESTATE.PRACTICE && this.bombs.length == 0) {
            this.start(level0);
            this.level += 1
        }


        // Start new level while clear one
        if(this.bombs.length == 0 && this.gamestate == GAMESTATE.RUNNING){
            this.opacity = 1;
            this.start(level1)
            if(this.level == 2){
                this.start(level2)
            }else if(this.level == 3) {
                this.start(level3);
            }else if(this.level == 4) {
                this.start(level4);
            }
            this.level += 1;
        }

        // Show what you typed 
        this.textBox.update(context);

        // Move bomb and mark for delete when explode and count score
        for (let bomb of this.bombs){

            bomb.update(context, this.gameHeight) 
        
            if( (bomb.position.y + bomb.height -105)  > this.bottom){
                bomb.markForDeletion = true;
                bomb.explode = true;
    
            }

            if(bomb.solve){
                this.totalScore += bomb.string.length;
                this.maxScore += bomb.string.length;

                // this.solvedBombs.splice(-1,1);

                this.solvedBombs.push(bomb);
                this.hit += 1;
            }

            if(bomb.explode){

                
                this.explodedBombs.push(bomb);

                this.totalScore -= bomb.string.length;
                this.maxScore += bomb.string.length;

                this.unhit += 1;
            }

        }

        // Draw exploaded Bombs
        this.explodedBombs.forEach(bomb => {
            bomb.time += 1;
            // console.log(bomb.time)
            if(bomb.time > 120){
                this.explodedBombs.splice(-1,1);
            }


            bomb.drawExplode(context, bomb.position.x, this.bottom, 1-(bomb.time/120) )
            let y = this.explodedBombs.indexOf(bomb) * 25 + 60;
            this.drawMinusScore(context, bomb.string.length, y);

        })

        // Draw solved bombs
        this.solvedBombs.forEach(bomb => {
            bomb.time += 1;
            console.log(bomb.time)

            if(bomb.time > 60){
                this.solvedBombs.splice(-1,1);
            }
            bomb.drawSolve(context, bomb.position.x, bomb.position.y, 1-(bomb.time/60))

            let y = this.explodedBombs.indexOf(bomb) * 20 + 80;
            this.drawAddScore(context, bomb.string.length, y);
            
        })

        // Remove solve or explode bombs
        this.bombs = this.bombs.filter(object => !object.markForDeletion);

        // Gameover
        if(this.level == 4 && this.bombs.length == 0){
            this.gamestate = GAMESTATE.GAMEOVER;
        }

        // PRACTICE to MENU
        if(this.level == 1 && this.bombs.length == 0){
            this.gamestate = GAMESTATE.MENU;
            this.hit = 0;
            this.unhit = 0;
            this.totalScore = 0;
            this.explodedBombs = [];
            this.solvedBombs = [];
        }
        

    } //update end



}