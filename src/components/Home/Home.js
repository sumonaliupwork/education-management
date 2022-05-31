import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            {products.length === 0 ?
                <Spinner className='spinners' animation="border" /> :
                <Container >
                    <Row xs={1} md={3} className="g-4 mt-3">
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                            ></Product>)
                        }
                    </Row>
                </Container>
            }


        </div>
    );
};

export default Home;