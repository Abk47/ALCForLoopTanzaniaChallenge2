import React, { Component } from 'react';
import './SignIn/SignIn.css';

class UserProfile extends Component {
    handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
    };
    render() {
        return (
            <div className="UserProfile">
                <img src="images/img.jpg" alt="John" />
                <h1 className="full-name">John Doe</h1>
                <p className="user-title">Software Developer, Andela</p>
                <p><strong>Status:</strong> Available</p>
                <p><strong>Number of rides given:</strong> 20 </p>
                <p><strong>Number of rides taken:</strong> 25 </p>
                <a className="social-link" href="#"><i className="fab fa-twitter-square"></i></a>
                <a className="social-link" href="#"><i className="fab fa-github-square"></i></a>
                <a className="social-link" href="#"><i className="fab fa-facebook-square"></i></a>
                <p><button className="user-button" onClick={this.handleClick}>Click to view list of rides</button></p>
            </div>
        );
    }
}

export default UserProfile;