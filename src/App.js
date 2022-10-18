/* eslint-disable */
import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import bg from "./img/bg.png";
import { data, Content } from "./data";

function App() {
    let [shoes, setShoes] = useState(data);
    return (
        <div className="App">
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">TTibu Shop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Chart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div
                className="main-bg"
                style={{ backgroundImage: "url(" + bg + ")" }}
            ></div>

            <Container>
                <Row>
                    <Content shoes={shoes} setShoes={setShoes} />
                </Row>
            </Container>
        </div>
    );
}

export default App;
