import './App.css';
import React from 'react'

class LoginScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = { email: "", password: "", answer: "" }
  }


  onChange(e) {
    const val = e.target.id
    let currentState = this.state
    currentState[val] = e.target.value
    this.setState(currentState)
  }

  onSubmit(e) {
    e.preventDefault()
    this.loginFunction(this.state)

  }

  loginFunction(data) {
    return fetch(
      "http://0.0.0.0/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `grant_type=password&username=${data.email}&password=${data.password}`
      }
    ).then((item) => {this.setState({answer: item.status}); return item.json()})
      .then((item) => {console.log(item); localStorage.setItem('token', item.access_token)})
  }

  getUsers() {
    return fetch(
      "http://0.0.0.0/user",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": `Bearer ${localStorage.getItem('token')} `
        }
      }
    ).then((item) => {this.setState({users: item.status}); return item.json()})
      .then((item) => console.log(item))
  }

  render() {

    const LoginComponent = 
    <div className="App">
      <input id='email' onChange={this.onChange.bind(this)} placeholder="Email"></input>
      <input id='password' onChange={this.onChange.bind(this)} placeholder="Password"></input>
      <button onClick={this.onSubmit.bind(this)}>Login</button>
    </div>

    const Message = 
    <div>
      Answer: {this.state.answer}
      <div>
        <button onClick={this.getUsers.bind(this)}>Get Users</button>
        Answer: {this.state.users}
      </div>
    </div>

    return (
      <>
        {LoginComponent}
        {Message}
      </>
    )
  }
}



export default LoginScreen;
