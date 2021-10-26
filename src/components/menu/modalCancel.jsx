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
                <h5>¿Deseas cancelar el pedido?</h5>
                <button onClick={toggle}>Cancelar</button>
                <button>Aceptar</button>
            </Modal>
        </>
    )
}

export default ModalCancel;

