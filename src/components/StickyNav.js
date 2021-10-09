import React from "react";

export default function StickyNav(props) {
    let stickyStyle, posStyle;
    if (props.border) {
        posStyle = {
            position: "fixed",
            top: 0
        };
    } else {
        posStyle = {
            position: "absolute",
            top: -2
        };
    }
    if (props.sticky) {
        stickyStyle = {
            display: "block",
            height: 70
        };
    } else {
        stickyStyle = {
            display: "none",
            height: 0
        };
    }
    return (
        <nav id="sticky-nav" style={posStyle}>
            <div id="nav-wrap" style={stickyStyle}>
                <div id="sticky-header">
                    <div id="sticky-prime-logo">
                        <img src="https://m.media-amazon.com/images/G/01/marketing/prime/detail_page/PrimeLogo_Blue._CB485948972_.svg" alt="Prime logo"/>
                    </div>
                    <div id="expand-plans">
                        <div className="see-more-plans"> See more plans </div>
                        <div className="plan-icon">
                            <img src="https://m.media-amazon.com/images/G/01/marketing/prime/detail_page/StickyNav_02_DownArrow_50x30._CB485936763_.svg" alt="arrow"/>
                        </div>
                    </div>
                    <div id="sticky-CTA">
                        <button className="sticky-nav-button">Get started</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}