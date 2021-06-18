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
          <Route exact path="/">
            <SearchContext.Provider value={searchState}>
              <div className="App container">
                <header className="App-header">
                  <HeaderNav updateUser={updateUser}
                    username={userState.username}
                    loggedIn={userState.loggedIn} />
                  <Search setResults={setResults} />
                  <BodyNoLogin loggedIn={userState.loggedIn} username={userState.username} />
                  <Footer />
                </header>
              </div>
            </SearchContext.Provider>
          </Route>
          <div class="container">
            <Route
              path="/signup"
              render={() =>
                <Signup
                  updateUser={updateUser}
                  username={userState.username}
                  loggedIn={userState.loggedIn}
                />}
            />
            <Route
              path="/login"
              render={() =>
                <LoginForm
                  updateUser={updateUser}
                />}
            />
            <Route
              path="/savedAnimals"
              render={() =>
                <savedAnimals
                  loggedIn={userState.loggedIn}
                />}
            />
            <Route
              path="/mewsletter"
              render={() =>
                <Mewsletter           
                />}
            />
            <Route
              path="/animaltips"
              render={() =>
                <AnimalTips          
                />}
            />
            <Route
              path="/savedanimals"
              render={() =>
                <SavedAnimals          
                />}
            />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}



export default App;