import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import 'bulma/css/bulma.min.css';
import './login.css';
import HeaderNav from '../Header/HeaderNav'
import Footer from '../Footer/Footer'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onButtonClick = () => {
        console.log("Button Clicked")
        this.props.reloadChild();
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/api/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({

                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <div className="login-form">
                        <div className="container login-body">
                            <div className="login-title">
                                <h4>Login</h4>
                            </div>
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <div className="col-1 col-ml-auto">
                                        <label className="form-label" htmlFor="username">Username:</label>
                                    </div>
                                    <div className="col-3 col-mr-auto">
                                        <input className="form-input"
                                            type="text"
                                            id="username"
                                            name="username"
                                            placeholder="Username"
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-1 col-ml-auto">
                                        <label className="form-label" htmlFor="password">Password: </label>
                                    </div>
                                    <div className="col-3 col-mr-auto">
                                        <input className="form-input"
                                            placeholder="password"
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <div className="col-7"></div>
                                    <button
                                        className="btn btn-primary col-1 col-mr-auto login-btn"
                                        onClick={this.handleSubmit}

                                        type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}

export default LoginForm
