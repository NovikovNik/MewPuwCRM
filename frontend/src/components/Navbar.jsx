import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import { BsDatabase, BsArrowRightSquare, BsPersonBadge } from "react-icons/bs";

export default function Menu(props) {

    const navigation = useNavigate()
    const logOut = () => {
        navigation('/login')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg mb-2 sticky-top" style={{ backgroundColor: '#D3D3D3' }} data-bs-theme="light">
                <div className="container-fluid">
                    <a className="navbar-brand h2" href="/#">MewPuw CRM</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mr-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active h2" aria-current="page" href="#/">Главная страница {<BsDatabase/>}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active h2" aria-current="page" href="#/">Профиль {<BsPersonBadge/>}</a>
                            </li>
                            <li className="nav-item" >
                            </li>
                        </ul>
                        <div>
                            <a className="nav-link active h2" aria-current="page" onClick={logOut} href="#/">Test User (Admin)</a>
                        </div>
                        <div style={{marginLeft: 10}}>
                            <a className="nav-link active h2" aria-current="page" onClick={logOut} href="#/">Выйти {<BsArrowRightSquare/>}</a>
                        </div>
                    </div>
                </div>
            </nav>
            {props.children}
            <Footer />
        </>
    )
}