

import React, { useState } from 'react';
// import useFirebase from '../../hooks/useFirebase';
import swal from 'sweetalert';
import './Addproduct.css'
import { useForm } from "react-hook-form";
import { api } from '../../../../Api/Product/productAPi';
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const res = await api.addproduct(data)
        if (res.status==="ok") {
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
            });
            reset()
        }
        


      
    }
    return (
        <div className="addservice-container bg-image">
            <h3 className="mt-5 fw-bold  text-success">Add  Products</h3>
            <div className="Event-container">

                <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
                    <input required {...register("productName")} placeholder=" Product Name" />
                    <input required {...register("sortTitle")} placeholder="sort title" />
                    <textarea required {...register("description")} placeholder="Description" />
                    <input  {...register("price")} placeholder="  price " /> <br />
                    <input  {...register("img")} placeholder=" Product image url" /> <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;