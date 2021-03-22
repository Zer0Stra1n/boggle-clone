import React from 'react';
import './board.scss';
import { GameRow } from './game-row/game-row';

export type Cell = {
    row: number;
    col: number;
    value: string;
}

export const Board: React.FC<{onClick: Function}> = (props: {onClick: Function}) => {
    // Casually stole this list from someone else because I have never seen these dice
    const diceList =[
        "aaafrs",
        "aaeeee",
        "aafirs",
        "adennn",
        "aeeeem",
        "aeegmu",
        "aegmnn",
        "afirsy",
        "bjkqxz",
        "ccenst",
        "ceiilt",
        "ceilpt",
        "ceipst",
        "ddhnot",
        "dhhlor",
        "dhlnor",
        "dhlnor",
        "eiiitt",
        "emottt",
        "ensssu",
        "fiprsy",
        "gorrvw",
        "iprrry",
        "nootuw",
        "ooottu"
    ];

    const usedCells = new Set();

    const rollDice = () => {
        // pull the length of the dice list
        const len = diceList.length;
        // figure out a random dice to use
        const dieIndex = Math.floor(Math.random() * len);
        // remove it from the list
        const die = diceList.splice(dieIndex, 1)[0];
        // roll the dice
        const letter = Math.floor(Math.random() * 6);
        // return a letter on the dice
        return die[letter];
    }

    // This looks hilarious, but works fine
    // For each position, build out a row of 4 unique dice
    // We will end up with four rows of 4 dice
    const squares = Array(4).fill(0).map((row, index) => {
        let update: Cell[] = [];
        for (let i = 0; i<4; i++){
            const cell = {
                row: index,
                col: i,
                value: rollDice()
            }

            update = [...update, cell];
        }

        return update;
    });

    const validateCell = (cell: Cell) => {
        // if this is the first selection
        if (!usedCells.size){
            // just drop it in
            usedCells.add(cell);
        // otherwise, if we have that letter
        } else if (usedCells.has(cell)){
            // alert for now
            alert('Each letter can only be used once');
        // otherwise
        } else {
            // pull the last cell we had
            const last = Array.from(usedCells)[usedCells.size - 1] as Cell;
            // check if it is adjacent
            const isAdjacent: boolean = verifyAdjacent(last, cell);
            
            // if so
            if (isAdjacent){
                // add it
                usedCells.add(isAdjacent);
                // bubble that letter up
                props.onClick(cell.value);
            // otherwise
            } else {
                // alert time
                alert('Letters must be adjacent to make a sentance');
            }
        }
    }

    const verifyAdjacent = (prev: Cell, cur: Cell) => {
        // we check between -1 and 0 to cover our diagonals as well
        let vert = prev.col - cur.col >= -1 && prev.col - cur.col <= 1;
        let hori = prev.row - cur.row >= -1 && prev.row - cur.row <= 1;

        // since we can't click the same cell again, these both have to be true
        return vert && hori;
    }

    // Notes:
    // Based on my understanding, there are a total of 16 dice on a 4x4 board
    // The user can only move to adjacent die, including diags
    // 
    // this component will need to check the target and verify they connect on each click (pass in x,y eg. Pos 2, Row 1 and use that as the outbound click?)
    // it will also ideally keep track of the previous clicked die in case we decide to un-click it and unwind the word
    // this will kick the composite word out on click assuming the word passes checks the scoring and submission pieces handle the rest
    return (
        <div className="game-board">
            {squares.map((row, index) => (
                <GameRow key={index} cells={row} onClick={(cell: Cell) => {validateCell(cell)}}/>
            ))}
        </div>
    )
}