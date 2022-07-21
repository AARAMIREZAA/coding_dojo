import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setproduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setproduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>First Name: {product.title}</p>
            <p>Last Name: {product.price}</p>
            <p>Last Name: {product.description}</p>
        </div>
    )
}
    
export default Detail;

