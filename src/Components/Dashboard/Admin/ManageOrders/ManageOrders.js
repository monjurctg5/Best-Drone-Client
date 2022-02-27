import React, { useState, useEffect } from "react";

import swal from "sweetalert";
import "../Admin.css"

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://hidden-inlet-96106.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  const approvalId = (id) => {
    swal({
      title: "Are you sure ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((approved) => {
      if (approved) {
        fetch(`https://hidden-inlet-96106.herokuapp.com/orders/${id}`, {
          method: "PUT",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
            }
          });
        swal("Poof! Order  Approved successfully", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://hidden-inlet-96106.herokuapp.com/orders/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              swal({
                title: "Delete successfully !",
                icon: "success",
              });
              const remainning = orders.filter((order) => order._id !== id);
              setOrders(remainning);
            }
          });
      } else {
        swal("Not Delete!");
      }
    });
  };
  return (
    <div className="table-responsive-sm manageAllClient ">
      <table className="table table-sm table-striped table-bordered table-hover ">
        <thead>
          <tr className="table-header">
            <th scope="col">SN</th>
            <th scope="col">client Name</th>
            <th scope="col">email</th>
            <th scope="col">Reg.Date</th>
            <th scope="col">Address</th>
            <th scope="col">Product Name </th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{order.clientName}</td>
              <td>{order.email}</td>
              <td>{order.date}</td>
              <td>{order.adress}</td>
              <td>{order.productName}</td>
              <td>
                {order.approved == false ? (
                  <span className="text-danger ">
                    <div class="spinner-border text-warning" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </span>
                ) : (
                  <span className="text-success">
                    <i class="fas fa-check-circle"></i>
                  </span>
                )}
              </td>
              <td>
                <button
                  onClick={() => approvalId(order._id)}
                  className="btn btn-success "
                >
                  <i class="fas fa-check-circle"></i>
                </button>{" "}
                <br />
                <button
                  onClick={() => handleDelete(order._id)}
                  className="btn btn-danger mt-1"
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
