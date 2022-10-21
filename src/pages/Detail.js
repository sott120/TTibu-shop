/* eslint-disable */
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
    let [alert, setAlert] = useState(true);
    
    useEffect(()=>{
        //라이프사이클 훅 마운트, 업데이트 시 실행
        let a = setTimeout(() => {
            setAlert(false);
        }, 2000);
        return ()=>{
            clearTimeout(a)
        }
    },[])//마운트될때만 한번 실행.
    
    return (
        <div className="container">
            {/* <Box>
                <YellowBtn bg="blue">버튼</YellowBtn>
                <YellowBtn bg="orange">버튼</YellowBtn>
                props 문법 컴포넌트 재활용 가능
            </Box> */}
            {alert && <div  className="alert alert-warning">2초이내 구매시 할인</div>}
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
        </div>
    );
}

export default Detail;