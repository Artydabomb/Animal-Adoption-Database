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
  // This is the source of the problem, every time a search is executed it sets the species to whatever this value is. Why doesn't it do that for the search term as well?
  const [searchState, setSearchState] = useState({
    searchTerm: "",
    species: "",
    zipCode: "",
    searchResults: []
  });

  function setResults(data, species) {
    setSearchState({
      ...searchState,
      species: species,
      searchResults: Object.values(data)
    })
    console.log(searchState)
  }

  function setSpecies(species) {
    console.log("Reached setSpecies() in App.js - species: " + species)
    setSearchState({
      ...searchState,
      species: species
    })
    console.log(searchState)
  }

  const [userState, setUserState] = useState({
    loggedIn: false,
    username: "test"
  });

  useEffect(() => {
    getUser()
  }, []);

  function updateUser(userObject) {
    console.log(userObject);
    setUserState({
      loggedIn: false,
      username: ""
    })
  }

  function getUser() {
    axios.get('api/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        setUserState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
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
                  <Search setResults={setResults} setSpecies={setSpecies} />
                  <BodyNoLogin loggedIn={userState.loggedIn} />
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