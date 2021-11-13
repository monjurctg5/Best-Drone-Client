import React, { useEffect, useState } from 'react';

import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';
import './myOrder.css'
const MyOrders = () => {
const {user} = useAuth()
    const [myOrders, setMyOrders] = useState([])
    const email = user?.email
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyOrders(data);
            })
    }, [email])
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
                fetch(`http://localhost:5000/orders/${id}`, { method: "delete" })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        swal({
                            title: "Deltee Successfully!",
                            text: `You deleted ${id} successfully!`,
                            icon: "success",
                          });
                        const remainning = myOrders.filter(order=>order._id!==id)
                        setMyOrders(remainning)
                        
                    }
                 
                })
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        
    }

    return (
        <div className="table-responsive-sm myorder-container">
            <table className="table table-sm table-striped table-bordered table-hover ">
                <thead>
                    <tr>
                        <th scope="col">SN</th>
                        <th scope="col"> Product</th>
                        <th scope="col">Reg.Date</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map((myOrder, index) => (
                            <tr>
                                <th >{index + 1}</th>
                                <td>{myOrder.productName}</td>
                                <td>{myOrder.date}</td>
                                <td>${myOrder.price}</td>

                                <td>{
                                    myOrder.approved == false ? <span className="text-danger ">pending....</span> :
                                        <span className="text-success"><i class="fas fa-check-circle"></i></span>
                                }</td>
                                {
                                    myOrder.approved == false ? <td>
                                        <button onClick={() => handleDelete(myOrder._id)} className="btn btn-danger mt-1"><i class="fas fa-trash-alt"></i></button>
                                    </td> : <span className="text-success">shipped</span>
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;