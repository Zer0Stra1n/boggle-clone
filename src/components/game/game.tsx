import React, { useReducer, useState } from 'react';
import { Board } from './board/board';
import { Score } from './score/score';
import { Submission } from './submission/submission';

export type Cell = {
    row: number;
    col: number;
    value: string;
}

type State = {
    potential: string;
    usedCells: Set<Cell>;
}

type Action =
    | { type: 'reset' }
    | { type: 'update', payload: Cell };


function submissionReducer(state: State, action: Action) {
    switch (action.type) {
        case 'update':
            return {
                potential: state.potential + action.payload.value,
                usedCells: new Set<Cell>([...Array.from(state.usedCells), action.payload])
            };
        case 'reset':
            return {
                potential: '',
                usedCells: new Set<Cell>()
            };
        default:
            return state;
    }
};

export const Game: React.FC<{}> = () => {
    const [submissionState, dispatch] = useReducer(submissionReducer, 
        {
            potential: '',
            usedCells: new Set<Cell>()
        }
    );

    const [words, setWords] = useState<string[]>([]);

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
            dispatch({type: 'reset'});
        }
    }

    const handleSelection = (square:Cell) => {
        dispatch({type: 'update', payload: square});
    }
    
    return (
        <div>
            <Board used={submissionState.usedCells} onClick={(square: Cell) => handleSelection(square)}/>
            <Submission word={submissionState.potential} onClick={(candidate: string) => handleSubmission(candidate)}/>
            <Score word={ words.length ? words[words.length -1 ] : '' }/>
        </div>
    )
};