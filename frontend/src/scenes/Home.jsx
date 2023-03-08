import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "../components/DataTable";
import SearchCreateBar from "../components/SearchAndCreate";
import { PopUpCreate } from "../components/PopUpCreateWindow";

export default function Home() {

    const [showModalAdd, setModalAdd] = useState(false)

    return (
        <div className="container">
            <SearchCreateBar openModal={setModalAdd}/>
            <PopUpCreate active={showModalAdd} fnc={setModalAdd} />
            <div className="row justify-content-center">
                <div className="col-11 mb-3">
                    <DataTable />
                </div>
            </div>
        </div>
    )
}