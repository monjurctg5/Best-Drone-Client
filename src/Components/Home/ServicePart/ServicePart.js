import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Spinner from '../../Shared/Spinner/Spinner';
// import useAuth from '../../hooks/useAuth';
import AOS from 'aos';
AOS.init();

const ServicePart = () => {
    const [products, setProducts] = useState([])
    const { user, isLoading } = useAuth()
    useEffect(() => {
        fetch('https://hidden-inlet-96106.herokuapp.com/products/home')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    if (isLoading) {
        <Spinner></Spinner>

    }
    return (
        <div>
            <div className="top-destination" >
                <h1>Best Drone</h1>
            </div>
            <div className="container text-center">
                <div className="row  row-cols-sm-1  row-cols-md-2 row-cols-lg-3 g-4 ">
                    {
                        products.map(product => (
                            <div className="col" data-aos="flip-left">
                                <div class="card service-card-custom  " style={{ width: "18rem" }}>
                                    <img src={product.img}
                                        class="card-img-top" height="200px" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{product.ServiceName}</h5>
                                        <p>{product.sortTitle.slice(0, 26)}</p>
                                        <Link to={`/placeOrder/${product._id}`} class="btn btn-danger"
                                        >purchase Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </div>
    );
};

export default ServicePart;