import React from "react";

export default function Navbar(props) {
    return (
        <main id="prime-detail-page">
            <div id="prime-top-nav">
                <span className="nav-prime-link">
                    <a href="#" title="Prime (You are here)">Prime</a>
                </span>
                <span>
                    <a href="#" title="Delivery">Delivery</a>
                </span>
                <span>
                    <a href="#" title="Exclusive Deals">Exclusive Deals</a>
                </span>
                <span>
                    <a href="#" title="Prime Insider">Prime Insider</a>
                </span>
                <span>
                    <a href="#" title="Get Help">Get Help</a>
                </span>
            </div>
            <div id="prime-hero-header">
                <img src="https://m.media-amazon.com/images/G/01/marketing/prime/new_logos/Amazon_Prime_Logo_White_Large._CB485971207_.png" alt="prime"/>
                <h1 className="bigger-text">Get the best of Shopping and Entertainment with Prime</h1>
                <div id="prime-hero-content">
                    <button id="get-started-btn">Get started</button>
                    <div className="prime-info">
                        <span><sup>$</sup>12<sup>.99</sup>/month (plus any applicable taxes). Cancel anytime. </span>
                        <span><a href="#">Are you a student?</a> | <a href="#">Have an EBT card/receive government assistance?</a></span>
                    </div>
                    <div className="more-plans">
                        <a href="#">SEE MORE PLANS</a> <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-8.482 4.796V3.304l7.48 4.796z"/>
                            </svg>
                        </i>
                    </div>
                </div>
            </div>
            <div className="benefit-lead-in">Check out what's included with your Prime membership:</div>
            <div id="whats-included">
                <div className="benefit-category">
                    <div className="benefit-inter">
                        <span className="benefit-category-inner">Shopping</span>
                    </div>
                </div>
                <div className="card-block">
                    <div className="xl-row">
                        <div className="card">
                            <div className="benefit-box-image">
                                <div className="img-wrap">
                                    <img src="https://m.media-amazon.com/images/G/01/marketing/prime/JJ/220x220-shipping._CB468966400_.jpg" alt="Fast, FREE Delivery"/>
                                </div>
                            </div>
                            <div className="benefit-box-text">
                                <p className="benefit-bold">Fast, FREE Delivery</p>
                                <p className="benefit-blurb">Enjoy all the fast, convenient delivery options Prime offers</p>
                            </div>
                        </div>
                        <div className="card last-card">
                            <div className="benefit-box-image">
                                <div className="img-wrap">
                                    <img src="https://m.media-amazon.com/images/G/01/marketing/prime/JJ/220x220-exclusive-deals._CB468966668_.jpg" alt="Exclusive Deals Just for you"/>
                                </div>
                            </div>
                            <div className="benefit-box-text">
                                <p className="benefit-bold">Exclusive Deals Just for you</p>
                                <p className="benefit-blurb">Get exclusive access to deals and discounts before anyone else with 30-minute early access to Lightning Deals</p>
                            </div>
                        </div>
                    </div>
                    <div className="xl-row">
                        <div className="card">
                            <div className="benefit-box-image">
                                <div className="img-wrap">
                                    <img src="https://m.media-amazon.com/images/G/01/marketing/prime/Brand/Prime_Rx/MP_Assets/Penny_prime_FT_desktop._CB416779066_.png" alt="Prescription delivery and savings"/>
                                </div>
                            </div>
                            <div className="benefit-box-text">
                                <p className="benefit-bold">Prescription delivery and savings</p>
                                <p className="benefit-blurb">Get FREE Two-Day Delivery on prescriptions from Amazon Pharmacy, plus exclusive savings</p>
                            </div>
                        </div>
                        <div className="card last-card">
                            <div className="benefit-box-image">
                                <div className="img-wrap">
                                    <img src="https://m.media-amazon.com/images/G/01/marketing/prime/JJ/220x220-echo-shopping._CB468966762_.jpg" alt="Save big on Groceries"/>
                                </div>
                            </div>
                            <div className="benefit-box-text">
                                <p className="benefit-bold">Save big on Groceries</p>
                                <p className="benefit-blurb">Exclusive deals at Whole Foods Market and 5% back with the Amazon Prime Rewards Visa Card.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="benefit-category">
                    <div className="benefit-inter">
                        <span className="benefit-category-inner-2">Entertainment</span>
                    </div>
                </div>
                <div className="card-block">
                    <div className="xl-row">
                        <div className="card">
                            <div className="benefit-box-image">
                                <div className="img-wrap">
                                    <img src="https://m.media-amazon.com/images/G/01/marketing/prime/JJ/220x220-Prime-video._CB468966796_.jpg" alt="Award-winning movies &amp; TV shows"/>
                                </div>
                            </div>
                            <div className="benefit-box-text">
                                <p className="benefit-bold">Award-winning movies & TV shows</p>
                                <p className="benefit-blurb">Watch what you love with award-winning Amazon Originals, movies and TV shows, included in your membership.</p>
                            </div>
                        </div>
                        <div className="card last-card">
                            <div className="benefit-box-image">
                                <div className="img-wrap">
                                    <img src="https://m.media-amazon.com/images/G/01/marketing/prime/JJ/220x220-Prime-music._CB468966908_.jpg" alt="Over two million songs, ad free"/>
                                </div>
                            </div>
                            <div className="benefit-box-text">
                                <p className="benefit-bold">Over two million songs, ad free</p>
                                <p className="benefit-blurb">Get access to an exclusive library of songs from Amazon Music without any ads.</p>
                            </div>
                        </div>
                    </div>
                    <div className="xl-row">
                        <div className="card">
                            <div className="benefit-box-image">
                                <div className="img-wrap">
                                    <img src="https://m.media-amazon.com/images/G/01/marketing/prime/JJ/220x220-twitch._CB468966624_.jpg" alt="Free games and loot with Prime Gaming"/>
                                </div>
                            </div>
                            <div className="benefit-box-text">
                                <p className="benefit-bold">Free games and loot with Prime Gaming</p>
                                <p className="benefit-blurb">Gamers can get free games, in-game items, a free Twitch channel subscription every month and more with Prime Gaming.</p>
                            </div>
                        </div>
                        <div className="card last-card">
                            <div className="benefit-box-image">
                                <div className="img-wrap">
                                <img src="https://m.media-amazon.com/images/G/01/marketing/prime/JJ/220x220-reading._CB468966524_.jpg" alt="Prime members read FREE"/>
                                </div>
                            </div>
                            <div className="benefit-box-text">
                                <p className="benefit-bold">Prime members read FREE</p>
                                <p className="benefit-blurb">Prime members can now read as much as they want from over a thousand books, magazines, comics, Kindle Singles, and more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}