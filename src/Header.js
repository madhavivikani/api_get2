import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home" className='logo'>JSONPlaceholder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#"> <Link to="/home">HOME</Link></Nav.Link>
                            <Nav.Link href="#"> <Link to="/posts">POSTS</Link></Nav.Link>
                            <Nav.Link href="#"> <Link to="/comments">COMMENTS</Link></Nav.Link>
                            <Nav.Link href="#"> <Link to="/albums">ALBUMS</Link></Nav.Link>
                            <Nav.Link href="#"> <Link to="/photos">PHOTOS</Link></Nav.Link>
                            <Nav.Link href="#"> <Link to="/todos">TODOS</Link></Nav.Link>
                            <Nav.Link href="#"> <Link to="/users">USERS</Link></Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header; 