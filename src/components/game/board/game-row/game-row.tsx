import React from 'react';
import { Cell } from '../../game';
import './game-row.scss';

export const GameRow: React.FC<{cells: Cell[], used: Set<Cell>,  onClick: Function}> = (props: {cells: Cell[], used: Set<Cell>, onClick: Function}) => {
    return (
        <div className="game-row">
            {props.cells.map((square, index) => (
                <div key={square.value + index} className={`square ${props.used.has(square) ? 'selected' : ''}`} onClick={() => {props.onClick(square)}}>{square.value}</div>
            ))}
        </div>
    )
};