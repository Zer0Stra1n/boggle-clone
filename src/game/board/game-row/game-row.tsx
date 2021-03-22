import React from 'react';
import { Cell } from '../board';
import './game-row.scss';

export const GameRow: React.FC<{cells: Cell[], onClick: Function}> = (props: {cells: Cell[], onClick: Function}) => {
    return (
        <div className="game-row">
            {props.cells.map((square, index) => (
                <div key={index} className="square" onClick={() => {props.onClick(square)}}>{square.value}</div>
            ))}
        </div>
    )
};