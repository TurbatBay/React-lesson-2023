import React from "react"

function Help(){
    return (
        <div className="help-container">
            <p>Need help? Call us (+98) 0234 456 789</p>
            <div className="help-rest-flex">
                <div className="our-store">
                    <img src="#" alt="location icon"/>
                    <p>Our store</p>
                </div>
                <div className="track-order">
                    <img src="#" alt="truck icon"/>
                    <p>Track your order</p>
                </div>
            </div>
        </div>
    )
}
export default Help