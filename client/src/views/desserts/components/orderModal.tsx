import React from 'react'
// styles
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { Check } from 'react-feather';
import styled from 'styled-components'
// formik
import { Formik, Field } from 'formik';
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
                    <Formik 
                        initialValues={{ name: '', email: '', quantity:'', designType:'', extraNotes:'' }} 
                        onSubmit={(data, { setSubmitting }) => {
                            setSubmitting(true);
                            // make async call
                            console.log(data);

                            setSubmitting(false);
                        

                     }}
                    >
                        {({ values, isSubmitting, handleSubmit })=>(
                        <Form onSubmit={handleSubmit}>
                            {/* name */}
                            <Form.Group as={Row} controlId="formPlaintextName">
                                <Form.Label column sm="2">
                                    Name
                                </Form.Label>
                                <Col sm="10">
                                    <Field 
                                        name="name"
                                        type="input"
                                        as={Form.Control}
                                    />
                                </Col>
                            </Form.Group>
                            {/* email */}
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2" >
                                    Email
                                </Form.Label>
                                <Col sm="10">
                                    <Field 
                                        name="email"
                                        type="input"
                                        as={Form.Control}
                                    />
                                </Col>
                            </Form.Group>
                             {/* Num of products */} 
                            <Form.Group as={Row} controlId="formPlaintextQuantity">
                                <Form.Label column sm="2" >
                                    Quantity
                                </Form.Label>
                                <Col sm="10">
                                    <Field
                                        name="quantity"
                                        type="number"
                                        as={Form.Control}
                                    />
                                </Col>
                            </Form.Group>
                             {/* Design type */} 
                             <Form.Group as={Row} controlId="formPlaintextDesign">
                                <Form.Label column sm="2" >
                                    Design type
                                </Form.Label>
                                <Col sm="10">
                                    <Field 
                                        placeholder={'Example: I want a Doraemon design!'}
                                        name="designType"
                                        type="input"
                                        as={Form.Control}
                                    />
                                </Col>
                            </Form.Group>
                            {/* Extra Notes */} 
                            <Form.Group as={Row} controlId="formPlaintextExtra">
                                <Form.Label column sm="2" >
                                    Extra Notes
                                </Form.Label>
                                <Col sm="10">
                                    <Field 
                                        placeholder={'Extra information you would like to tell us'}
                                        name="extraNotes"
                                        type="text"
                                        as={Form.Control}
                                    />
                                </Col>
                            </Form.Group>

                           
                            <MySubmitButton
                                disabled={isSubmitting}
                                type="submit"
                                block
                                size="lg"
                                variant="primary"
                                onClick={handleShowFormModal}
                            >
                <Check color="#FFF" size={23} /> SUBMIT ORDER
                </MySubmitButton>
                <pre>{JSON.stringify(values, null, 2)}</pre>
                        </Form>
                    )}</Formik>
                </Modal.Body>
            </Modal>
    )
}

const MySubmitButton = styled(Button)`
    color: #FFF;
    :hover {
        color: #FFF;
    } 
`;
