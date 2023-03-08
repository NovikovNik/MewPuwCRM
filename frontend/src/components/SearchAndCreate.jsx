import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch } from "react-icons/bs";

const SearchCreateBar = () => {

    return (
        <div className="row mb-2">
            <div className="col-8">
                <button className="btn btn-outline-secondary mr-2">Добавить</button>
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