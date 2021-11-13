import React, { useEffect, useState } from 'react';
// import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

// import "../updateForm/update.css"
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';
import Spinner from '../../../Shared/Spinner/Spinner';

// import AdService from '../AddService/AdService';
// import UpdateForm from '../updateForm/UpdateForm';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const { user, isLoading } = useAuth()


    useEffect(() => {
        fetch('https://hidden-inlet-96106.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [products])



    if (isLoading) {
        return <Spinner></Spinner>
    }
    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://hidden-inlet-96106.herokuapp.com/products/${id}`, { method: "delete" }).then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("delete successfully!", {
                                    icon: "success",
                                });

                                const remaingServices = products.filter(service => service._id !== id)
                                setProducts(remaingServices)
                            }
                        })

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