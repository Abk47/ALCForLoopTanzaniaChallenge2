import React, { Component } from 'react';
import './Info.css';

class RideOffer extends Component {
    render() {
        return (
            <div className="ride-request">
                <h3>INCOMING RIDE REQUEST</h3>
                <p>Ride offer details</p>
                <div className="buttons">
                    <button class="accept" type="submit">ACCEPT</button>
                    <button class="reject" type="submit">REJECT</button>
                </div>
            </div>
        );
    }
}

export default RideOffer;