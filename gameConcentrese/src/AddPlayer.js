
import React from 'react';
import Form from 'react-bootstrap/Form';
import './AddPlayer.css';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function AddPlayerForm() {
    return(
        <div className='PlayerForm'>
            <Form>
                <Form.Group controlId="formGroupFullName">
                    <Form.Label>Player Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Player Full Name" />
                </Form.Group>
                <Form.Group controlId="formGroupAlias">
                    <Form.Label>Alias</Form.Label>
                    <Form.Control type="text" placeholder="Alias" />
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </div>
    )
}

export default AddPlayerForm;