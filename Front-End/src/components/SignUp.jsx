import React from 'react';
import './SignIn/SignIn.css';

const SignUp = () => (
  <div className="form-box l-col-wrap">
    <div className="l-col form-box_content">
      <h1 className="form-box_title">SIGN UP to <span className="color-change">My Ride Way</span></h1>
      <div className="my-form-text">
        <p>Please Sign Up now to get great deals on <em>breath-taking</em> ride offers.</p>
        <p><span className="color-change">My-Ride-Way</span> is a carpooling application that provides drivers with the ability to create ride offers and passengers to join available ride offers.</p>
        <small>By signing up, you agree to our <span className="color-change-blue">privacy terms</span> and <span className="color-change-blue">conditions  </span>.</small>
      </div>
    </div>
    <div className="l-col form-box_form">
      <form id="sign-up" className="form form_sign-up" action="">
        <label htmlFor="email" className="form_label">Email Address</label>
        <input name="email" type="email" className="form_field" placeholder="user@youremail.com" />

        <label htmlFor="password" className="form_label">Password</label>
        <input name="password" id="password" type="password" className="form_field" placeholder="••••••••••••••••" />

        <label htmlFor="password" className="form_label">Confirm Password</label>
        <input name="password1" id="password1" type="password" className="form_field" placeholder="••••••••••••••••" />

        <input name="submit" type="submit" className="form_button button" value="Sign Up" />
      </form>
      <small className="form-box_addon my-form-text">
        Already have an account? <a href="signIn.html">Sign In</a>
      </small>
    </div>
  </div>
);

export default SignUp;