import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
    return (
        <div>
            <h1 className='payment'>Success full Payment !!</h1>
            <Link to={'/services'}> <Button variant="outlined">Continue Shop</Button></Link>
        </div>
    );
};

export default Payment;