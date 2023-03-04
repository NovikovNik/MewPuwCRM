import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchCreateBar = () => {

    return (
        <div className="row mb-2">
            <div className="col-8">
                <button className="btn btn-outline-secondary mr-2">Добавить</button>
                <button className="btn btn-outline-secondary ml-2" style={{marginLeft: 10}}>Действия</button>
            </div>
            <div className="input-group col">
                <input type="text" class="form-control" placeholder="Поиск..." aria-label="Поиск" />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Поиск</button>
                </div>
            </div>
        </div>
    )
}

export default SearchCreateBar