
//import Card from 'react-bootstrap/Card';
import React from 'react';
import Button from 'react-bootstrap/Button';
import './playerBox.css'

function playerBox( props ) {
    let playerId=props.id;
    let cardHeader=props.cardHeader;
    let playerScore=props.playerScore;
    let className=props.className;
    return (
        <Button id={playerId} value={playerId} className={className} onClick={props.onClick}>
            <p id={props.headerId}>{cardHeader}</p>
            <p id={props.scoreId}>{playerScore}</p>
        </Button>
    )
}

export default playerBox;