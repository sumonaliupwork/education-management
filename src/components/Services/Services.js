import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToDb, setStoreDb } from '../../utilitise/fake';
import Cart from '../Cart/Cart';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    const [cart, setCart] = useState([]);
    const [serchText, setSerchText] = useState([]);
    // console.log(cart)
    const handleSearchBox = (event) => {
        const serchValue = event.target.value;
        const addedProducts = services.filter(service => service.name.toLowerCase().includes(serchValue.toLowerCase()));
        setSerchText(addedProducts);
        // console.log(addedProducts.length)
    }
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setSerchText(data)
            })
    }, [])
    useEffect(() => {
        if (services.length) {
            const saveStore = setStoreDb();
            let storeCart = [];
            for (const key in saveStore) {
                const addedService = services.find(service => service.key === key);
                if (addedService) {
                    const quantity = saveStore[key];
                    addedService.quantity = quantity;
                    storeCart.push(addedService);
                }
            }
            setCart(storeCart);
        }
    }, [services])
    const handleAddToCart = product => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.key)
    }

    return (
        <>
            <div className="serchBox">
                <InputGroup
                    onChange={handleSearchBox}
                    className="mb-3">
                    <FormControl
                        placeholder="Search your products"
                    />
                </InputGroup>
            </div>

            <div className='services-container'>
                {services.length === 0 ?
                    <Spinner className='spinners' animation="border" /> :
                    <div className="service-product">

                        {
                            serchText.map(service => <Service
                                key={service.key}
                                service={service}
                                handleAddToCart={handleAddToCart}
                            ></Service>)
                        }

                    </div>
                }

                <div className="service-cart">
                    <Cart card={cart}>
                        <Link to={'/review'}>
                            <Button variant="contained">Order Review</Button>
                        </Link>
                    </Cart>
                </div>

            </div>
        </>
    );
};

export default Services;
