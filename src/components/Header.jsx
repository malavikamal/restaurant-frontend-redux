import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurantSlice';
import { useDispatch } from 'react-redux';

function Header() {

    const dispatch = useDispatch();

    return (
        <>

            <Link to={'/'} style={{ textDecoration: "none" }} >

                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <img height={"50px"} width={"100px"}
                            src="https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg"
                            alt="" />
                        <Navbar.Brand href="#home">Gourmet</Navbar.Brand>
                        <input 
                        onChange={(e) => dispatch(search(e.target.value))}
                        type="text" placeholder='searchByNeighbourhood' className='form-control w-25' />

                    </Container>
                </Navbar>

            </Link>

        </>
    )
}

export default Header;