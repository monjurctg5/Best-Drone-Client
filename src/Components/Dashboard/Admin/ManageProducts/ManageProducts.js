import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
// import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

// import "../updateForm/update.css"
import swal from 'sweetalert';
import { api } from '../../../../Api/Product/productAPi';
import useAuth from '../../../../hooks/useAuth';
import Spinner from '../../../Shared/Spinner/Spinner';

// import AdService from '../AddService/AdService';
// import UpdateForm from '../updateForm/UpdateForm';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const { user, isLoading } = useAuth()


    useEffect(async() => {
        let res = await api.allProducts()
        console.log(res.data)
        if(res.data){   
            setProducts(res.data)
        }     
    }, [])



    if (isLoading) {
        return <Spinner></Spinner>
    }
    const handleDelete = async(id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async(willDelete) => {
                if (willDelete) {
                    let data = await api.deleteProduct(id)
                   console.log(data)
                    if (data.deletedCount > 0) {
                        swal("delete successfully!", {
                            icon: "success",
                        });

                        const remaingServices =await products.filter(service => service._id !== id)
                        setProducts(remaingServices)
                    }

                } else {
                    swal("Not Deleteded!");
                }
            });
    }


    return (
        <div className="table-responsive-sm  manageService" >
            <table className="table table-sm table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">SN</th>
                        <th scope="col">Service Name</th>
                        <th scope="col">title</th>
                        <th scope="col">image</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((service, index) => (
                            <tr>
                                <th >{index + 1}</th>
                                <td>{service.productName}</td>
                                <td>{service.sortTitle}</td>
                                <td>
                                    <img src={service.img} width="100px" alt="" />
                                </td>
                                <td >
                                    <button onClick={() => handleDelete(service._id)} className="btn btn-danger mt-2">delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>


        </div>
    );
};

export default ManageProducts;