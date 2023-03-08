import { React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsDatabaseAdd } from "react-icons/bs";
import classNames from 'classnames';

export function PopUpCreate(props) {

    const { active, fnc } = props

    const disableModal = () => {
        fnc(false)
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
                        <input type="text" className="form-control mb-2" placeholder="Название.."/>

                        <label className="form-label">Возраст:</label>
                        <input type="number" className="form-control mb-2" placeholder="1-3.."/>

                        <label className="form-label">Комментарий:</label>
                        <input type="text" className="form-control mb-2" placeholder="Комментарий.."/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={disableModal}>Закрыть</button>
                        <button type="button" className="btn btn-primary">Добавить</button>
                    </div>
                </div>
            </div>
        </div>

    )
}