
import React from 'react';
import Button from 'react-bootstrap/Button';
import './MatrixBox.css'
import './playerBox.css'
import TopMenu from './TopMenu';
import PlayerBox from './playerBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let chosenBoxes=[];
let canPlay = false;
let playerBool=false;
let playerTurn="S0";

function MatrixBox( props ){
    return (
        <Button variant='primary' size='lg' onClick={ props.onClick }
            className='MatrixButton' value={ props.value } id={ props.id }>
            <i className='fa fa-star MatrixNumber'>{ props.id }</i>
            <FontAwesomeIcon className='MatrixIcon' icon={ props.iconVal } />
        </Button>
    )
}

function startGame() {
    for( let boxNumber of document.getElementsByClassName( "MatrixNumber" ) ){
        boxNumber.style.display="block";
    }
    for( let boxNumber of document.getElementsByClassName( "MatrixIcon" ) ){
        boxNumber.style.display="none";
    }
}

function refreshScreen() {
    document.querySelector( ".MatrixNumber" ).style.display = "none";
    document.querySelector( ".MatrixIcon" ).style.display = "";
    window.location.reload();
}


function handleAction( event ){
    event.preventDefault();
    let actionItem = document.getElementById( "PHeader" );
    if( actionItem.textContent === "Start") {
        canPlay = true;
        actionItem.textContent = "Reset";
        let firstPlayer = document.getElementById( "P0" );
        let secondPlayer = document.getElementById( "P1" );
        firstPlayer.parentElement.style.background = "rgb(0, 100, 170)";
        secondPlayer.parentElement.style.background = "rgb(170, 40, 10)";
        startGame();
    } else {
        canPlay = false;
        actionItem.textContent = "Start";
        refreshScreen();
    }
}

function switchPlayer(){
    let currPlayerScoreNumber = "S" + Number( playerBool );
    let currPlayer = document.getElementById( currPlayerScoreNumber );
    currPlayer.parentElement.style.background = "rgb(170, 40, 10)";
    playerBool = !playerBool;
    let nextPlayerScoreNumber = "S" + Number( playerBool );
    let nextPlayer = document.getElementById( nextPlayerScoreNumber );
    nextPlayer.parentElement.style.background = "rgb(0, 100, 170)";
    return nextPlayerScoreNumber;
}

function increaseScore( PlayerSC ){
    let playerScore = document.getElementById( PlayerSC );
    playerScore.textContent = Number( playerScore.textContent ) + 1
}

function handleChosenBoxes( boxPair ){
    if( boxPair[0].chosenIconId === boxPair[1].chosenIconId ) {
        // Selections Matched
        boxPair[0].targetElement.onclick = "function(){return false}";
        boxPair[1].targetElement.onclick = "function(){return false}";
        boxPair[0].targetElement.disabled = "disabled";
        boxPair[0].targetElement.style.background =  "rgb(5, 100, 5)";
        boxPair[1].targetElement.disabled = "disabled";
        boxPair[1].targetElement.style.background =  "rgb(5, 100, 5)";
        increaseScore( playerTurn );
    } else {
        // Selections DO NOT Match
        boxPair[0].targetElement.children[0].style.display = "block";
        boxPair[0].targetElement.children[1].style.display = "none";
        boxPair[1].targetElement.children[0].style.display = "block";
        boxPair[1].targetElement.children[1].style.display = "none";
        playerTurn = switchPlayer();
    }
    chosenBoxes=[];
}

function checkClickedButton( event ){
    event.preventDefault();
    let chosenObj={};
    let chosenId=0;
    let chosenIconId=0;
    let targetButton=event.target;
    let targetElement;
    if( canPlay &&
        !(
            targetButton.attributes.disabled || 
            targetButton.parentElement.attributes.disabled ||
            targetButton.parentElement.parentElement.attributes.disabled
        )
    ) {
        if( targetButton.type === 'button' ) {
            //console.log( event.target.children[1].attributes[3].value );
            chosenIconId=targetButton.attributes.value.value;
            chosenId=targetButton.attributes.id.value;
            targetElement=targetButton;
            targetElement.children[0].style.display="none";
            targetElement.children[0].style.transition="opacity 1s ease-out";
            targetElement.children[0].style.opacity="1";
            targetElement.children[1].style.display = "";
            targetElement.children[1].style.opacity="1";
        } else {
            if( targetButton.parentElement.localName === 'button' && ! targetButton.parentElement.disabled ){
                //console.log( event.target.attributes[3].value );
                chosenIconId=targetButton.parentElement.attributes.value.value;
                chosenId=targetButton.parentElement.attributes.id.value;
                targetElement=targetButton.parentElement;
                targetElement.children[0].style.display="none";
                targetElement.children[0].style.transition="opacity 1s ease-out";
                targetElement.children[0].style.opacity="1";
                targetElement.children[1].style.display = "";
                targetElement.children[1].style.opacity="1";
            } else {
                //console.log( event.target.parentElement.attributes[3].value );
                chosenIconId=targetButton.parentElement.parentElement.attributes.value.value;
                chosenId=targetButton.parentElement.parentElement.attributes.id.value;
            }
        }
        chosenObj['chosenId']=chosenId;
        chosenObj['chosenIconId']=chosenIconId;
        chosenObj['targetElement']=targetElement;
        if( chosenBoxes.length === 0 ) {
            chosenBoxes.push( chosenObj );
        } else if( chosenBoxes.length === 1 && chosenId !== chosenBoxes[0].chosenId ) {
            chosenBoxes.push( chosenObj );
            // Make decision to increase result or return boxes //
            setTimeout(
                function(){
                    handleChosenBoxes( chosenBoxes );
                },
                250
            );
        }
    }
}

function MatrixGroup( props ) {
    let boxArray=props.squareCont;
    let fasArray=props.fasArray;
    let minVal=0;
    let maxVal=0;
    let boxObj={};

    // Loop to assign random values per pair of squares
    for( let counter=1; counter<=( Number( props.numBox ) ); counter++ ) {
        if( boxObj[counter] === undefined ) {
            // Assign random value to current square
            minVal=Math.ceil( 1 );
            maxVal=Math.floor( 1002 );
            boxObj[counter]=Math.floor( Math.random() * ( maxVal - minVal + 1 ) + minVal );
            // Assign a value to random Square pair
            minVal=Math.ceil( counter );
            maxVal=Math.floor( Number( props.numBox ) );
            var selBox=Math.floor( Math.random() * ( maxVal - minVal + 1 ) + minVal );
            while( boxObj[selBox] !== undefined ) {
                selBox=Math.floor( Math.random() * ( maxVal - minVal + 1 ) + minVal );
            }
            boxObj[selBox]=boxObj[counter];
        }
    }
    // Loop to set array of values chosen
    boxArray=[];
    for( let item in boxObj ){
        boxArray.push( boxObj[item] );
    }

    return (
        <div>
            <TopMenu squareCont={boxArray} canPlay={canPlay} />
            <div className="PlayerBox">
                <PlayerBox key={1} headerId="P0" scoreId="S0" cardHeader="Player 1" playerScore="0" className="PlayerCard"/>
                <PlayerBox key={3} id="Action" 
                    cardHeader="Start"
                    name="Start"
                    headerId="PHeader"
                    playerScore="" 
                    className="ActionButton"
                    onClick={event => handleAction( event )}/>
                <PlayerBox key={2} headerId="P1" scoreId="S1" cardHeader="Player 2" playerScore="0" className="PlayerCard"/>
            </div>
            <h1 className='Title'>CONCENTRESE</h1>
            <div className='MatrixBox'>
                {boxArray.map(( boxId, index ) => (
                    <MatrixBox key={index + 1} 
                        onClick={event => checkClickedButton( event )} 
                        id={index + 1} 
                        value={boxId} 
                        iconVal={fasArray[boxId]}
                    >
                    </MatrixBox>
                ))}
            </div>
        </div>
    )
}

export default MatrixGroup;