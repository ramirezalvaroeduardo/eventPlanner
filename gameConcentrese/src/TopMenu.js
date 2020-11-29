
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

//import 'bootstrap/dist/css/bootstrap.min.css';


function refreshScreen( event ) {
    event.preventDefault();
    window.location.reload();

}

function TopMenu() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">CONCENTRESE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#AddPlayer">Add Player</Nav.Link>
            <NavDropdown title="Options" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={event => refreshScreen( event )} href="#Reset">Reset</NavDropdown.Item>
                <NavDropdown.Item href="#Size">Size</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    )
};

export default TopMenu;