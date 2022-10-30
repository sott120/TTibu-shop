/* eslint-disable */
import "./App.css";
import { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import bg from "./img/bg.png";
import data from "./data";
import Detail from "./routes/Detail";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from "axios";
import Cart from "./routes/Cart";

export let Context1 = createContext();

localStorage.setItem("views", JSON.stringify([]));


function App() {
    let [shoes, setShoes] = useState(data);
    let navigate = useNavigate();//use어쩌구는 훅의 일종. 훅: 유용한것들이 들어있는 함수같은거
    let [btnCount,setBtnCount] = useState(2);
    let [text,setText] = useState('');
    let [items, setItems] = useState([10,11,12]);
    return (
        <div className="App">
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand onClick={()=>{navigate("/")}}>TTibu Shop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link
                            onClick={() => {
                                navigate("/detail/0");
                            }}
                        >
                            Detail
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate("/cart");
                            }}
                        >
                            Cart
                        </Nav.Link>
                        {/* <Nav.Link onClick={()=>{navigate(-1)}}>뒤로가기</Nav.Link> */}
                        {/* <Link className="nav_link" to="/">Home</Link>
                        <Link className="nav_link" to="/detail">Detail</Link> */}
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="main-bg" style={{ backgroundImage: "url(" + bg + ")" }}></div>
                            <Container>
                                <Row>
                                    {shoes.map((el, i) => {
                                        return (
                                            <Content shoes={shoes[i]} id={el.id} i={i} key={i} />
                                        );
                                    })}
                                </Row>
                            </Container>
                            {text}
                            {btnCount == 4 ? null : <button onClick={()=>{
                                setText("로딩중입니다.");
                                axios.get("https://codingapple1.github.io/shop/data"+ btnCount +".json").then((result)=>{
                                let copyShoes = [...shoes, ...result.data];
                                setShoes(copyShoes);
                                setText("");
                                })
                                .catch(()=>{
                                    console.log('실패');
                                     setText("");

                                    alert("상품이 없습니다.");
                                })
                            
                                setBtnCount(btnCount+1);
                               
                                

                            }}>더보기</button>}
                        </>
                    }
                />
                <Route path="*" element={<div>404페이지</div>} />
                <Route path="/detail/:params" element={
                <Context1.Provider value={{items,shoes}}>
                    <Detail shoes={shoes}/>
                </Context1.Provider>
                } />
                {/* :id url파라미터 */}
                <Route path="/cart" element={ <Cart /> } />
            </Routes>
        </div>
    );
}

function Content(props) {
    let navigate = useNavigate();
     return (
         <Col md={4} onClick={()=>{
            navigate("/detail/" + props.i);
            view(props.id)
            }}>
             <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i+1) +".jpg"} alt="" width="80%"/>
             <h4>{props.shoes.title}</h4>
             <p>{props.shoes.price}</p>
         </Col>
     );
}

function view(i){
    let getViews = JSON.parse(localStorage.getItem('views'));
    console.log(getViews)
    let a = new Set(getViews);
    a.add(i)
    localStorage.setItem('views', JSON.stringify([...a]))
}

export default App;
