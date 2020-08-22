
export default class TextBox {
    constructor(gameWidth, gameHeight){
        // this.game = game;
        this.width = 400;
        this.height = 40;
        this.string = '';
        this.position = {
            x: (gameWidth-this.width)/2,
            y: gameHeight - 20,
        }

    }

    draw(context){
        context.font = '30px VT323';
        context.fillStyle = 'black'; 
        context.textAlign = 'left'; 
        context.strokeRect(this.position.x-10, this.position.y-30, this.width, this.height)
        context.fillText(this.string, this.position.x, this.position.y);
    }

    update(context){
        context.fillText(this.string, this.position.x, this.position.y);
    }

    addText(text){
        this.string += text;

    }

    submitText(bombs){

        bombs.forEach(bomb => {
            let bombText = bomb.string;
            if(this.string == bombText){
                bomb.markForDeletion = true;
                bomb.solve = true;
                
                // alert('Got ' + bombText);
            }
        });
        console.log('Type: ', this.string);
        this.string='';

    }

    delete(){
        this.string = this.string.slice(0,-1);
    }



}