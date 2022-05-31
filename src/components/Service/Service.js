import { Button } from '@mui/material';
import React from 'react';
import Rating from 'react-rating';
import './Service.css';

const Service = (props) => {
    const { name, img, price, seller, stock, star, starCount } = props.service;
    const { handleAddToCart } = props;
    // console.log(props)
    return (
        <div className="card mb-3"  >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> {name}</h5>
                        <div className="displays">
                            <div className='cost'>
                                <p className='totalPrice'>Price: {price}</p>
                                <p className="seller">By: {seller}</p>
                                <p className="stock">only  {stock} left in stock - order soon</p>
                                <Button
                                    onClick={() => handleAddToCart(props.service)}
                                    variant="contained" className='addToCart'>Add to Cart</Button>
                            </div>
                            <div className='rating'>
                                <Rating
                                    initialRating={star}
                                    readonly
                                    emptySymbol="fa fa-star-o fa-2x starIcon"
                                    fullSymbol="fa fa-star fa-2x starIcon"
                                ></Rating>
                                <p className="starCount">rating ({starCount})</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Service;