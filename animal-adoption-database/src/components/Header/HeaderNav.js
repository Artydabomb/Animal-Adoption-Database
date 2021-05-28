import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import '../../App.css';
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'

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
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="../../images/Animal_Database_Logo.png" width="112" height="28" alt="Bulma.io" />
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="test">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

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

                                <BrowserRouter>

                                    {loggedIn ? (
                                        <section className="navbar-section">
                                            <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                                <span className="text-secondary">Logout</span></Link>

                                        </section>
                                    ) : (
                                        <section className="navbar-section">
                                            <Link to="/login" className="btn btn-link text-secondary">
                                                <span className="text-secondary">Login   </span>
                                            </Link>

                                            <Link to="/signup" className="btn btn-link">
                                                <span className="text-secondary"> Sign up</span>
                                            </Link>

                                        </section>
                                    )}
                                </BrowserRouter>,
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}
export default HeaderNav;