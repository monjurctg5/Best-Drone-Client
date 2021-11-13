

import React, { useState } from 'react';
// import useFirebase from '../../hooks/useFirebase';
import swal from 'sweetalert';
import './Addproduct.css'
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch(`https://hidden-inlet-96106.herokuapp.com/products`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success",
                    });
                    reset()
                }
            })
    }
    return (
        <div className="addservice-container bg-image">
            <h3 className="mt-5 fw-bold  text-success">Add  Products</h3>
            <div className="Event-container">

                <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
                    <input required {...register("productName")} placeholder=" Product Name" />
                    <input required {...register("sortTitle")} placeholder="sort title" />
                    <textarea required {...register("description")} placeholder="Descriptio" />
                    <input  {...register("price")} placeholder="  price " /> <br />
                    <input  {...register("img")} placeholder=" Product image url" /> <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;