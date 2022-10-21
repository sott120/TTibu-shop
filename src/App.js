/* eslint-disable */
import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import bg from "./img/bg.png";
import data from "./data";
import Detail from "./pages/Detail";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from "axios";

function App() {
    let [shoes, setShoes] = useState(data);
    let navigate = useNavigate();//use어쩌구는 훅의 일종. 훅: 유용한것들이 들어있는 함수같은거
    return (
        <div className="App">
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand onClick={()=>{navigate("/")}}>TTibu Shop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate("/detail/0");
                            }}
                        >
                            Detail
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
                            <div
                                className="main-bg"
                                style={{ backgroundImage: "url(" + bg + ")" }}
                            ></div>
                            <Container>
                                <Row>
                                    {shoes.map((el, i) => {
                                        return (
                                            <Content shoes={shoes[i]} i={i} key={i} />
                                        );
                                    })}
                                </Row>
                            </Container>
                            <button onClick={()=>{
                                axios.get("https://codingapple1.github.io/shop/data2.json").then((result)=>{
                                    let copyShoes = [...shoes, ...result.data];
                                    setShoes(copyShoes);
                                })
                                .catch(()=>{
                                    console.log('실패');
                                })
                            }}>더보기</button>
                        </>
                    }
                />
                <Route path="*" element={<div>404페이지</div>} />
                <Route path="/detail/:params" element={<Detail shoes={shoes}/>} />
                {/* :id url파라미터 */}
                <Route path="/about" element={<About />}>
                    <Route path="member" element={<div>멤버페이지입니다.</div>} />
                    <Route path="location" element={<About />} />
                    {/* 라우트안에 라우트 nested routes /about/member 이랑 같다 상위주소에있는거랑 같이 보여줌*/}
                </Route>
                <Route path="/event" element={ <Event />}>
                    <Route path="one" element={ <div>신규가입 쿠폰 받기</div> }></Route>
                    <Route path="two" element={ <div>구매 후기 쓰고 포인트 받기</div> }></Route>
                </Route>
            </Routes>
        </div>
    );
}

function Content(props) {
    let navigate = useNavigate();
     return (
         <Col md={4} onClick={()=>{navigate("/detail/" + props.i)}}>
             <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i+1) +".jpg"} alt="" width="80%"/>
             <h4>{props.shoes.title}</h4>
             <p>{props.shoes.price}</p>
         </Col>
     );
}

function About(){
    return(
        <div>
            <h4>회사 정보</h4>
            <Outlet></Outlet>
            {/* nested routes의 element 보여주는곳은 Outlet */}
        </div>
    )
}

function Event(){
    return(
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div>
    )
}
export default App;
