import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Views = () => {
    const ahsan = useParams();
    console.log(ahsan)
    return (
        <div>
            <h2> Title: </h2>
            <Link to={'/home'}>back home</Link>
        </div>
    );
};

export default Views;