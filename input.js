// import Game from "./game";

export default class InputHandler {

    constructor(textBox, game){
        document.addEventListener('keydown', event => {

            switch (event.keyCode) {

                case 65:
                    textBox.addText('a');
                    break;

                case 66:
                    textBox.addText('b');
                    break;
                    
                case 67:
                    textBox.addText('c');
                    break;

                case 68:
                    textBox.addText('d');
                    break;
                
                case 69:
                    textBox.addText('e');
                    break;
                
                case 70:
                    textBox.addText('f');
                    break;

                case 71:
                    textBox.addText('g');
                    break;

                case 72:
                    textBox.addText('h');
                    break;
                    
                case 73:
                    textBox.addText('i');
                    break;

                case 74:
                    textBox.addText('j');
                    break;
                
                case 75:
                    textBox.addText('k');
                    break;
                
                case 76:
                    textBox.addText('l');
                    break;

                case 77:
                    textBox.addText('m');
                    break;


                case 78:
                    textBox.addText('n');
                    break;

                case 79:
                    textBox.addText('o');
                    break;
                    
                case 80:
                    textBox.addText('p');
                    break;

                case 81:
                    textBox.addText('q');
                    break;
                
                case 82:
                    textBox.addText('r');
                    break;
                
                case 83:
                    textBox.addText('s');
                    break;

                case 84:
                    textBox.addText('t');
                    break;

                case 85:
                    textBox.addText('u');
                    break;
                    
                case 86:
                    textBox.addText('v');
                    break;

                case 87:
                    textBox.addText('w');
                    break;
                
                case 88:
                    textBox.addText('x');
                    break;
                
                case 89:
                    textBox.addText('y');
                    break;

                case 90:
                    textBox.addText('z');
                    break;

                // Delete 
                case 8:
                    textBox.delete();
                    break;

                // Start
                case 32: 
                    game.startGame();
                    break;
                

                // ENTER
                case 13:
                    textBox.submitText(game.bombs);
                    break;
               
        }
 
        })

        // document.addEventListener('keyup', event => {

        //     switch (event.keyCode) {

        //         case 37:
        //             if (paddle.speed < 0)
        //                 paddle.stop();
        //             break;
        //         case 39:
        //             if (paddle.speed > 0)
        //                 paddle.stop();
        //             break;

        // }

        // })

    }


}