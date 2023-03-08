import React, { useEffect, useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import data from "../mockdata/DataTable";
import classNames from 'classnames';
import './custom.css'

const DataTable = () => {
    const tableRef = useRef(null);
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

    useEffect(() => {
        findElementsByRow()
    })

    const getBadgeData = (el) => {
        let badge = classNames()
        switch (el) {
            case "1":
                badge = classNames("badge", "bg-success", "mt-2")
                return [badge.split(' '), 'Обычный']
            case "2":
                badge = classNames("badge", "bg-secondary", "mt-2")
                return [badge.split(' '), 'Неизвестно']
            default:
                console.log('error')
                return [['badge', 'bg-danger', 'mt-2'], 'Ошибка']
        }
    }

    const findElementsByRow = () => {
        // Get a reference to the table element
        const table = tableRef.current;

        // Select all rows in the table
        const rows = table.querySelectorAll("tbody tr");

        // Loop through each row and find the elements you need
        rows.forEach((row) => {
            const statusValue = row.querySelector("td:nth-child(3) > div")

            const tmp = getBadgeData(statusValue.parentNode.id)

            statusValue.classList.add(...tmp[0]);
            statusValue.style.display = "flex";
            statusValue.style.justifyContent = "center";
            statusValue.style.alignItems = "center";
            statusValue.innerText = tmp[1]

            const idValue = row.querySelector("td:first-child > div")
            const id = idValue.innerText
            idValue.innerHTML = `<a href="#" className="link-primary">${id}</a>`
        });
    };

    const headerLocalisation = () => {
        const table = tableRef.current;
        const row = table.querySelector("thead tr");
            console.log(row)
        
    }

    return (
        <>
            <Table ref={tableRef} bordered hover striped variant="light">
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
                            {Object.keys(item).map((key, index) => (
                                <td key={key} id={index === 2 ? item[key] : null}><div>{item[key]}</div></td>
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
                                <li className="page-item"><a id={Number(page - 1)} className="page-link" href="#/" onClick={prevPage}>{Number(page - 1)}</a></li>
                            </> : ""
                        }
                        <li className="page-item active"><a className="page-link" href="#/">{page}</a></li>
                        {(15 * (page)) < data.length ?
                            <><li className="page-item"><a id={Number(page + 1)} className="page-link" href="#/" onClick={nextPage}>{Number(page + 1)}</a></li>
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