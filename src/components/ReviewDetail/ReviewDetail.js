import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewDetail.css';

const ReviewDetail = (props) => {
    const { name, price, quantity, key } = props.service;
    const { handleRemoveItem } = props;
    const navigate = useNavigate();
    const handleShop = () => {
        navigate('/services');
    }
    return (
        <div className="card text-center">
            <div className="card-body card-container">
                <h5 className='names'> {name}</h5>
                <p className="quantity">Quantity: {quantity}</p>
                <h2 className="cart-price">Price: <span>$</span>{price}</h2>
                <div className="button-contuner">
                    <Button
                        onClick={() => handleRemoveItem(key)} variant="contained" color='error'>Remove Item</Button>
                    <span className='removeItem'>
                        <Button onClick={handleShop}
                            variant="contained" color='success'>Continue Shop</Button>
                    </span>
                </div>

            </div>
        </div>
    );
};

export default ReviewDetail;