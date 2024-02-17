import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RestView() {

    const {id} = useParams();
    const allRestaurant = useSelector(state =>
        state.restaurantSlice.allRestaurant
    )
    const selectedRestaurant = allRestaurant?.filter(item =>
        item.id == id
    )
    console.log(selectedRestaurant);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Row className='mt-5 mb-5'>
                <Col md={1}>

                </Col>

                <Col md={3}>
                    <img
                        width={"100%"} className='rounded'
                        src={selectedRestaurant[0]?.photograph} alt="" />
                </Col>

                <Col md={7} className='px-5' >
                    <hr />
                    <h4 className='text-center'>
                        <span style={{ color: "hotpink" }}>Restaurant</span> Details
                    </h4>
                    <hr />
                    <ListGroup>
                        <ListGroup.Item className='text-center p-3 fw-bold' > {selectedRestaurant[0].name} </ListGroup.Item>
                        <ListGroup.Item >Neighborhood : &nbsp; <span className='text-primary'> {selectedRestaurant[0].neighborhood} </span> </ListGroup.Item>
                        <ListGroup.Item >Cuisine Type : &nbsp; <span className='text-primary'> {selectedRestaurant[0].cuisine_type} </span> </ListGroup.Item>
                        <ListGroup.Item >Address : &nbsp; <span className='text-primary'> {selectedRestaurant[0].address} </span> </ListGroup.Item>
                        <ListGroup.Item className='p-3 text-center mb-2' >
                            <button className='btn rounded shadow bg-light' style={{ color: "hotpink" }} onClick={handleShow} >
                                Operating Hours
                            </button>

                            <RestReview selectedRestaurant = {selectedRestaurant[0]} />

                        </ListGroup.Item>

                    </ListGroup>
                </Col>

                <Col md={1}>

                </Col>
            </Row>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>Monday : <span className='text-warning ms-3'> {selectedRestaurant[0].operating_hours.Monday} </span> </ListGroup.Item>
                        <ListGroup.Item>Tuesday : <span className='text-warning ms-3'> {selectedRestaurant[0].operating_hours.Tuesday} </span> </ListGroup.Item>
                        <ListGroup.Item>Wednesday : <span className='text-warning ms-3'> {selectedRestaurant[0].operating_hours.Wednesday} </span> </ListGroup.Item>
                        <ListGroup.Item>Thursday : <span className='text-warning ms-3'> {selectedRestaurant[0].operating_hours.Thursday} </span> </ListGroup.Item>
                        <ListGroup.Item>Friday : <span className='text-warning ms-3'> {selectedRestaurant[0].operating_hours.Friday} </span> </ListGroup.Item>
                        <ListGroup.Item>Saturday : <span className='text-warning ms-3'> {selectedRestaurant[0].operating_hours.Saturday} </span> </ListGroup.Item>
                        <ListGroup.Item>Sunday : <span className='text-warning ms-3'> {selectedRestaurant[0].operating_hours.Sunday} </span> </ListGroup.Item>
                    </ListGroup>
                </Modal.Body>

            </Modal>



        </>
    )
}

export default RestView;