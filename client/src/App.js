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
          <div className="App container">
            <header className="App-header">
              <HeaderNav updateUser={updateUser} username={userState.username} loggedIn={userState.loggedIn} />

            {/* Profile page */}
            <Route 
              path="/user"
              render={() =>               
                <Profile 
                  username={userState.username} 
                  loggedIn={userState.loggedIn} 
                />}
            />

            {/* Signup page */}
            <Route
              path="/signup"
              render={() =>
                <Signup
                  updateUser={updateUser}
                  username={userState.username}
                  loggedIn={userState.loggedIn}
                />}
            />

            {/* Login page */}
            <Route
              path="/login"
              render={() =>
                <LoginForm
                  updateUser={updateUser}
                />}
            />

            {/* Saved Animals page (probably going to delete) */}
            <Route
              path="/savedAnimals"
              render={() =>
                <savedAnimals
                  loggedIn={userState.loggedIn}
                />}
            />

            {/* Mewsletter page */}
            <Route
              path="/mewsletter"
              render={() =>
                <Mewsletter />}
            />

            {/* Animal Tips page */}
            <Route
              path="/animaltips"
              render={() =>
                <AnimalTips />}
            />

            {/* 404 Not Found page */}
            <Route 
              path="*"
              render={() => 
              <PageNotFound />}
            />
            </header>
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}



export default App;