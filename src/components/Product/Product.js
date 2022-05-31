import React from 'react';
import { Card, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faBook, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const element = <FontAwesomeIcon icon={faStar} />
    const elements = <FontAwesomeIcon icon={faBook} />
    const arrow = <FontAwesomeIcon icon={faArrowCircleRight} />
    // console.log(props.product)
    const { title, img, lesson, star, starCount, price, id } = props.product;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <div className='lesson'>
                        <p>{elements} {lesson}</p>
                        <span><small className='star'>{element}</small> {star}, ({starCount})</span>
                    </div>
                    <Card.Title> {title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <p className='prices'>Price: <small className='price'>{price}</small></p>
                        <Nav>
                            <Link to={`/course/${id}`}>View more {arrow}</Link>
                        </Nav>
                    </small>
                </Card.Footer>

            </Card>

        </Col>
    );
};

export default Product;