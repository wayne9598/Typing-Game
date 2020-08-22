export default class Bomb {
    constructor(position, height){
        this.width = 100;
        this.height = height;
        this.speed = 3;
        this.string = 'hey';
        this.solve = false;
        this.explode = false;
        // this.bottom = 440;

        this.time = 1; 


        this.bomb1 = document.getElementById('img_bomb1');
        this.bomb2 = document.getElementById('img_bomb2');
        this.bomb3 = document.getElementById('img_bomb3');
        this.bomb4 = document.getElementById('img_bomb4');
        this.bomb5 = document.getElementById('img_bomb5');
        this.bomb6 = document.getElementById('img_bomb6');
        this.bomb7 = document.getElementById('img_bomb7');



        this.explode1 = document.getElementById('img_explode1');
        this.explode2 = document.getElementById('img_explode2');
        this.explode3 = document.getElementById('img_explode3');
        this.explode4 = document.getElementById('img_explode4');
        this.explode5 = document.getElementById('img_explode5');
        this.explode6 = document.getElementById('img_explode6');



        this.solve1 = document.getElementById('img_solve');
        this.solve2 = document.getElementById('img_solve2');
        this.solve3 = document.getElementById('img_solve3');




        this.position = position;
        this.markForDeletion = false;


    }

    draw(context){
   

        context.font = '30px VT323';
        context.fillStyle = 'black'; 
        context.fillText(this.string, this.position.x, this.position.y);
        this.drawBomb(context);

        // context.rect(this.position.x, this.position.y +this.height, 10, 10);
        // context.fillStyle = 'rgba(0,0,0,0.1)';
        // context.fill();

    }


    drawBomb(context){

        if(this.string.length == 3){
            // this.height = 50;
            context.drawImage(this.bomb1, this.position.x, this.position.y, this.height, this.height);
        } else if(this.string.length == 4){
            // this.height = 50;
            context.drawImage(this.bomb2, this.position.x, this.position.y, this.height, this.height);
        } else if(this.string.length == 5){
            // this.height = 100;
            context.drawImage(this.bomb3, this.position.x, this.position.y, this.height, this.height);
        } else if(this.string.length == 6){
            // this.height = 100;
            context.drawImage(this.bomb4, this.position.x, this.position.y, this.height, this.height);
        } else if(this.string.length == 7){
            // this.height = 100;
            context.drawImage(this.bomb5, this.position.x, this.position.y, this.height, this.height);
        } else if(this.string.length == 8){
            // this.height = 100;
            context.drawImage(this.bomb6, this.position.x, this.position.y, this.height, this.height);
        } else if(this.string.length == 9){
            context.drawImage(this.bomb7, this.position.x, this.position.y, this.height/1.5, this.height);
        } else if(this.string.length == 10){
            context.drawImage(this.bomb7, this.position.x, this.position.y, this.height/1.5 , this.height);
        }

    }

    drawExplode(context, explodePosition, bottom, x){

        context.globalAlpha = x;
        if(this.string.length == 3){
            
            context.drawImage(this.explode1, explodePosition-20, bottom, 100, 100);
        } else if(this.string.length == 4){
            context.drawImage(this.explode2, explodePosition-20, bottom, 100, 100);
        } else if(this.string.length == 5){
            context.drawImage(this.explode3, explodePosition-20, bottom, 100, 100);
        } else if(this.string.length == 6){
            context.drawImage(this.explode4, explodePosition-20, bottom, 100, 100);
        } else if(this.string.length == 7){
            context.drawImage(this.explode5, explodePosition-20, bottom, 100, 100);
        } else{
            context.drawImage(this.explode6, explodePosition, bottom, 100, 100);
        }
        context.globalAlpha = 1;



      

        
    }

    drawSolve(context, x, y, opacity){
        context.globalAlpha = opacity;

        if(this.string.length == 3 || this.string.length == 4){
            context.drawImage(this.solve1, x, y, 50, 50);
        } else if (this.string.length == 5 || this.string.length == 6){
            context.drawImage(this.solve2, x, y, 50, 50);
        } else {
            context.drawImage(this.solve3, x, y, 50, 50);
        }
        context.globalAlpha = 1;

        
    }

    update(context, gameHeight) {

        if(this.string.length === 7){
            this.position.y += this.speed;
            this.position.x += 0.6;
        }
        if(this.string.length === 8){
            this.position.y += this.speed;
            this.position.x -= 0.6;
        }

        this.position.y += this.speed;


        // if(this.position.y - this.height > this.bottom){
        //     this.markForDeletion = true;
        //     this.explode = true;
        //     this.drawExplode(context, this.position.x);

        // } 

        
    }





}