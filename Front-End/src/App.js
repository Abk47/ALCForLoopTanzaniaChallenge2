import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';
import Sidebar from './components/Sidebar';
// import RideOffer from './components/RideOffer';
import Info from './components/Info';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Info} />
        <Route exact path="/" component={Sidebar} />
        <Route path="/user_profile" component={UserProfile} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/signIn" component={SignIn} />
      </React.Fragment>
    </Router>


  );
}

export default App;
