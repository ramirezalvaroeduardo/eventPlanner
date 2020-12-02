
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
let boxArray=[];

function refreshScreen( event ) {
    event.preventDefault();
    document.querySelector( ".MatrixNumber" ).style.display = "none";
    document.querySelector( ".MatrixIcon" ).style.display = "";
    window.location.reload();
}

function startGame( event ) {
    event.preventDefault();
    for( let boxNumber of document.getElementsByClassName( "MatrixNumber" ) ){
        boxNumber.style.display="block";
    }
    for( let boxNumber of document.getElementsByClassName( "MatrixIcon" ) ){
        boxNumber.style.display="none";
    }
}

function showPlayerForm( event ) {
    event.preventDefault();
    document.querySelector( ".MatrixBox" ).style.display = "none";
    document.querySelector( ".PlayerForm" ).style.display = "block";
}


function TopMenu( props ) {
    boxArray=props.squareCont;
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">CONCENTRESE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link onClick={event => refreshScreen( event )}>Home</Nav.Link>
            <Nav.Link onClick={event => showPlayerForm( event )} href="#AddPlayer">Add Player</Nav.Link>
            <NavDropdown title="Actions" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={event => refreshScreen( event )}>Reset</NavDropdown.Item>
                <NavDropdown.Item onClick={event => startGame( event )}>Start</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
};

export default TopMenu;