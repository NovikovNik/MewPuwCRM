import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch, BsDatabaseAdd } from "react-icons/bs";

const SearchCreateBar = (props) => {

    const { openModal } = props

    const createModal = (e) => {
        e.preventDefault()
        openModal(true)
    }

    return (
        <div className="row mb-2">
            <div className="col-8">
                <button className="btn btn-outline-secondary mr-2" onClick={createModal}>Добавить {<BsDatabaseAdd/>}</button>
                <button className="btn btn-outline-secondary ml-2" style={{marginLeft: 10}}>Действия</button>
            </div>
            <div className="input-group col">
                <input type="text" className="form-control" placeholder="Поиск..." aria-label="Поиск" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Поиск{<BsSearch/>}</button>
                </div>
            </div>
        </div>
    )
}

export default SearchCreateBar