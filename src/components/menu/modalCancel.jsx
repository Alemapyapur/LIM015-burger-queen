import React, { useState } from 'react'
import Modal from "./modalOrderConfirm"
import "../../styles/menu/modalCancel.css"


const ModalCancel = ({ setName, setTable, setPedido}) => {
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active)
    }

    const cancelOrders = () => {
      setPedido([]);
      setName('');
      setTable('');
    }


    return (
        <>

            <button className="btn-order-red" onClick={toggle}>
                CANCELAR
            </button>
            <Modal active={active} toggle={toggle}>
                <h5 className="text-modal">¿Deseas cancelar el pedido?</h5>
                <section className="butons-modal">
                    <button className="buttonCancel" onClick={toggle}>Cancelar</button>
                    <button className="buttonAccept" onClick={cancelOrders}>Aceptar</button>
                </section>
            </Modal>
        </>
    )
}

export default ModalCancel;

