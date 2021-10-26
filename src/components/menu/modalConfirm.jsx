import React, { useState } from 'react'
import Modal from "./modalOrderConfirm"


const ModalConfirm = () => {
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active)
    }

    return (
        <>
            <button className="btn-order-green" onClick={toggle}>
                CONFIRMAR
            </button>
            <Modal active={active} toggle={toggle}>
                <h5>¿Deseas enviar el pedido?</h5>
                <button onClick={toggle}>Cancelar</button>
                <button>Enviar</button>
            </Modal>
        </>
    )
}

export default ModalConfirm;