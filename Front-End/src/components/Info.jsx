import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = [];
    }
    render() {
        return (
            <div className="grid-card">
                <div className="card1">
                    <h2 className="card-heading"><i className="fas fa-car"></i> Available Ride Offers</h2>
                    <p className="para">25</p>
                </div>
                <div className="card1">
                    <h2 className="card-heading"><i className="fas fa-sync-alt"></i> Active Ride Offers</h2>
                    <p className="para">4</p>
                </div>
                <div className="card1">
                    <h2 className="card-heading"><i className="far fa-check-circle"></i> Accepted Ride Offers</h2>
                    <p className="para">19</p>
                </div>

                <div className="gmap_canvas">
                    <iframe title="map" width="1100" height="430" id="gmap_canvas" src="https://maps.google.com/maps?q=tanzante%20park&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>Google Maps Generator by <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
                </div>

            </div>
        );
    }
}

export default Info; 