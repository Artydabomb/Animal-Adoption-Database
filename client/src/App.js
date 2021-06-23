import React, { Component, useEffect, useState } from 'react';
import axios from 'axios'
import { Route, Link, Switch, Router } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
// compoonents
import Search from './components/Search/Search';
import HeaderNav from './components/Header/HeaderNav';
import BodyNoLogin from './components/BodyNoLogin/BodyNoLogin';
import SavedAnimals from './components/savedAnimals/savedAnimals';
import Footer from './components/Footer/Footer';
import Signup from './components/signup/sign-up'
import LoginForm from './components/login-form/login-form'
import API from './utils/API'
import "./App.css";
import 'bulma/css/bulma.min.css';
import SearchContext from './utils/SearchContext';
import Mewsletter from './components/Mewsletter/Mewsletter';
import AnimalTips from './components/AnimalTips/AnimalTips';
import Profile from './components/Profile/Profile';
import PageNotFound from './components/PageNotFound/PageNotFound';
//import {Passport} from '../server/passport/index';

function App() {
  const [searchState, setSearchState] = useState({
    searchTerm: "",
    species: "",
    zipCode: "",
    searchResults: []
  });

  function setResults(data) {
    setSearchState({
      ...searchState,
      searchResults: Object.values(data)
    })
  }

  const [userState, setUserState] = useState({
    loggedIn: false,
    username: ""
  });

  useEffect(() => {
    getUser()
  }, []);

  function updateUser(userObject) {
    setUserState(userObject)
  }

  function getUser() {
    axios.get('api/user/').then(response => {
      if (response.data.user) {

        setUserState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        setUserState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  return (
    <BrowserRouter>
      <div>
        <Switch>
          
          {/* Homepage */}
          <Route exact path="/">
            <SearchContext.Provider value={searchState}>
              <div className="App container">
                <header className="App-header">
                  <HeaderNav 
                    updateUser={updateUser}
                    username={userState.username}
                    loggedIn={userState.loggedIn} 
                  />
                  <Search setResults={setResults} />
                  <BodyNoLogin loggedIn={userState.loggedIn} username={userState.username} />
                  <Footer />
                </header>
              </div>
            </SearchContext.Provider>
          </Route>
            {/* Profile page */}
          <Route 
            path="/user"
            render={() =>      
              <div className="App container">
              <header className="App-header">
                <HeaderNav updateUser={updateUser} username={userState.username} loggedIn={userState.loggedIn} />
                <Profile 
                  username={userState.username} 
                  loggedIn={userState.loggedIn} 
                />
              </header>
            </div>}
          />

            {/* Signup page */}
            <Route
              path="/signup"
              render={() =>
                <div className="App container">
                <header className="App-header">
                  <HeaderNav updateUser={updateUser} username={userState.username} loggedIn={userState.loggedIn} />
                  <Signup
                    updateUser={updateUser}
                    username={userState.username}
                    loggedIn={userState.loggedIn}
                  />
                </header>
              </div>}
            />

            {/* Login page */}
            <Route
              path="/login"
              render={() =>
                <div className="App container">
                <header className="App-header">
                  <HeaderNav updateUser={updateUser} username={userState.username} loggedIn={userState.loggedIn} />
                  <LoginForm
                    updateUser={updateUser}
                  />
                </header>
              </div>}
            />

            {/* Saved Animals page (probably going to delete) */}
            <Route
              path="/savedAnimals"
              render={() =>
                <div className="App container">
                <header className="App-header">
                  <HeaderNav updateUser={updateUser} username={userState.username} loggedIn={userState.loggedIn} />
                  <SavedAnimals
                    loggedIn={userState.loggedIn}
                    username={userState.username}
                  />
                </header>
              </div>}
            />

            {/* Mewsletter page */}
            <Route
              path="/mewsletter"
              render={() =>
                <div className="App container">
                <header className="App-header">
                  <HeaderNav updateUser={updateUser} username={userState.username} loggedIn={userState.loggedIn} />
                  <Mewsletter />
                </header>
              </div>}
            />

            {/* Animal Tips page */}
            <Route
              path="/animaltips"
              render={() =>
                <div className="App container">
                <header className="App-header">
                  <HeaderNav updateUser={updateUser} username={userState.username} loggedIn={userState.loggedIn} />
                  <AnimalTips />
                </header>
              </div>}
            />
            {/* 404 Not Found page */}
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}



export default App;