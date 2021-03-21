import React from 'react';

export const Board: React.FC<{onClick: Function}> = (props: {onClick: Function}) => {
    // the board is 4x4
    // TODO: Figure out what this actually looks like from a game perspective :/
    const squares = [
        Array(4).fill(null),
        Array(4).fill(null),
        Array(4).fill(null),
        Array(4).fill(null)
    ];

    // Notes:
    // Based on my understanding, there are a total of 16 dice on a 4x4 board
    // Each die contains a letter and the user can only move to adjacent die, including diags
    // This likely means that my board is actually an array of 4 arrays with 4 data elements
    // 
    // this component will need to check the target and verify they connect on each click (pass in x,y eg. Pos 2, Row 1 and use that as the outbound click?)
    // it will also ideally keep track of the previous clicked die in case we decide to un-click it and unwind the word
    // this will kick the composite word out on click assuming the word passes checks the scoring and submission pieces handle the rest
    return (
        <div>

        </div>
    )
}