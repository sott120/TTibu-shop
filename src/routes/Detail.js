/* eslint-disable */
import { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

import { Context1 } from "../App.js";

let YellowBtn = styled.button`
    background: ${(props) => props.bg};
    color: ${(props) => props.bg == 'blue' ? "white" : "black"};
    padding: 10px;
`;
let Box = styled.div`
    background-color : grey;
    padding : 20px;
`

// let NewBtn = styled.button(YellowBtn)`
// `


function Detail(props) {
    let {params} = useParams();
    let findId = props.shoes.find( (e) => e.id == params);
    let [myalert, setAlert] = useState(true);
    let [num, setNum] = useState("");
    let [tabMenu, setTabMenu] = useState(0);
    let [fade2, setFade2] = useState("");

    useEffect(() => {
        if (isNaN(num) == true) {
            alert("그러지마세요");
        }
    }, [num])
    
    useEffect(()=>{
        setFade2("end");
        return()=>{
            setFade2("");
        }
    },[])

    return (
        <div className={"container start " + fade2}>
            {/* <Box>
                <YellowBtn bg="blue">버튼</YellowBtn>
                <YellowBtn bg="orange">버튼</YellowBtn>
                props 문법 컴포넌트 재활용 가능
            </Box> */}
            {myalert && (
                <div className="alert alert-warning">2초이내 구매시 할인</div>
            )}
            <input
                type="text"
                onChange={(e) => {
                    setNum(e.target.value);
                }}
            />
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={
                            "https://codingapple1.github.io/shop/shoes" +
                            (findId.id + 1) +
                            ".jpg"
                        }
                        width="100%"
                    />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findId.title}</h4>
                    <p>{findId.content}</p>
                    <p>{findId.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item
                    onClick={() => {
                        setTabMenu(0);
                    }}
                >
                    <Nav.Link eventKey="link0">Option1</Nav.Link>
                </Nav.Item>
                <Nav.Item
                    onClick={() => {
                        setTabMenu(1);
                    }}
                >
                    <Nav.Link eventKey="link1">Option2</Nav.Link>
                </Nav.Item>
                <Nav.Item
                    onClick={() => {
                        setTabMenu(2);
                    }}
                >
                    <Nav.Link eventKey="link2">Option3</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tabMenu={tabMenu} />
        </div>
    );
}

function TabContent({ tabMenu }) {
    let { items, shoes } = useContext(Context1); //디트스럭처링문법?
    let [fade , setFade] = useState('');
    useEffect(()=>{
        let time = setTimeout(() => { setFade("end") }, 100);
        return() => {
            clearTimeout(time);
            setFade("");
        }
    },[tabMenu])

    return (
        <div className={"start " + fade}>
            {[<div>{items[0]}</div>, <div>내용1</div>, <div>내용2</div>][tabMenu]}
        </div>
    );
}

export default Detail;