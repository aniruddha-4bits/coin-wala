import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-upper-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="footer-logo">
                                <a href="#">
                                    <img src="./images/logo.png" alt="img" className="img-responsive" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <div className="footer-info-list">
                                <h4>About Us</h4>
                                <ul>
                                    <li><a href="#">Our Team</a></li>
                                    <li><a href="#">Our Company</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Token Listing</a></li>
                                    <li><a href="#">Join Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <div className="footer-info-list">
                                <h4>Learn</h4>
                                <ul>
                                    <li><a href="#">Legal</a></li>
                                    <li><a href="#">Terms of Use</a></li>
                                    <li><a href="#">AML&CFT</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <div className="footer-info-list">
                                <h4>Help</h4>
                                <ul>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">API Support</a></li>
                                    <li><a href="#">Coin/Token Listing</a></li>
                                    <li><a href="#">Partnership</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="footer-info-list">
                                <h4>Contact Us</h4>
                                <ul className="contact-info">
                                    <li>Email: <span><a href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                        data-cfemail="7c15121a135219041f1315123c1b111d1510521f1311">[email&#160;protected]</a></span>
                                    </li>
                                    <li>Phone: <span>+99 5589 54789</span></li>
                                </ul>
                                <ul className="social-style-two">
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-google-plus-g"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-icon-wrap">
                    <a href="#" >
                        <img src="./images/others/31.png" alt="img" className="img-responsive" />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-wrap">
                        <div className="trade-volume-block">
                            <ul>
                                <li>
                                    <span>39151</span> Active Traders
                            </li>
                                <li>
                                    <span>4191 BTC</span> 24h Volume
                            </li>
                            </ul>
                        </div>
                        <div className="copyright-text">
                            © 2018 <a href="#">Excoin</a>. All Rights Reserved
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
