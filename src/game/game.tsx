import React, { useState } from 'react';
import { Board } from './board/board';
import { Score } from './score/score';
import { Submission } from './submission/submission';

export type Cell = {
    row: number;
    col: number;
    value: string;
}

export const Game: React.FC<{}> = () => {
    const [words, setWords] = useState<string[]>([]);
    const [potential, setPotential] = useState<string>('');
    const [usedCells, setUsedCells] = useState<Set<Cell>>(new Set());

    const handleSubmission = (word: string) => {
        const wordList = new Set([...words]);

        if (word.length < 3) {
            alert('Words must be at least 3 characters!');
        } else if (wordList.has(word)){
            alert('You have already used this word!');
        } else {
            setWords(words => [
               ...words,
               word
            ]);

            setPotential('');
            setUsedCells(new Set());
        }
    }

    const handleSelection = (square:Cell) => {
        setPotential(potential + square.value);
        setUsedCells(usedCells.add(square));
    }
    
    return (
        <div>
            <Board used={usedCells} onClick={(square: Cell) => handleSelection(square)}/>
            <Submission word={potential} onClick={(candidate: string) => handleSubmission(candidate)}/>
            <Score words={words}/>
        </div>
    )
};