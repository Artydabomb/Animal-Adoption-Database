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

// import './components/Search.css';

function App() {
  const [searchState, setSearchState] = useState({
    searchTerm: "",
    speciesSearch: "dog",
    zipCode: "",
    searchResults: []
  });

  function setResults(data) {
    setSearchState({
      ...searchState,
      searchResults: Object.values(data)
    })
    console.log(data)
  }

  function setSearchSpeciesCat() {
    setSearchState({
      ...searchState,
      speciesSearch: "cat"
    })
  }

  function setSearchSpeciesDog() {
    setSearchState({
      ...searchState,
      speciesSearch: "dog"
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
              <HeaderNav  />
              <Signup 
              />
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
=======
    <SearchContext.Provider value={searchState}>
      <div className="App container">
        <header className="App-header">
          <Header />
          <Search setResults={setResults} setSearchSpeciesCat={setSearchSpeciesCat} setSearchSpeciesDog={setSearchSpeciesDog}/>
          <BodyNoLogin />
          <Footer />
        </header>
>>>>>>> c61f1e1b5df88ef5cd55c03c898907ea0a40c262
      </div>
    </BrowserRouter>
  );
}



export default App;