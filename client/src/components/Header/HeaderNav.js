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
        axios.post('/api/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error: ' + error)
        })
    }


    render() {

        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <a className="navbar-brand" href="/"></a>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item main-button" href="/savedanimals">
                            Your ❤ Animals
                        </a>
                        <a className="navbar-item main-button" href="/mewsletter">
                            Mewsletter
                        </a>
                        <a className="navbar-item main-button" href="/animaltips">
                            Animal Tips
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable more-button1">
                            <button className="navbar-link">
                                More
                            </button>
                            <div className="navbar-dropdown">
                                <a className="navbar-item dropdown-item" href="about">
                                    About
                                </a>
                                <a className="navbar-item dropdown-item" href="test">
                                    Jobs & Volunteering
                                </a>
                                <a className="navbar-item dropdown-item" href="https://github.com/Artydabomb/Animal-Adoption-Database">
                                    Contact Us
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item dropdown-item report-button" href="https://github.com/Artydabomb/Animal-Adoption-Database/issues">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                {this.props.loggedIn ? (
                                    <section className="navbar-section">
                                        <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                            <button className="text-secondary navbar-item signupbtn">Logout</button></Link>

                                    </section>
                                ) : (
                                    <section className="navbar-item">
                                        <Link to="/login" className="btn btn-link text-secondary">
                                            <button className="navbar-item loginbtn">Login</button>
                                        </Link>

                                        <Link to="/signup" className="btn btn-link is-hoverable">
                                            <button className="navbar-item is-hoverable signupbtn">Sign up</button>
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