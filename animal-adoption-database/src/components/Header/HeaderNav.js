import React, { Component } from 'react'
import { BrowserRouter, Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import 'bulma/css/bulma.min.css';
import './Navbar.css'



class HeaderNav extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/api/user/logout').then(response => {
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
        console.log(this.props.loggedIn);

        return (
            <nav class="navbar" role="navigation" aria-label="main navigation">

                <a class="navbar-brand" href="/">
                </a>


                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">

                        <a class="navbar-item main-button" href="test">
                            Your ❤ Animals
                    </a>
                        <a class="navbar-item main-button" href="test">
                            Mewsletter

                    </a>

                        <a class="navbar-item main-button" href="test">
                            Animal Tips
                    </a>

                        <div class="navbar-item has-dropdown is-hoverable more-button1">
                            
                                <button class="navbar-link">
                                    More
                                </button>
                            
                            <div class="navbar-dropdown">
                                <a class="navbar-item dropdown-item" href="test">
                                    About
                            </a>
                                <a class="navbar-item dropdown-item" href="test">
                                    Jobs & Volunteering
                            </a>
                                <a class="navbar-item dropdown-item" href="https://github.com/Artydabomb/Animal-Adoption-Database">
                                    Contact Us
                            </a>
                                <hr class="navbar-divider" />
                                <a class="navbar-item dropdown-item report-button" href="https://github.com/Artydabomb/Animal-Adoption-Database/issues">
                                    Report an issue
                            </a>
                            </div>
                        </div>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">

                                {loggedIn ? (
                                    <section className="navbar-section">
                                        <Link to="#" class="btn btn-link text-secondary" onClick={this.logout}>
                                            <button class="text-secondary signupbtn">Logout</button></Link>

                                    </section>
                                ) : (
                                    <section className="navbar-item">
                                        <Link to="/login" class="btn btn-link text-secondary">
                                            <button class="navbar-item loginbtn">Login</button>
                                        </Link>

                                        <Link to="/signup" class="btn btn-link is-hoverable">
                                            <button class="navbar-item is-hoverable signupbtn">Sign up</button>
                                        </Link>

                                    </section>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}
export default HeaderNav;