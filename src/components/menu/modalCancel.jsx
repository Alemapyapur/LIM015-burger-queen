import React, { useState } from 'react'
import Modal from "./modalOrderConfirm"
import "../../styles/menu/modalCancel.css"


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
                <h5 className="text-modal">¿Deseas cancelar el pedido?</h5>
                <section className="butons-modal">
                    <button onClick={toggle}>Cancelar</button>
                    <button>Aceptar</button>
                </section>
            </Modal>
        </>
    )
}

export default ModalCancel;

