import { React, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsDatabaseAdd } from "react-icons/bs";
import classNames from 'classnames';

export function PopUpCreate(props) {

    const title = useRef("")
    const description = useRef("")
    const age = useRef("")

    const { active, fnc, updated, setUpdated } = props

    const disableModal = () => {
        fnc(false)
    }

    const pushData = () => {
        return fetch(
            "http://0.0.0.0/items",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({'title': title.current.value, 'description': description.current.value})
            }
        ).then((item) => {
            let body = item.json()
            let status = item.status
            return ([status, body])})
            .then((item) => {
            console.log(item[0])}).then(() => {setUpdated(updated+1); disableModal()})
    }

    const modalWindow = classNames("modal", active ? "modal-dialog-centered" : null)

    return (
        <div className={modalWindow} tabIndex="-1" id="addItemModal" style={{ display: active ? "flex" : null}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Быстрое добавление элемента {<BsDatabaseAdd />} </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={disableModal} aria-label="Закрыть"></button>
                    </div>
                    <div className="modal-body">
                        <label className="form-label">Наименование:</label>
                        <input ref={title} type="text" className="form-control mb-2" placeholder="Наименование.."/>

                        <label className="form-label">Возраст:</label>
                        <input ref={age} type="number" className="form-control mb-2" placeholder="1-3.."/>

                        <label className="form-label">Комментарий:</label>
                        <input ref={description} type="text" className="form-control mb-2" placeholder="Комментарий.."/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={disableModal}>Закрыть</button>
                        <button type="button" className="btn btn-primary" onClick={pushData}>Добавить</button>
                    </div>
                </div>
            </div>
        </div>

    )
}