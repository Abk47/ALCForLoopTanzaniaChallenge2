import React from 'react';
import './App.css';
// import SignIn from './components/SignIn/SignIn';
// import SignUp from './components/SignUp';
import Sidebar from './components/Sidebar';
import UserProfile from './components/UserProfile';

class App extends React.Component {
  render(){
  return (
    <div className="App">
       {/* <SignUp />  */}
       {/* <SignIn />      */}
       <Sidebar />
       <UserProfile />
    </div>
  );
}
}

export default App;
