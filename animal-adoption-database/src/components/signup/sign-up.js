import React, { Component } from 'react'
import axios from 'axios'
import 'bulma/css/bulma.min.css';
import "./signup.css";
import HeaderNav from '../Header/HeaderNav'
import Footer from '../Footer/Footer'
import { Redirect } from 'react-router-dom'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password/email
		axios.post('/api/user/', {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div>
					<HeaderNav />
					<div className="signup-form">
						<div className="signup-body">
							<div class="signup-title">
								<h4>Sign up</h4>
							</div>
							<form className="form-horizontal">
								<div className="form-group">
									<div className="col-1 col-ml-auto">
										<label className="form-label" htmlFor="username">Username</label>
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
										<label className="form-label" htmlFor="email">Email: </label>
									</div>
									<div className="col-3 col-mr-auto">
										<input className="form-input"
											type="email"
											name="email"
											value={this.state.email}
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
										className="btn btn-primary col-1 col-mr-auto signup-btn"
										onClick={this.handleSubmit}
										type="submit"
									>Sign up</button>
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

export default Signup
