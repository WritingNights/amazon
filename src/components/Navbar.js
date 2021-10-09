import React from "react";

export default function Navbar(props) {
    return (
        <header id="navbar-main">
            <div id="navbar">
                <div id="nav-belt">
                    <div className="nav-left">
                        <span id="logo" className="hovBor"></span>
                        <div id="location" className="hovBor">
                            <i className="loc-icon"></i>
                            <div>
                                <span id="delvTo">{props.user ? 'Deliver to ' + props.user : 'Hello'}</span>
                                <span id="city">{props.user ? props.city + ' ' + props.zip : 'Select your address'}</span>
                            </div>
                        </div>
                    </div>
                    <div className="nav-fill">
                        <div id="nav-search">
                            <form id="nav-search-bar-form" action="#" method="GET">
                                <div className="nav-search-dropdown-card">
                                    <span>All</span>
                                    <i className="nav-icon"></i>
                                </div>
                                <div className="nav-search-field">
                                    <input type="text"/>
                                </div>
                                <div className="go-btn">
                                    <input type="submit" value=" "/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="nav-right">
                        <a href="#" id="flag" className="hovBor">
                            <span></span>
                            <i className="nav-icon"></i>
                        </a>
                        <a href="#" id="account" className="hovBor">
                            <div>
                                <span className="line-one">Hello, {props.user}</span>
                                <span className="line-two">Account & Lists</span>
                            </div>
                            <i className="nav-icon"></i>
                        </a>
                        <a href="#" id="returns" className="hovBor">
                            <span className="line-one">Returns</span>
                            <span className="line-two">& Orders</span>
                        </a>
                        <a href="#" id="cart" className="hovBor">
                            <span id="cart-val">0</span>
                            <i className="cart-icon"></i>
                            <span className="cart">Cart</span>
                        </a>
                    </div>
                </div>
                <div id="nav-main">
                    <div className="nav-left">
                        <button className="hovBor" id="hamMenu">
                            <svg width="20" height="20" fill="white" viewBox="0 0 20 20">
                                <rect x="0" y="0" height="2" width="18" />
                                <rect x="0" y="6" height="2" width="18" />
                                <rect x="0" y="12" height="2" width="18" />
                            </svg>
                        &nbsp;All</button>
                    </div>
                    <div className="nav-fill">
                        <div className="hovBor">
                            <button className="prime-btn">Prime</button>
                            <i className="nav-icon"></i>
                        </div>
                        <button>{props.user}'s Amazon.com</button>
                        <button>Outdoor Recreation</button>
                        <button>Buy Again</button>
                        <button>Amazon Basics</button>
                        <button>Sports & Fitness</button>
                        <button>Home Improvement</button>
                        <button>Pet Supplies</button>
                        <button>Shopper Toolkit</button>
                    </div>
                    <div className="nav-right">
                        <div id="special">
                            A Hispanic celebration
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}