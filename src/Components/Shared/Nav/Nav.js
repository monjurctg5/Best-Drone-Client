import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from "react-router";
const Nav = () => {
    const { user, Logout, w3_open, style } = useAuth()
    const history = useHistory()




    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Best-Drone</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">
                                <button className="w3-button w3-green w3-large"> <i class="fas fa-home"></i> Home</button>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/allProducts">
                                <button className="w3-button w3-green w3-large">All Products</button>
                            </Link>
                        </li>

                        {
                            user?.email ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/dashboard">
                                            <button className="w3-button w3-green w3-large">Dash Board</button>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link ">
                                        <button onClick={() => Logout(history)} className="w3-button w3-green w3-large">Logout</button>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <span className="nav-link pt-3 fs-5 text-info" >{user.displayName}</span>
                                    </li>
                                </> :

                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/registation">
                                            <button onClick={w3_open} className="w3-button w3-green w3-large"> <i class="fas fa-user-plus"></i> Register</button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            <button onClick={w3_open} className="w3-button w3-green w3-large"> <i class="fas fa-sign-in-alt"></i>  Login</button>
                                        </Link>
                                    </li>

                                </>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;