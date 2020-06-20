import React from 'react'
// styles
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { Check } from 'react-feather';
// formik
import { Formik } from 'formik';
interface OrderModalProps {
    showFormModal: boolean;
    handleShowFormModal: () => void;
}

export const OrderModal: React.FC<OrderModalProps>  = ({ showFormModal, handleShowFormModal }) => {

    return (
        <Modal size="lg" show={showFormModal} onHide={handleShowFormModal}>
                <Modal.Header closeButton>
                <Modal.Title>Make your order now</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik initialValues={{ email: 'yolo@yolo' }} onSubmit={(data) => {
                            console.log(data)
                    }}>{({ values, handleChange, handleBlur, handleSubmit })=>(
                        <Form onSubmit={handleSubmit}>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Email
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control 
                                        name="email"
                                        value={values.email} 
                                        onChange={handleChange} 
                                         
                                
                                        defaultValue="email@example.com" 
                                    />
                                </Col>
                            </Form.Group>
                        </Form>
                    )}</Formik>
                </Modal.Body>
                <Modal.Footer>
                <Button block size="lg" variant="primary" onClick={handleShowFormModal}>
                <Check color="#FFF" size={23} /> SUBMIT ORDER
                </Button>
                </Modal.Footer>
            </Modal>
    )
}
