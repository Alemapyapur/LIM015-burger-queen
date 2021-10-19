import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'


function ModalOrderConfirm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      ENVIAR A LA COCINA
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Orden de Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Esta seguro de confirmar el pedido.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary">Confirmar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalOrderConfirm;