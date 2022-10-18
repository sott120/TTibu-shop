import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";

let data = [
    {
        id: 0,
        title: "White and Black",
        content: "Born in France",
        price: 120000,
    },

    {
        id: 1,
        title: "Red Knit",
        content: "Born in Seoul",
        price: 110000,
    },

    {
        id: 2,
        title: "Grey Yordan",
        content: "Born in the States",
        price: 130000,
    },
];

function Content(props) {
    return props.shoes.map((el, i) => {
        return (
            <Col md={4} key={i}>
                <img
                    src={
                        "https://codingapple1.github.io/shop/shoes" +
                        (props.shoes[i].id + 1) +
                        ".jpg"
                    }
                    alt=""
                    width="80%"
                />
                <h4>{props.shoes[i].title}</h4>
                <p>{props.shoes[i].price}</p>
            </Col>
        );
    });
}

export { data, Content };
