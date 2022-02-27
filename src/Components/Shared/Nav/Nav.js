import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router";
import "../shared.css";
import Cartsidebar from "../../../Pages/Cartsidebar";
const Nav = () => {
  const {
    user,
    Logout,
    w3_open,
    style,
    setIsOpenCartSidebar,
    isOpenCartSidebar,
  } = useAuth();
  const history = useHistory();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  let sidebarWidth = { width: "0%" };

  function openNav() {
    setIsOpenSidebar(true);
  }
  function closeNav() {
    setIsOpenSidebar(false);
  }

  function openCartSidebar() {
    setIsOpenCartSidebar(true);
  }

  if (isOpenSidebar) {
    sidebarWidth.width = "100%";
  } else {
    sidebarWidth.width = "0%";
  }

  console.log(sidebarWidth);

  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //         <Link className="navbar-brand" to="/">Best-Drone</Link>
    //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //             <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/home">
    //                         <button className="w3-button w3-green w3-large"> <i class="fas fa-home"></i> Home</button>
    //                     </Link>
    //                 </li>

    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/allProducts">
    //                         <button className="w3-button w3-green w3-large">All Products</button>
    //                     </Link>
    //                 </li>

    //                 {
    //                     user?.email ?
    //                         <>
    //                             <li className="nav-item">
    //                                 <Link className="nav-link" to="/dashboard">
    //                                     <button className="w3-button w3-green w3-large">Dash Board</button>
    //                                 </Link>
    //                             </li>

    //                             <li className="nav-item">
    //                                 <Link className="nav-link ">
    //                                 <button onClick={() => Logout(history)} className="w3-button w3-green w3-large">Logout</button>
    //                                 </Link>
    //                             </li>

    //                             <li className="nav-item">
    //                                 <span className="nav-link pt-3 fs-5 text-info" >{user.displayName}</span>
    //                             </li>
    //                         </> :

    //                         <>
    //                             <li className="nav-item">
    //                                 <Link className="nav-link" to="/registation">
    //                                     <button onClick={w3_open} className="w3-button w3-green w3-large"> <i class="fas fa-user-plus"></i> Register</button>
    //                                 </Link>
    //                             </li>
    //                             <li className="nav-item">
    //                                 <Link className="nav-link" to="/login">
    //                                     <button className="w3-button w3-green w3-large"> <i class="fas fa-sign-in-alt"></i>  Login</button>
    //                                 </Link>
    //                             </li>

    //                         </>
    //                 }

    //             </ul>
    //         </div>
    //     </div>
    // </nav>

    <div className="header-container fixed-top mb-5">
      {isOpenCartSidebar ? <Cartsidebar /> : ""}
      <div class="row header-lg">
        <div class="col-3 header-logo">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/267611018_296085799198363_8035785356718416752_n.png?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=ToBCHeSC-XcAX_LntIP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJducZVZgHINfsPT60GIhMarAk5BwbNcTZdSXiGs31EpQ&oe=623835F1"
            alt=""
          />
        </div>
        <div class="col-6 header-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>

            <li>
              <Link to="/allProducts">Product</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboad</Link>
            </li>
          </ul>
        </div>
        <div class="col-3 header-icon">
          <ul>
            <li>
              <Link>
                <i class="fa-solid fa-house"></i>
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={w3_open} style={{ cursor: "pointer" }}>
                <i class="fa-regular fa-user"></i>
              </Link>
            </li>
            <li>
              <span style={{ cursor: "pointer" }} onClick={openCartSidebar}>
                <i class="fa-solid fa-cart-shopping"></i>
              </span>
            </li>
            {isOpenCartSidebar ? <Cartsidebar /> : ""}
            <li>
              <Link>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* mobail sreen */}
      <div class="row header-sm">
        <div class="col-2 header-logo">
          <span
            className={isOpenSidebar ? `open-nav d-none` : "open-nav"}
            onClick={openNav}
          >
            <i class="fa-solid fa-bars "></i>
          </span>
          <a
            href="javascript:void(0)"
            class={!isOpenSidebar ? `closebtn d-none` : "closebtn"}
            onClick={closeNav}
          >
            <i class="fa-solid fa-x"></i>
          </a>
        </div>
        <div class="col-8 header-menu">
          <p>
            <span className="fs-2 fw-bold text-danger">পাঁচ</span> ফোঁড়
          </p>
        </div>
        <div class="col-2 header-icon">
          <ul>
            <li className="me-5">
              <i class="fa-solid fa-magnifying-glass"></i>
            </li>
          </ul>
        </div>
        <footer className="footer">
          <li>
            <Link to="/">
              <i class="fa-solid fa-house"></i>
            </Link>
          </li>

          <li>
            <Link to="/login" onClick={w3_open} style={{ cursor: "pointer" }}>
              <i class="fa-regular fa-user"></i>
            </Link>
          </li>
          <li>
            <span style={{ cursor: "pointer" }} onClick={openCartSidebar}>
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
          </li>
          <li>
            <Link>
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </Link>
          </li>
        </footer>
      </div>

      <div id="myNav" className="overlay" style={sidebarWidth}>
        <div class="overlay-content">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>

          <li>
            <Link to="/allProducts">Product</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboad</Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Nav;
