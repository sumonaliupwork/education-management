import React from 'react';
import { Card } from 'react-bootstrap';
import './Cart.css';

const Cart = (props) => {
    const { card } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of card) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;

    }
    const charge = total > 0 ? 15 : 0;
    const taxt = (total + charge) * .10;
    const totalPay = total + charge + taxt;
    return (
        <Card style={{ width: '18rem' }} className='cards'>
            <Card.Body>
                <Card.Title> Order Summary:</Card.Title>
                <h5>Order Items: {totalQuantity}</h5>
                <h6>Price: <span>$</span>{total.toFixed(2)} </h6>
                <h6>Chage: <span>$</span>{charge}</h6>
                <h6>Taxt: <span>$</span>{taxt.toFixed(2)}</h6>
                <h4 ><span className='totalPay'>Total Pay:</span> <span>$</span>{totalPay.toFixed(2)}</h4>
                {props.children}
            </Card.Body>
        </Card>
    );
};

export default Cart;