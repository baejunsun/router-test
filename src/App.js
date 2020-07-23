import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to="/" activeStyle={{fontSize: 5}}>Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/profile/33">Profile/33</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Login">Login</Link></li>
      </ul>
      <Switch>
        <Route path="/Profile/:id" component={Profile}/>
        <Route path="/Profile" component={Profile}/>
        <Route path="/About" component={About}/>
        <Route path="/Login" component={Login}/>
        <Route path="/" component={Home}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// function Route({path, component}) {

//   return <component location={} match={} history={}> />
// }
