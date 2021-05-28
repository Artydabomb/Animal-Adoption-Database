import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
// compoonents
import Search from './components/Search/Search';
import Header from './components/Header/HeaderNav';
import BodyNoLogin from './components/BodyNoLogin/BodyNoLogin';
import Footer from './components/Footer/Footer';
import Signup from './components/signup/sign-up'
import LoginForm from './components/login-form/login-form'
import "./App.css";
import 'bulma/css/bulma.min.css';



// import './components/Search.css';


  function App() {
    return (<BrowserRouter>
      <div className="App container">
        <header className="App-header">
          <Header />
          <Search />
          <BodyNoLogin />
          <Footer />
        </header>
        
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
     
      </div>
      </BrowserRouter>
    );
  }

export default App;
