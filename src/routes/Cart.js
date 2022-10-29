import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAge } from "./../store/userSlice";
import { cartIncrease, cartDecrease } from "./../store";

function Cart(){
    let state = useSelector((state)=>{ return state });
    //스토어에있던 모든 스테이트가 변수 state에 저장됨
    let dispatch = useDispatch();
    return (
        <div>
            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button onClick={()=>{dispatch(changeAge(10))}}>버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {state.myCart.map((el, i) => {
                        return (
                            <tr key={i}>
                                <td>{state.myCart[i].id}</td>
                                <td>{state.myCart[i].name}</td>
                                <td>{state.myCart[i].count}</td>
                                <td>
                                    <button onClick={()=>{dispatch(cartIncrease(state.myCart[i].id));}}>
                                        +
                                    </button>
                                    <button onClick={()=>{dispatch(cartDecrease(state.myCart[i].id));}}>
                                        -
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default Cart