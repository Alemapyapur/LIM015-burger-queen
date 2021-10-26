import React, { useState } from 'react'
import Modal from "./modalOrderConfirm"


const ModalOrderCancel = () => {
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active)
    }

    return (
        <>
            <button  onClick={toggle}>
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

export default ModalOrderCancel;



// import React, { useState } from 'react'
// import { Button, Modal } from 'react-bootstrap'


// function ModalOrderCancel() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         CANCELAR
//       </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Cancelando Pedido</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Esta seguro de cancelar el pedido.
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancelar
//           </Button>
//           <Button variant="primary">Confirmar</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default ModalOrderCancel;