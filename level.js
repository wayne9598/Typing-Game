import {createBomb, vocab3, vocab4, vocab5, vocab6, vocab7, vocab8, vocab9, vocab10} from './createBomb.js'

export function buildLevel(level) {
    let bombs = [];

    level.forEach((row, rowIndex) => {
        row.forEach((bomb, bombIndex) => {
            let position = {
                x: 110 * bombIndex+40, 
                y: -100 * rowIndex
            }
            if (bomb === 3){
                let height = 50;
                let theBomb = createBomb(vocab3, position, height)
                bombs.push(theBomb)
            }
            if (bomb === 4){
                let height = 50;
                let theBomb = createBomb(vocab4, position, height)
                bombs.push(theBomb)
            }
            if (bomb === 5){
                let height = 100;
                let theBomb = createBomb(vocab5, position, height)
                bombs.push(theBomb)
            }
            if (bomb === 6){
                let height = 100;
                let theBomb = createBomb(vocab6, position, height)
                bombs.push(theBomb)
            }
            if (bomb === 7){
                let height = 100;
                let theBomb = createBomb(vocab7, position, height)
                bombs.push(theBomb)
            }
            if (bomb === 8){
                let height = 100;
                let theBomb = createBomb(vocab8, position, height)
                bombs.push(theBomb)
            }

            if (bomb === 9){
                let height = 150;
                let theBomb = createBomb(vocab9, position, height)
                bombs.push(theBomb)
            }

            if (bomb === 10){
                let height = 150;
                let theBomb = createBomb(vocab10, position, height)
                bombs.push(theBomb)
            }
            console.log(position.x)


        })

    })

    return bombs;
    
}

// export const level0 = [
//     [0, 0, 4, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 5, 0, 0, 6, 0],
//     [0, 0, 7, 0, 0, 0, 0, 10, 0, 0],
//     [0, 9, 0, 0, 4, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 8, 0, 0],
//     [0, 0, 0, 3, 0, 0, 0, 0, 0, 0],


// ]

export const level0 = [
    [3, 4, 4, 5, 6, 7, 8, 4, 5, 4],
    [0, 6, 0, 0, 0, 5, 0, 0, 6, 0],
    [5, 4, 7, 0, 0, 9, 0, 6, 0, 0],
    [0, 9, 6, 7, 4, 0, 5, 10, 0, 8],
    [7, 8, 3, 0, 0, 0, 0, 8, 0, 0],
    [0, 4, 0, 3, 0, 0, 0, 0, 0, 8],


]


export const level1 = [
    [0, 3, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 4, 0, 0, 6, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
    [0, 0, 4, 0, 0, 0, 0, 0, 0, 0],


]

export const level2 = [
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 0, 0, 8, 0],
    [7, 0, 9, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 7, 0, 0, 0, 0, 0, 0, 4, 0],
    [3, 0, 0, 0, 0, 0, 6, 0, 0, 5],


]

export const level3 = [
    [0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 10, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
    [0, 7, 0, 0, 0, 0, 0, 0, 0, 3],
    [7, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 6, 0, 0, 0, 0, 3, 3, 0, 0],
    [0, 0, 0, 5, 0, 0, 0, 0, 0, 8],

]
export const level4 = [
    [0, 7, 0, 0, 0, 0, 3, 0, 6, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
    [0, 0, 0, 0, 0, 0, 0, 9, 0, 0],
    [0, 4, 10, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 0, 7, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 8, 0, 9, 0],
    [7, 0, 0, 0, 4, 0, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 3, 0, 0, 0],
]


// export const level2 = [
//     [0, 0, 3, 0, 0, 0, 0, 0, 3, 0],
//     [0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
//     [0, 5, 0, 0, 0, 0, 4, 0, 5, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 6, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 3, 0, 3, 0, 0],
//     [0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 4, 0, 0, 0, 0, 0],

// ]

// export const level3 = [
//     [0, 4, 0, 0, 0, 0, 4, 0, 0, 3],
//     [0, 0, 6, 0, 0, 5, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 3, 0, 0, 0, 0, 4, 0, 0],
//     [0, 4, 0, 0, 0, 3, 0, 0, 0, 6],
//     [5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 6, 0, 0, 0, 0, 5, 0, 0],
//     [0, 0, 0, 3, 0, 0, 0, 0, 4, 0],
// ]

// export const level4 = [
//     [0, 5, 0, 0, 0, 0, 4, 0, 0, 0],
//     [0, 0, 6, 0, 6, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 4, 0, 3, 0],
//     [0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
//     [0, 4, 0, 3, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 6, 0, 0, 0, 5, 0, 4, 0],
//     [0, 0, 0, 0, 3, 0, 0, 3, 0, 0],
//     [0, 5, 0, 0, 0, 0, 3, 0, 0, 0],
//     [0, 0, 0, 0, 6, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 4, 0, 3, 0],
//     [0, 0, 0, 0, 5, 0, 0, 4, 0, 0],
//     [0, 4, 0, 3, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 6, 0, 0, 0, 5, 0, 4, 0],
//     [0, 3, 0, 0, 3, 0, 0, 0, 0, 0],
// ]

// export const level5 = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
// ]