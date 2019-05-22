import React, {Component} from 'react';
import './SignIn/SignIn.css';


class Sidebar extends Component {
    render() {
        const { foo } = this.props;
        return (
            <ul className="sidebar">
                <li className="sidebar-brand"><button>Ride My Way</button></li>
                <li><button className="link-button" onClick={foo} ><i class="fas fa-chalkboard-teacher"></i> Dashboard</button></li>
                <li><button className="link-button" onClick={foo} ><i class="fas fa-hands-helping"></i> Support</button></li>
                <li><button className="link-button" onClick={foo} ><i class="fas fa-question"></i> About</button></li>
                <li><button className="link-button" onClick={foo} ><i class="fas fa-sign-out-alt"></i> Logout</button></li>
            </ul>
        );
    }
}

export default Sidebar;


