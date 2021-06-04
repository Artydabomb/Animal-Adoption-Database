<<<<<<< HEAD
import React, { Component } from 'react'
import { BrowserRouter, Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import '../../App.css';
import axios from 'axios'
import "./Navbar.css"


class HeaderNav extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        return (
            <nav class="navbar" role="navigation" aria-label="main navigation">

                <a class="navbar-brand" href="/">
=======
import React from "react";

function HeaderNav() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    
>>>>>>> 506c72b49ec9668c2e5bbb515fe6030e577623af
                </a>

<<<<<<< HEAD

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item" href="test">
                            Mewsletter

                    </a>

                        <a class="navbar-item" href="test">
                            Animal Tips
                    </a>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link" href="test">
                                More
                        </a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item" href="test">
                                    About
                            </a>
                                <a class="navbar-item" href="test">
                                    Jobs & Volunteering
                            </a>
                                <a class="navbar-item" href="test">
                                    Contact Us
                            </a>
                                <hr class="navbar-divider" />
                                <a class="navbar-item" href="test">
                                    Report an issue
=======
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="test">
                        Mewsletter
                    </a>

                    <a className="navbar-item" href="test">
                        Animal Tips
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href="test">
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item" href="test">
                                About
                            </a>
                            <a className="navbar-item" href="test">
                                Jobs & Volunteering
                            </a>
                            <a className="navbar-item" href="test">
                                Contact Us
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item" href="test">
                                Report an issue
>>>>>>> 506c72b49ec9668c2e5bbb515fe6030e577623af
                            </a>
                            </div>
                        </div>
                    </div>

<<<<<<< HEAD
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">

                                <BrowserRouter>

                                    {loggedIn ? (
                                        <section className="navbar-section">
                                            <Link to="#" class="btn btn-link text-secondary" onClick={this.logout}>
                                                <span class="text-secondary">Logout</span></Link>

                                        </section>
                                    ) : (
                                        <section className="navbar-item">
                                            <Link to="/login" class="btn btn-link text-secondary">
                                                <a class="navbar-item is hoverable">Login</a>
                                            </Link>
                                            
                                            <Link to="/signup" class="btn btn-link is-hoverable">
                                                <a class="navbar-item is-hoverable">Sign up</a>
                                            </Link>

                                        </section>
                                    )}
                                </BrowserRouter>
                            </div>
=======
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary" href="test">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light" href="test">
                                Log in
                            </a>
>>>>>>> 506c72b49ec9668c2e5bbb515fe6030e577623af
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}
export default HeaderNav;