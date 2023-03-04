import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";

export default function Menu(props) {

    const navigation = useNavigate()
    const logOut = () => {
        navigation('/login')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg mb-2" style={{ backgroundColor: '#D3D3D3' }} data-bs-theme="light">
                <div className="container-fluid">
                    <a className="navbar-brand h2" href="/#">MewPuw</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mr-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active h2" aria-current="page" href="#/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active h2" aria-current="page" href="#/">Profile</a>
                            </li>
                            <li className="nav-item" >
                            </li>
                        </ul>
                        <div>
                            <a className="nav-link active h2" aria-current="page" onClick={logOut} href="#/">Logout</a>
                        </div>
                    </div>
                </div>
            </nav>
            {props.children}
            <Footer />
        </>
    )
}