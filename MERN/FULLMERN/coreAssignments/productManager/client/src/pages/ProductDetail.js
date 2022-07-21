import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetail = (props) => {
    // STATE
    const [product, setProduct] = useState()

    const { products, refresh } = props

    // PARAMS for specific Product id
    const { product_id } = useParams()

    // USE EFFECT AXIOS
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + product_id)
            .then(res => setProduct(res.data))
            .catch(error => console.log(error))
    }, [product_id])

    // DELETE FUNCTION
    const destroyProduct = (product_id) => {
        console.log(product_id)
        axios.delete("http://localhost:8000/api/products/" + product_id)
            .then(res => refresh())
            .catch(error => console.log(error))
    }
    
    return (
        <div className='container m-auto'>
            {
                (product) ?
                    <>
                        <div className="card-body">
                            <h5 className="card-title">Title: {product.title}</h5>
                            <h6 className="card-subtitle mb-2">Price: $ {product.price}</h6>
                            <p className="card-text">Description: {product.description}</p>
                        </div>
                    </> : <h1>Loading...</h1>
            }
            
        </div>
        
    )
}

export default ProductDetail

