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
                        <h3>Top Destinetion</h3>
                        <ul>
                            <li><Link to="/">Brazil</Link></li>
                            <li><Link to="/">Banghlades</Link></li>
                            <li><Link to="/">Nepal </Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><Link to="/">Brazil</Link></li>
                            <li><Link to="/">Travelo</Link></li>
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
                        <p className="copyright">Travelo.Com © 20121</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    );
};

export default Footer;