import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "../components/DataTable";
import SearchCreateBar from "../components/SearchAndCreate";
import { PopUpCreate } from "../components/PopUpCreateWindow";

export default function Home() {

    const [showModalAdd, setModalAdd] = useState(false)
    const [updated, setUpdated] = useState(0)
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(updated)
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
    }, [updated]);

    return (
        <div className="container">
            <SearchCreateBar openModal={setModalAdd} />
            <PopUpCreate active={showModalAdd} fnc={setModalAdd} updated={updated} setUpdated={setUpdated} />
            <div className="row justify-content-center">
                <div className="col-11 mb-3" style={{'height': '100vh', 'minHeight': '600px'}}>
                    <DataTable table={data} />
                </div>
            </div>
        </div>
    )
}