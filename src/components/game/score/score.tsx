import React, { useEffect, useReducer } from 'react';
import './score.scss';

type Scoreable = {
    word: string;
    points: number;
}

type State = {
    totalPoints: number;
    breakdown: Scoreable[];
}

type Action = {
    type: 'update', 
    payload: Scoreable
}

function calculateValue(word: string): number {
    const len = word.length;
    switch (true) {
        case (len === 3 || len === 4):
            return 1;
        case (len === 5):
            return 2;
        case (len === 6):
            return 3;
        case (len === 7):
            return 5;
        case (len > 7):
            return 11;
        default:
            return 0;
    }
}

export const Score: React.FC<{word: string}> = React.memo((props: {word: string}) => {
    const scoreReducer = (state: State, action: Action) => {
        switch (action.type) {
            case 'update':
                return {
                    totalPoints: state.totalPoints + action.payload.points,
                    breakdown: [...state.breakdown, action.payload]
                }
            default: 
                return state;
        }
    }
    const [score, dispatch] = useReducer(scoreReducer, {totalPoints: 0, breakdown: []});

    useEffect(() => {
        if (props.word) {
            dispatch({
                type: 'update',
                payload: {
                    word: props.word,
                    points: calculateValue(props.word)
                }
            });
        }
    }, [props.word]);
    
    return (
        <table className="table table-striped table-bordered">
            <caption className="sr-only">User Score per word</caption>
            <thead>
                <tr>
                    <th scope="col">Word</th>
                    <th scope="col">Points</th>
                </tr>
            </thead>
            <tbody>
                {score.breakdown.map(item => (
                    <tr key={item.word}>
                        <td>{item.word}</td>
                        <td>{item.points}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <th>Total</th>
                    <td>{score.totalPoints}</td>
                </tr>
            </tfoot>
        </table>
    )
})