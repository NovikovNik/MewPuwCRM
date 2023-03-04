import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import data from "../mockdata/DataTable";

const DataTable = () => {
    let show = 3
    let thead = "<tr>"
    const GetTableHead = (source) => {
        for (let key in source[0]) {
            thead = thead + `<th>${key}</th>`
        }
        thead = thead + `<tr>`

        return (thead)
    }

    console.log(GetTableHead(data))

    return (
        <>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key, index, array) => (
                            <th key={key} colSpan={index === array.length - 1 ? 2 : 1}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {Object.keys(item).map(key => (
                                <td key={key}>{item[key]}</td>
                            ))}
                            <td>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="row">
                <div className="col-2">
                    <h5 className="text-muted">Показано: {show} из {data.length}</h5>
                </div>
                <nav className="col-10" aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </>

    )
}

export default DataTable