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
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}
export default HeaderNav;