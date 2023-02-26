import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginScreen() {

    const [data, setData] = useState({ email: '', password: '' })
    const [serverAnswer, setAnswer] = useState('')
    useEffect(() => { console.log(data) }, [data])

    const history = useNavigate();

    const onChangeHandler = event => {
        const value = event.target.value
        const id = event.target.id
        setData({ ...data, [id]: value })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const loginFunction = (data) => {
            return fetch(
                "http://0.0.0.0/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: `grant_type=password&username=${data.email}&password=${data.password}`
                }
            ).then((item) => { setAnswer(item.status); return ([item.status, item.json()]) })
                .then((item) => {
                    console.log(serverAnswer); localStorage.setItem('token', item[1].access_token);
                    if (item[0] === 200) {
                        history('/home')
                    }
                })
        }

        if (data.email) {
            loginFunction(data)
        }

        return false;
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-3" style={{ paddingTop: "220px", position: 'absolute' }}>
                <div className="alert alert-info" style={{ visibility: serverAnswer ? 'visible' : 'hidden' }}>
                    Message: {serverAnswer}
                </div>
                <div name="form" style={{ alignContent: "center", borderStyle: 'solid', paddingTop: '15px', paddingLeft: '10px', paddingRight: '10px' }}>
                    <h2>Login</h2>
                    <div className={'form-group'}>
                        <label htmlFor="username">Username</label>
                        <input id='email' type="text" className="form-control" name="username" onChange={onChangeHandler} />
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="password">Password</label>
                        <input id='password' type="password" className="form-control" name="password" onChange={onChangeHandler} />
                    </div>
                    <div className="form-group" style={{ paddingTop: '15px', paddingBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button className="btn btn-primary" style={{ width: '150px' }} onClick={onSubmit}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}