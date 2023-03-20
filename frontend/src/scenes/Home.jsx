import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "../components/DataTable";
import SearchCreateBar from "../components/SearchAndCreate";
import { PopUpCreate } from "../components/PopUpCreateWindow";

export default function Home() {

    const [showModalAdd, setModalAdd] = useState(false)
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(
            "http://0.0.0.0/items",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        ).then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data)
            })
            .catch(error => {console.error(error); setData([])});
    }, []);

    return (
        <div className="container">
            <SearchCreateBar openModal={setModalAdd} />
            <PopUpCreate active={showModalAdd} fnc={setModalAdd} />
            <div className="row justify-content-center">
                <div className="col-11 mb-3">
                    <DataTable table={data} />
                </div>
            </div>
        </div>
    )
}