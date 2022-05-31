import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useProduct } from '../../hooks/useProducct';
import { clearDb, removeDb } from '../../utilitise/fake';
import Cart from '../Cart/Cart';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import './Review.css';

const Review = () => {
    const [services, setServices] = useProduct();
    const [cart, setCart] = useCart(services);

    const handleRemoveItem = (key) => {
        const newCart = cart.filter(carts => carts.key !== key);
        setCart(newCart);
        removeDb(key);
    }
    const navigate = useNavigate();
    const handleRemoveDisplay = () => {
        navigate('/payment');
        setCart([]);
        clearDb();
    }
    return (
        <div className='review'>
            <div className="review-item">
                <Container>
                    {
                        cart.map(service => <ReviewDetail
                            service={service}
                            handleRemoveItem={handleRemoveItem}
                        ></ReviewDetail>)
                    }
                </Container>

            </div>
            <div className="review-cart">
                <Cart card={cart}>
                    <Button
                        onClick={handleRemoveDisplay}
                        variant="contained">Place Order</Button>
                </Cart>
            </div>

        </div>
    );
};

export default Review;