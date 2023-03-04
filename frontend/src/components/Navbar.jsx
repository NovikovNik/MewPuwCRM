import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menu( props ) {

    const navigation = useNavigate()
    const logOut = () => {
        navigation('/login')
    }

    return (
        <>
        <nav class="navbar navbar-expand-lg" style={{ backgroundColor: '#D3D3D3' }} data-bs-theme="light">
            <div className="container-fluid">
                <a className="navbar-brand h2" href="/#">MewPuw</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mr-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active h2" aria-current="page" href="#/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active h2" aria-current="page" href="#/">Profile</a>
                        </li>
                        <li class="nav-item" >
                        </li>
                    </ul>
                    <div>
                        <a class="nav-link active h2" aria-current="page" onClick={logOut} href="#/">Logout</a>
                    </div>

                </div>
            </div>
        </nav>
        {props.children}
        </>
    )
}