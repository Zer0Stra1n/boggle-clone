import React, { useState } from 'react';
import { Board } from './board/board';
import { Score } from './score/score';
import { Submission } from './submission/submission';

export const Game: React.FC<{}> = () => {
    const [words, setWords] = useState<string[]>([]);
    const [potential, setPotential] = useState<string>('');

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
        }
    }

    const handleSelection = (letter:string) => {
        setPotential(potential + letter);
    }
    
    return (
        <div>
            <Board onClick={(letter: string) => handleSelection(letter)}/>
            <Submission word={potential} onClick={(candidate: string) => handleSubmission(candidate)}/>
            <Score words={words}/>
        </div>
    )
};