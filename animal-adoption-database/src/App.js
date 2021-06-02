import React, { Component, useEffect } from 'react';
import axios from 'axios'
import { Route, Link, Router, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
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

// import './components/Search.css';

function App() {
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



export default App;