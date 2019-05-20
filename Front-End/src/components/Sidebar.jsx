import React, {Component} from 'react';
import './SignIn/SignIn.css';

// Functional component for Sidebar
// const Sidebar = ({foo}) => (
//     <ul className="sidebar">
//         <li className="sidebar-brand"><button>My Ride Way</button></li>
//         <li><button className="link-button" onClick={foo} >Dashboard</button></li>
//         <li><button className="link-button" onClick={foo} >Support</button></li>
//         <li><button className="link-button" onClick={foo} >About</button></li>
//         <li><button className="link-button" onClick={foo} >Logout</button></li>
//     </ul>
// );

class Sidebar extends Component {
    render() {
        const { foo } = this.props;
        return (
            <ul className="sidebar">
                <li className="sidebar-brand"><button>My Ride Way</button></li>
                <li><button className="link-button" onClick={foo} ><i class="fas fa-chalkboard-teacher"></i> Dashboard</button></li>
                <li><button className="link-button" onClick={foo} ><i class="fas fa-hands-helping"></i> Support</button></li>
                <li><button className="link-button" onClick={foo} ><i class="fas fa-question"></i> About</button></li>
                <li><button className="link-button" onClick={foo} ><i class="fas fa-sign-out-alt"></i> Logout</button></li>
            </ul>
        );
    }
}

export default Sidebar;


