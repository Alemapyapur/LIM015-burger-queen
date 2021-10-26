// import { Modal } from 'bootstrap';
import React, { useState } from 'react'
import Modal from "./modalOrderConfirm"


const ModalCancel = () => {
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active)
    }

    return (
        <>
            <button className="btn-order-red" onClick={toggle}>
                CANCELAR
            </button>
            <Modal active={active} toggle={toggle}>
                <h1>modal works</h1>
            </Modal>
        </>
    )
}

export default ModalCancel;