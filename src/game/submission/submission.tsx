import React from 'react';
import './submission.scss';

export const Submission: React.FC<{onClick: Function, word: string}> = (props: {onClick: Function, word: string}) => {
    return (
        <div className="submission-wrapper">
            <div className="label">Current Word</div>
            <div className="input-wrapper">
                <div>{props.word}</div>
                <button className="btn btn-primary" onClick={() => {props.onClick(props.word)}}>Submit</button>
            </div>
        </div>
    )
};