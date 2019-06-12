import React from 'react';
import './SignIn.css';
import { NavLink } from 'react-router-dom';

class SignIn extends React.Component {

    signIn(e) {
        e.preventDefault();
        if (this.authUser(this.email.value, this.password.value)) {
            this.props.history.push('/dashboard');
        }
        else {
            alert("YOU SHALL NOT PASS!");
        }
    }
    authUser(email, password) {
        if ((email === "user@test.com") && (password === "andela")) {
            return true;
        }
    }
    render() {
        return (
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
                        <input name="email" type="email" title="use user@test.com" ref={input => this.email = input } className="form_field" placeholder="user@youremail.com" />

                        <label htmlFor="password" className="form_label">Password</label>
                        <input name="password" ref={input => this.password = input } title="use andela" type="password" className="form_field" placeholder="••••••••••••••••" />

                        <input name="submit" type="submit" className="form_button button" onClick={(e) => this.signIn(e)} value="Sign In" />
                    </form>
                    <small className="form-box_addon my-form-text">
                        Don't have an account? We can fix that <NavLink to='/signUp'>Sign Up</NavLink>
                    </small>
                </div>
            </div>
        )
    }
}

export default SignIn;