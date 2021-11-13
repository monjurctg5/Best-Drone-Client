import React, { useState } from 'react';

import useAuth from '../../../hooks/useAuth';
import './dash.css'
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import AddProduct from '../Admin/AddProduct/AddProduct';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageOrders from '../Admin/ManageOrders/ManageOrders';
import Footer from '../../Shared/Footer/Footer';
import MyOrders from '../Client/MyOrders/MyOrders';
import { useHistory } from "react-router";
import Review from '../Client/Review/Review';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import Pay from '../Client/Pay/Pay';
const Dashboad = () => {
  const {user,admin,Logout} = useAuth()
  const history = useHistory()
console.log(admin)
    const [style,setStyle] = useState("block")

    const w3_open =()=> {
        setStyle("block") 
      
    
      }
      
    const  w3_close = ()=> {
        setStyle("none")
       
      
      }
      let { path, url } = useRouteMatch();
    return (
        <div>
         
            
{/* <!-- Sidebar -->  */ }

<div className={`w3-sidebar w3-bar-block w3-collapse w3-teal {}  w3-card w3-animate-left  `} style={{width:"250px",display:`${style}`}} id="mySidebar">
<div className="">
  <img src="https://i.pinimg.com/originals/14/6e/51/146e518769e1a7de395d05d71de51eb7.jpg" width="250px" height="80px" alt="" />
  </div>

  <button className="w3-bar-item w3-button w3-large text-danger  w3-hide-large" onClick={w3_close}>Close &times;</button>
  {/* for Addming */}

  <div>
    <img src={user.photoURL} style={{borderRadius:"50%",height:"100px",width:"100px"}} alt="" />
  </div>
{
  admin?
  <div className="mt-5 pt-5 text-center">
<Link to={`${url}/addProduct`} onClick={w3_close} className="w3-bar-item w3-button">Add Product</Link>
  <Link to={`${url}/makeAdmin` }  onClick={w3_close} className="w3-bar-item w3-button">Make Admin</Link>
  <Link to={`${url}/manageOrder`} onClick={w3_close} className="w3-bar-item w3-button">Manage Order</Link>
  <Link to={`${url}/manageProducts`} onClick={w3_close} className="w3-bar-item w3-button">Manage Products</Link>

<button className="w3-button w3-bar-item " onClick={()=>Logout(history)}>   <i class="fas fa-sign-out-alt"></i>  Logout</button>
 
</div>:<div>
<Link to={`${url}/myOrders`}  onClick={w3_close} className="w3-bar-item w3-button">My Order</Link>
<Link to={`${url}/pay`}  onClick={w3_close} className="w3-bar-item w3-button">Pay</Link>
<Link to={`${url}/review`} onClick={w3_close} className="w3-bar-item w3-button">Review</Link>

<button className=" text-danger " onClick={()=>Logout(history)}>   <i class="fas fa-sign-out-al t"></i>  Logout</button>
</div>
}
</div>
{/* <!-- Page Content --> */}
<div className="w3-main" style={{marginLeft:"250px"}}>
<div className="">
  <button className="w3-button barIcon   w3-xlarge w3-hide-large" onClick={w3_open}>&#9776;</button>
  <div className="w3-container text-center  d-flex ">
    <li className="mx-4">
    <h5 className=""> <Link to="/">Home</Link></h5>
    </li>
    <li className="mx-4 ">
    <h5 className="text-dark ">{user.displayName}</h5>
    </li>
  </div>
</div>
<div className="w3-container mt-5">
<Switch>
          <Route  path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/manageOrder`}>
            <ManageOrders></ManageOrders>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
  </Switch>
</div>
   
</div>

{/* <Footer></Footer> */}
        </div>
    );
  
};

export default Dashboad;