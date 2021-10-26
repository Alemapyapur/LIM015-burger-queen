import React, { useState } from 'react'
import Modal from "./modalOrderConfirm"
import "../../styles/menu/modalCancel.css"


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
                <h5 className="text-modal">¿Deseas enviar el pedido?</h5>
                <section className="butons-modal">
                <button onClick={toggle}>Cancelar</button>
                <button>Enviar</button>
                </section>
            </Modal>
        </>
    )
}

export default ModalConfirm;