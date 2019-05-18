import React from 'react';
import './SignIn.css';

const SignIn = () => (
    <div className="form-box l-col-wrap">
        <div className="l-col form-box_content">
            <h1 className="form-box_title">Welcome to <span className="color-change">My Ride Way</span></h1>
            <div className="my-form-text">
                <p>Sign In now to get great deals on <em>breath-taking</em> ride offers.</p>
                <p><span className="color-change">My-Ride-Way</span> app is a carpooling application that provides drivers with the ability to create ride offers and passengers to join available ride offers.</p>
            </div>
        </div>
        <div className="l-col form-box_form">
            <form id="sign-in" className="form form_sign-in" action="">
                <label htmlFor="email" className="form_label">Email Address</label>
                <input name="email" type="email" className="form_field" placeholder="user@youremail.com" />

                <label htmlFor="password" className="form_label">Password</label>
                <input name="password" type="password" className="form_field" placeholder="••••••••••••••••" />

                <input name="submit" type="submit" className="form_button button" value="Sign In" />
            </form>
            <small className="form-box_addon my-form-text">
                Don't have an account? We can fix that <a href="signUp.html">Sign Up</a>
            </small>
        </div>
    </div>
);

export default SignIn;