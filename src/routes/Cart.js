import { Table } from "react-bootstrap";
import { useSelector } from "react-redux"

function Cart(){
    let myCart = useSelector((state)=>{ return state.myCart })
    //스토어에있던 모든 스테이트가 a에 저장됨
    return (
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
                {myCart.map((el, i)=>{
                    return (
                        <tr key={i}>
                            <td>{myCart[i].id}</td>
                            <td>{myCart[i].name}</td>
                            <td>{myCart[i].count}</td>
                            <td></td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}

export default Cart