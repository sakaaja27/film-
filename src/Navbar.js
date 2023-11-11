import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Navbar,Nav,NavDropdown} from 'react-bootstrap';



const Navawal = () => {
    return (
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-white'>Horror</Nav.Link>
            <Nav.Link href="#trend" className='text-white'>Trends</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navawal