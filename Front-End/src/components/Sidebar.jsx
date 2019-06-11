import React, { Component } from 'react';
import './SignIn/SignIn.css';
import { NavLink } from 'react-router-dom';


class Sidebar extends Component {
    render() {
        const { foo } = this.props;
        return (
            <ul className="sidebar">
                <NavLink to='/dashboard' style={{ textDecoration: 'none' }}><li className="sidebar-brand"><button>Ride My Way</button></li></NavLink>
                <NavLink to='/user' style={{ textDecoration: 'none' }}><li><button className="link-button" onClick={foo} ><i class="fas fa-chalkboard-teacher"></i> Profile</button></li></NavLink>
                <NavLink to='/rides' style={{ textDecoration: 'none' }}><li><button className="link-button" onClick={foo} ><i class="fas fa-car-side"></i> View Rides </button></li></NavLink>
                <li><button className="link-button" onClick={foo} ><i class="fas fa-question"></i> About</button></li>
                <NavLink to='/' style={{ textDecoration: 'none' }}><li><button className="link-button" onClick={foo} ><i class="fas fa-sign-out-alt"></i> Logout</button></li></NavLink>
            </ul>
        );
    }
}

export default Sidebar;
