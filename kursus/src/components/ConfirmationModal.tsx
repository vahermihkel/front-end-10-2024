import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export interface ConfirmationModalInterface { // siin määran, mida ma selle modali
  handleShow: (item: any) => void,   // kaudu käima saan välistel failides tõmmata
  handleClose: () => void
}

interface ConfirmationModalPropsInterface { // siin määran ära, mida ma sisse võtan
  onConfirmation: (item: any) => void           // props abil
}

const ConfirmationModal = forwardRef((props: ConfirmationModalPropsInterface, ref) => {
  const [show, setShow] = useState(false);
  const toBeDeletedRef = useRef({});

  useImperativeHandle(ref, () => ({
    handleShow: handleShow,
    handleClose: handleClose
  }))

  const handleClose = () => {
    setShow(false);
    toBeDeletedRef.current = {};
};

const handleShow = (product: any) => {
    setShow(true);
    toBeDeletedRef.current = product;
};

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>You are about to delete a product</Modal.Title>
        </Modal.Header>
        <Modal.Body>This product can't be restored! Are you sure?</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Cancel
        </Button>
        <Button variant="primary" onClick={() => props.onConfirmation(toBeDeletedRef.current)}>
            Yes, delete
        </Button>
        </Modal.Footer>
    </Modal>
  )
})

export default ConfirmationModal