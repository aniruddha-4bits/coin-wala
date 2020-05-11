import React from 'react'

export default function TrendingInfo() {
    return (

        <ul className="nav trending-info-tab">
            <li className="nav-item">
                <div className="dropdown trending-info-currency-option">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownmenu"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-dollar-sign"></i>
                        <span>USD</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownmenu">
                        <a className="dropdown-item" href="#">EUR</a>
                        <a className="dropdown-item" href="#">AUD</a>
                        <a className="dropdown-item" href="#">BND</a>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <form action="#" method="get" className="search-form">
                    <div className="input-box">
                        <input type="text" value="" required="" name="s" className="form-control"
                            placeholder="Search..." />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </div>
                </form>
            </li>
        </ul>

    )
}
