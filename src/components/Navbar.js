import React from 'react'

function Navbar() {
    return (
        <div className="subheader">
            <nav className="navbar main-nav navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img className="navbar-logo" src="images/logo.png" alt="..." />
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="exchange-one.html">Exchange </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className="nav-link" href="exchange-one.html">Exchange Default</a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="exchange-two.html">Exchange Full</a></li>
                                    <li className="nav-item"><a className="nav-link" href="exchange-three.html">Exchange Dark</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="chart.html">Chart</a></li>
                            <li className="nav-item"><a className="nav-link" href="features.html">Features</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#">Support</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className="nav-link" href="support.html">Support Default</a></li>
                                    <li className="nav-item"><a className="nav-link" href="support-details.html">Support Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#">News</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className="nav-link" href="latest-news.html">Latest News</a></li>
                                    <li className="nav-item"><a className="nav-link" href="news-details.html">News Details</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#">More</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className="nav-link" href="faq.html">Faq</a></li>
                                    <li className="nav-item"><a className="nav-link" href="how-work.html">How Work</a></li>
                                    <li className="nav-item"><a className="nav-link" href="contact.html">Contact Us</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown language-option">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-globe"></i> EN
                            </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <i className="fab fa-buysellads"></i> US
                                    </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <i className="fas fa-lira-sign"></i> UK
                                    </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item button">
                                <a className="btn nav-link" href="login.html">Login</a>
                            </li>
                            <li className="nav-item button active">
                                <a className="btn nav-link" href="signup.html">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="subheader-wrapper">
                            <h3>Explore Trading Charts</h3>
                            <p>
                                Many desktop publishing packages and web page editors now use <br />
                            Lorem Ipsum as their default model text
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;