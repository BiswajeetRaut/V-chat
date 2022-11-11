import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Chat from './components/Chat'
import { useState } from 'react';
import Login from './components/Login';
import {useStateValue} from "./StateProvider"
function App() {
  // const [user,setuser]=useState(null); 
  const [{user},dispatch]=useStateValue();
  return (
    //BEM naming convention 
    <div className="App">
    <Router>
    {!user ? (
      <Login/>
    ):
    (<>
    <Header></Header>
     <div className="app_body">
      <Sidebar></Sidebar>
      <Switch>
        <Route path="/room/:roomId">
          <Chat></Chat>
          {/* <h1>Chat Screen</h1> */}
        </Route>
        <Route path="/">
          <h1>Welcome</h1>
        </Route>
      </Switch>
     </div>
    </>
    )}
    </Router>
     
    </div>
  );
}

export default App;
