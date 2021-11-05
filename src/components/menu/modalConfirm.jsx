import React, { useState } from 'react'
import Modal from "./modalOrderConfirm"
import "../../styles/menu/modalCancel.css"
import SendOrder from '../../fb-function';


const ModalConfirm = ({ name, table, setData, totalOrder, pedido, setName, setTable, setPedido }) => {
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
                    <button className="buttonCancel" onClick={toggle}>Cancelar</button>
                    <SendOrder name={name} setData={setData} table={table} totalOrder={totalOrder} pedido={pedido} setName={setName} setTable={setTable} setPedido={setPedido} toggle={toggle} />
                </section>
            </Modal>
        </>
    )
}

export default ModalConfirm;