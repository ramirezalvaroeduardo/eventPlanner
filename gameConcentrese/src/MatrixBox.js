

import React from 'react';
import Button from 'react-bootstrap/Button';
import './MatrixBox.css'
import TopMenu from './TopMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let chosenBoxes=[];

function MatrixBox( props ){
    return (
        <Button variant='primary' size='lg' onClick={ props.onClick }
            className='MatrixButton' value={ props.value } id={ props.id }>
            <i className='fa fa-star MatrixNumber'>{ props.id }</i>
            <FontAwesomeIcon className='MatrixIcon' icon={ props.iconVal } />
        </Button>
    )
}

function handleChosenBoxes( boxPair ) {
    console.log( boxPair );
    if( boxPair[0].chosenIconId === boxPair[1].chosenIconId ) {
        alert( `You Got It!...\n\nBox: ${boxPair[0].chosenId} matches ${boxPair[0].chosenId}.` );
    }
    chosenBoxes=[];
}

function checkClickedButton( event ){
    event.preventDefault();
    let chosenObj={};
    let chosenId=0;
    let chosenIconId=0;
    let targetButton=event.target;
    if( targetButton.type === 'button' ) {
        //console.log( event.target.children[1].attributes[3].value );
        chosenIconId=targetButton.attributes.value.value;
        chosenId=targetButton.attributes.id.value;
        targetButton.children[0].style.display = "none";
        targetButton.children[1].style.display = "";
    } else {
        if( event.target.parentElement.localName === 'button' ){
            //console.log( event.target.attributes[3].value );
            chosenIconId=targetButton.parentElement.attributes.value.value;
            chosenId=targetButton.parentElement.attributes.id.value;
            targetButton.parentElement.children[0].style.display = "none";
            targetButton.parentElement.children[1].style.display = "";
        } else {
            //console.log( event.target.parentElement.attributes[3].value );
            chosenIconId=targetButton.parentElement.parentElement.attributes.value.value;
            chosenId=targetButton.parentElement.parentElement.attributes.id.value;
        }
    }
    chosenObj['chosenId']=chosenId;
    chosenObj['chosenIconId']=chosenIconId;
    if( chosenBoxes.length === 0 ) {
        chosenBoxes.push( chosenObj );
    } else if( chosenBoxes.length === 1 && chosenId !== chosenBoxes[0].chosenId ) {
        chosenBoxes.push( chosenObj );
        // Make decision to increase result or return boxes //
        handleChosenBoxes( chosenBoxes );
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
            <TopMenu squareCont={boxArray} />
            <h1 className='Title'>CONCENTRESE</h1>
            <div className='MatrixBox'>
                {boxArray.map(( boxId, index ) => (
                    <MatrixBox key={index + 1} 
                        onClick={event => checkClickedButton( event )} 
                        id={index + 1} 
                        value={boxId} 
                        iconVal={fasArray[boxId]}>
                    </MatrixBox>
                ))}
            </div>
        </div>
    )
}

export default MatrixGroup;