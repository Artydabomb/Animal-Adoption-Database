import React, { Component, useEffect, useState } from 'react';
import axios from 'axios'
import { Route, Link, Switch, Router } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
// compoonents
import Search from './components/Search/Search';
import HeaderNav from './components/Header/HeaderNav';
import BodyNoLogin from './components/BodyNoLogin/BodyNoLogin';
import Footer from './components/Footer/Footer';
import Signup from './components/signup/sign-up'
import LoginForm from './components/login-form/login-form'
import API from './utils/API'
import "./App.css";
import 'bulma/css/bulma.min.css';
import SearchContext from './utils/SearchContext';
import SavedSearches from "./components/SavedSearches/SavedSearches";

// import './components/Search.css';

function App() {
  const [searchState, setSearchState] = useState({
    searchTerm: "",
    dogSearch: true,
    zipCode: "",
    searchResults: []
  });

  function setResults(data) {
    setSearchState({
      ...searchState,
      searchResults: Object.values(data)
      searchResults: Object.entries(data).map((e) => ({ [e[0]]: e[1] }))
    })
  }

  const [userState, setUserState] = useState({
    loggedIn: false,
    username: null
  });

  useEffect(() => {
    getUser()
  }, []);

  function updateUser(userObject) {
    setUserState(userObject)
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
<<<<<<< HEAD
    <SearchContext.Provider value={searchState}>
      <div className="App container">
        <header className="App-header">
          <Header />
          <Search setResults={setResults}/>
          <SavedSearches />
          <BodyNoLogin />
          <Footer />
        </header>
=======
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <SearchContext.Provider value={searchState}>
              <div className="App container">
                <header className="App-header">
                  <HeaderNav />
                  <Search setResults={setResults} />
                  <BodyNoLogin />
                  <Footer />
                </header>
              </div>
            </SearchContext.Provider>
          </Route>
          <Route path="/signup">
            <div>
              <HeaderNav />
              <Signup />
              <Footer />
            </div>
          </Route>
          <Route path="/login">
            <div>
              <HeaderNav />
              <LoginForm />
              <Footer />
            </div>
          </Route>
        </Switch>
>>>>>>> 438d65cc229907c5b5d2c13c48c24b2c7d87f9a7
      </div>
    </BrowserRouter>
  );
}



export default App;