import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';
import Sidebar from './components/Sidebar';
import Info from './components/Info';
import ViewRide from './components/ViewRide';
// import Error404 from './components/Error404';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/dashboard" component={Sidebar} />
        <Route exact path="/dashboard" component={Info} />
        <Route exact path="/user" component={UserProfile} />
        <Route exact path="/user" component={Sidebar} />
        <Route exact path="/rides" component={Sidebar} />
        <Route exact path="/rides" component={ViewRide} />
        <Route path="/signUp" component={SignUp} />
        {/* <Route component={Error404} /> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
