import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Check } from 'react-feather';

interface OrderModalProps {
    showFormModal: boolean;
    handleShowFormModal: () => void;
}

export const OrderModal: React.FC<OrderModalProps>  = ({ showFormModal, handleShowFormModal }) => {

    return (
        <Modal size="lg" show={showFormModal} onHide={handleShowFormModal}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button block size="lg" variant="primary" onClick={handleShowFormModal}>
                <Check color="#FFF" size={23} /> SUBMIT ORDER
                </Button>
                </Modal.Footer>
            </Modal>
    )
}
