import React, { useState } from 'react'
import Modal from "./modalOrderConfirm"
import "../../styles/menu/modalCancel.css"
import SendOrder from '../../fb-function';


const ModalConfirm = ({name, table}) => {
    const [active, setActive] = useState(false);
    // const [name, setName] = useState("");
    // const [table, setTable] = useState();

    const toggle = () => {
        setActive(!active)
    }

    return (
        <>
            <button className="btn-order-green" onClick={toggle}>
                CONFIRMAR
            </button>
            <Modal active={active} toggle={toggle}>
                <h5 className="text-modal">¿Deseas enviar el pedido?</h5>
                <section className="butons-modal">
                    <button className="buttonCancel" onClick={toggle}>Cancelar</button>
                    <SendOrder name={name}  table={table} />
                </section>
            </Modal>
        </>
    )
}

export default ModalConfirm;