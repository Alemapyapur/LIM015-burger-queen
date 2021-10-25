// import { Modal } from 'bootstrap';
import React, { useState } from 'react'
import Modal from "./modalOrderConfirm"


const ModalConfirm = () => {
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active)
    }

    return (
        <>
            <button  onClick={toggle}>
                CONFIRMAR
            </button>
            <Modal active={active} toggle={toggle}>
                <h1>modal works</h1>
            </Modal>
        </>
    )
}

export default ModalConfirm;