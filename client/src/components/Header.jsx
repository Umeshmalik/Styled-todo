import React from 'react';
import { Container, Image, StylesHeader } from '../styles/Header';
import Sun from "../assets/icon-sun.svg"

const Header = () => {
    return (
        <Container>
            <StylesHeader>T O D O</StylesHeader>
            <Image src={Sun} />
        </Container>
    )
}

export default Header