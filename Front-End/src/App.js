import React from 'react';
import './App.css';
// import SignIn from './components/SignIn/SignIn';
// import SignUp from './components/SignUp';
// import UserProfile from './components/UserProfile';
import Sidebar from './components/Sidebar';
import Info from './components/Info';

class App extends React.Component {
  render(){
  return (
    <div className="App">
       {/* <SignUp />  */}
       {/* <SignIn />      */}
       {/* <UserProfile /> */}
       <Sidebar />
       <Info />
    </div>
  );
}
}

export default App;
