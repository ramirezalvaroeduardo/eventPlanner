
import React from 'react';
import Form from 'react-bootstrap/Form';
import './AddPlayer.css';
import Button from 'react-bootstrap/Button';

let playerNames = [];
function submitPlayer( event ){
    event.preventDefault();
    if( playerNames.length < 2 ) {
        let playerName = document.getElementsByName( "playerName" );
        if( playerName[0].value === "" || playerName[0].value.length > 12 ) {
            alert( "Player Name should not be empty or longer than 12 characters." )
        } else {
            let playerHeader = document.getElementById( "P" + playerNames.length );
            playerNames.push( playerName[0].value );
            playerHeader.textContent = playerName[0].value;
            playerName[0].value = "";
        }
    } 
    if( playerNames.length === 2 ) {
        showMatrixForm();
    }
}

function showMatrixForm() {
    document.querySelector( ".MatrixBox" ).style.display = "block";
    document.querySelector( ".PlayerForm" ).style.display = "none";
}

function AddPlayerForm() {
    return(
        <div className='PlayerForm'>
            <h3>Player Name Form</h3>
            <Form>
                <Form.Group controlId="formGroupFullName">
                    <Form.Label>Player Name</Form.Label>
                    <Form.Control name="playerName" type="text" placeholder="Player Name" required/>
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit" onClick={event => submitPlayer( event )}>
                Submit
            </Button>
        </div>
    )
}

export default AddPlayerForm;