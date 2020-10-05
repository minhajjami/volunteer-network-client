import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import VolunteerRegister from './components/VolunteerRegister/VolunteerRegister';
import HeaderTwo from './components/HeaderTwo/HeaderTwo';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import EventTask from './components/EventTask/EventTask';
import Admin from './components/Admin/Admin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Header></Header>
            <Search></Search>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Header></Header>
            <Admin />
          </Route>
          <PrivateRoute path="/register/:name">
            <HeaderTwo />
            <VolunteerRegister></VolunteerRegister>
          </PrivateRoute >
          <PrivateRoute path="/event">
            <Header></Header>
            <EventTask />
          </PrivateRoute>
          <Route exact path="/">
            <Header></Header>
            <Search></Search>
            <Home />
            <Home />
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
