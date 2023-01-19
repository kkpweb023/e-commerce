import React, { useEffect, useState } from 'react';
import './Products.css';
import { useNavigate } from 'react-router-dom';
import Slider from '../../Slider/Slider';
import AddToast from './Toast';
import axios from 'axios';

const Products = () => {

    const navigate = useNavigate();
    const [showA, setShowA] = useState(false);
    const handleClose = () => setShowA(false);
    const [data, setData] = useState([]);


    function showProducts() {
        axios.get('http://localhost:4000/product')
            .then((result) => setData(result.data))
            .catch((error) => console.log("! data fetch failed"));
    }
    useEffect(() => {
        showProducts();
    },[])

    const auth = localStorage.getItem('user');


    function addCartList(cartData) {
        axios.post('http://localhost:4000/cartProduct', {

            id: cartData.id,
            title: cartData.title,
            brand: cartData.brand,
            size: cartData.size,
            color: cartData.color,
            quantity: cartData.quantity,
            price: cartData.price,
            discountPercentage: cartData.discountPercentage,
            deliveryCharge: cartData.deliveryCharge,
            total_amount: cartData.total_amount,
            thumbnail: cartData.thumbnail,
        }).then((result) => {
            if (result.data.id) {
                setShowA(true);  
            }
        })
            .catch((error) => console.log("! 404 post failed"))
    }
    function handleAddCard(cartData) {

       auth ?  addCartList(cartData) 
            : alert("please login") || navigate('/login');
         
    }





    return (
        <div className='Container mb-5'>

            <Slider />
            <AddToast showA={showA} setShowA={setShowA} handleClose={handleClose} />


            <div className='item-div'>

                {
                    data.map((value, index) =>

                        <div id='products' className="ms-4 mt-3" key={index}>
                            <div className='card product-item me-4 mt-4' data-bs-toggle="tooltip" data-bs-placement="top" title="Click to see products details">

                                <img src={value.thumbnail} alt="" className='card-img-top' onClick={() => navigate(`/products-details/${value.id}`)} />

                                <div className='card-body'>
                                    <span className='d-flex justify-content-between '>
                                        <h6 className='card-subtitle mb-2 text-muted fw-light'>{value.category}</h6>
                                        <small className='text-success'>{value.size},{value.color}</small>
                                    </span>

                                    <h5 className='card-title'>{value.title}</h5>

                                    <p className='card-text price'>${value.price}
                                        <span className='flot-end rating-stars'>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </span>
                                    </p>
                                    <div className='text-center'>
                                        <button
                                            className='btn-dark w-100 rounded-2 shadow-none'
                                            onClick={() => handleAddCard(value)}

                                        >Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>

        </div>
    )
}

export default Products