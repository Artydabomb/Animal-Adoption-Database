import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link, Router, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
// compoonents
import React, { useState, useEffect } from "react";
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

function App(){ 
  const [userState, setUserState] = useState ({
      loggedIn: false,
      username: null
    })

  useEffect(()=>{
    getUser()
  },[]);

  function updateUser (userObject){
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

render() {
    return (
      <div className="App container">
        <header className="App-header">
          <HeaderNav />
          <Search />
          <BodyNoLogin />
          <Footer />
        </header>
        
      </div>
    );
  }
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
      searchResults: Object.entries(data).map((e) => ( { [e[0]]: e[1] } ))
    })
    console.log(searchState.searchResults)
  }

  return (
    <SearchContext.Provider value={searchState}>
      <div className="App container">
        <header className="App-header">
          <Header />
          <Search setResults={setResults}/>
          <BodyNoLogin />
          <Footer />
        </header>
      </div>
    </SearchContext.Provider>
  );
}



export default App;