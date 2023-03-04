import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginScreen() {

    const [data, setData] = useState({ email: '', password: '' })
    const [serverAnswer, setAnswer] = useState('')
    useEffect(() => {
        document.body.classList.add('gradient-background');
        return () => {
            document.body.classList.remove('gradient-background');
        }
    })

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
            ).then((item) => {
                let body = item.json()
                let status = item.status
                return ([status, body])})
                .then((item) => {
                    if (item[0] === 200) {
                        item[1].then((body) => localStorage.setItem('token', body.access_token))
                        history('/home')
                    } else { 
                        item[1].then((body) => setAnswer(body.detail))
                    }
                })
        }

        if (data.email) {
            loginFunction(data)
        }

        return false;
    }

    return (
        <div className="container h-100">
            <div className="row vh-100 justify-content-center align-items-center">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5 ">
                    <div class="card bg-secondary text-white" sx={{ borderRadius: "1rem" }}>
                        <div class="card-body text-center">

                            <div class="mb-3">

                                <h2 class="fw-bold mb-2 text-uppercase">Авторизация</h2>
                                <p class="text-white-50 mb-3">Введите Email и пароль!</p>

                                <div class="form-outline form-white mb-3">
                                    <label class="form-label">Email</label>
                                    <input type="email" placeholder="email@domain.com" id="email" onChange={onChangeHandler} class="text-center form-control form-control-lg" />
                                </div>

                                <div class="form-outline form-white">
                                    <label class="form-label">Password</label>
                                    <input type="password" onChange={onChangeHandler} id="password" placeholder="myawesomepassword" class="text-center form-control form-control-lg" />
                                </div>

                                <p class="small mb-3"><a class="text-white-50" href="#!">Забыли пароль?</a></p>

                                <button onClick={onSubmit} class="btn btn-outline-light btn-lg px-5" type="button">Войти</button>

                                <div class="alert alert-danger mt-3" role="alert" style={{visibility: serverAnswer === '' ? 'hidden' : 'visible'}}>
                                    {serverAnswer}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}