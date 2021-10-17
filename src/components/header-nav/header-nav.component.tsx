import {Container, Nav, Navbar} from "react-bootstrap";
import React, {useState} from "react";
import {LogoStyled, NavbarStyled, NavStyled, NavLinkStyles} from './header-nav.styles';

export const HeaderNavComponent = () => {
    const [activeKey, setActiveKey] = useState('home');

    return <NavbarStyled bg="primary" expand="md">
        <Container>
            <Navbar.Brand href="#home">
                <LogoStyled
                    alt="Code for Orlando logo - an outline of an orange fruit with html bracket symbols inside"
                    src="/logo.svg"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <NavStyled
                className="m-auto"
                activeKey={activeKey}
                onSelect={(selectedKey) => setActiveKey((selectedKey ?? '') as string)}
                justify
            >
                <Nav.Item>
                    <Nav.Link styles={NavLinkStyles} eventKey={'home'}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link styles={NavLinkStyles} eventKey={'events'}>Events</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link styles={NavLinkStyles} eventKey={'about'}>About</Nav.Link>
                </Nav.Item>
            </NavStyled>
        </Container>
    </NavbarStyled>;
}
