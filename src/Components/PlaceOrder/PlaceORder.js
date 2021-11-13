import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';

import './plcaeOrder.css'
import Nav from '../Shared/Nav/Nav';
import Footer from '../Shared/Footer/Footer';
const PlaceORder = () => {
    const history = useHistory()
    var today = new Date();

    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date
    const { id } = useParams()
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://hidden-inlet-96106.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)
            })
    }, [])

    const onSubmit = (data) => {
        const newClientData = {
            clientName: user.displayName,
            email: user.email,
            date: dateTime,
            productName: product.productName,
            price: product.price,
            adress: data.adress,
            phoneNumber: data.phoneNumber,
            approved: false
        }

        fetch(`https://hidden-inlet-96106.herokuapp.com/orders`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newClientData)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal("Thsnk You!", "You Booking  a Beautyfull Place!", "success");
                    history.push("/")

                    reset()
                }
            })
    }
    return (
        <div>
            <Nav></Nav>
            <div className="row row-cols-1 row-cols-md-2 g-4 order-box">
                <div className="col">
                    <dib className="row  row-cols-sm-1 row-cols-md-2 justify-content-center align-items-center ">
                        <div className="col mt-5">
                            <div class="card" style={{ width: "30rem" }}>
                                <img src={product.img} height="300px" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{product.productName}</h5>
                                    <p class="card-text">{product.description}</p>
                                    <h6>{product.price}</h6>
                                </div>
                            </div>
                        </div>
                    </dib>
                </div>
                <div className="col ">
                    <div className="Order-container">
                        <h3 className="pt-5 fw-bold  ">Filup This Form</h3>
                        <div className="Event-container">
                            <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
                                <input required {...register("clientName")}
                                    value={user.displayName} disabled
                                    placeholder=" Service Name" />
                                <input required {...register("email")}
                                    disabled
                                    value={user.email}
                                    placeholder="sort title" />
                                <input  {...register("date")} disabled value={dateTime} /> <br />

                                <textarea className="text-dark" required {...register("adress")} placeholder="Adress" />

                                <input required placeholder="phone Number"  {...register("phoneNumber")} /> <br />

                                <input value={product.price + "$"} disabled  {...register("cost")} placeholder="  cost " /> <br />

                                <input type="submit" className="text-dark" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default PlaceORder;