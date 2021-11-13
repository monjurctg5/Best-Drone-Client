import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-clean pt-3">
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Top Drone</h3>
                        <ul>
                            <li><Link to="/">drone-xyz</Link></li>
                            <li><Link to="/">drone02</Link></li>
                            <li><Link to="/">drone-abc </Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><Link to="/">dashboard</Link></li>
                            <li><Link to="/">bestDrone</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">My Orders</Link></li>
                            <li><Link to="/">Need Help</Link></li>
                            <li><Link to="/">Online Service</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 item social">
                        <Link to="/">
                        <i className="fab fa-facebook"></i>
                            </Link>
                        <Link to="/">
                        <i className="fab fa-twitter-square"></i>
                            </Link>
                        <Link to="/">
                        <i className="fab fa-snapchat"></i>
                            </Link>
                        <p className="copyright">bestdrne.Com © 20121</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    );
};

export default Footer;