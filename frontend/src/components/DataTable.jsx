import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import data from "../mockdata/DataTable";

const DataTable = () => {
    const [page, setPage] = useState(1)

    let startIndex = 0 + 15 * (page - 1)
    let maxIndex = 15 + 15 * (page - 1)

    const newData = data.slice(startIndex, maxIndex)

    const nextPage = (element) => {
        element.preventDefault()
        setPage(page + 1)
    }

    const prevPage = (element) => {
        element.preventDefault()
        if ((page - 1) > 0) {
            setPage(page - 1)
        }
    }

    return (
        <>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        {Object.keys(newData[0]).map((key, index, array) => (
                            <th key={key} colSpan={index === array.length - 1 ? 2 : 1}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {newData.map((item, index) => (
                        <tr key={index}>
                            {Object.keys(item).map(key => (
                                <td key={key}>{item[key]}</td>
                            ))}
                            <td>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="row">
                <div className="col-2">
                    <h5 className="text-muted">Всего: {data.length}</h5>
                </div>
                <nav className="col-10" aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                        {page > 1 ?
                            <>
                                <li className="page-item"><a className="page-link" href="#/" onClick={prevPage}>Previous</a></li>
                                <li className="page-item"><a id={Number(page-1)} className="page-link" href="#/" onClick={prevPage}>{Number(page - 1)}</a></li>
                            </> : ""
                        }
                        <li className="page-item active"><a className="page-link" href="#/">{page}</a></li>
                        {(15 * (page)) < data.length ?
                            <><li className="page-item"><a id={Number(page+1)} className="page-link" href="#/" onClick={nextPage}>{Number(page + 1)}</a></li>
                                <li className="page-item"><a className="page-link" href="#/" onClick={nextPage}>Next</a></li>
                            </> : ""
                        }
                    </ul>
                </nav>
            </div>
        </>

    )
}

export default DataTable