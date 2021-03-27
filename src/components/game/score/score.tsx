import React, { useEffect, useState } from 'react';
import './score.scss';

type Scoreable = {
    word: string;
    points: number;
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

export const Score: React.FC<{words: string[]}> = (props: {words: string[]}) => {
    const [totalPoints, setTotalPoints] = useState(0);
    const [breakdown, setBreakdown] = useState<Scoreable[]>([]);

    useEffect(() => {
        let total = 0;
        if (props.words?.length) {
            const calcBreakdown = props.words.map(word => {
                const points = calculateValue(word);
                total += points;

                return {
                    word: word,
                    points: points
                }
            });

            setTotalPoints(total);
            setBreakdown(calcBreakdown);
        }
    }, [props.words]);
    
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
                {breakdown.map(item => (
                    <tr key={item.word}>
                        <td>{item.word}</td>
                        <td>{item.points}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <th>Total</th>
                    <td>{totalPoints}</td>
                </tr>
            </tfoot>
        </table>
    )
}