import React from 'react';
import './game-row.scss';

export const GameRow: React.FC<{cells: string[], rowIndex: number, onClick: Function}> = (props: {cells: string[], rowIndex: number, onClick: Function}) => {
    return (
        <div className="game-row">
            {props.cells.map((square, index) => (
                <div key={index} className="square" onClick={() => {}}>{square}</div>
            ))}
        </div>
    )
};