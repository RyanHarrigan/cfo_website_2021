/** @jsxImportSource @emotion/react */
import {Container, Nav, Navbar} from "react-bootstrap";
import React, {useState} from "react";
import {LogoStyled, NavbarToggleStyled, NavStyled, NavLinkStyles, NavbarStyled} from './header-nav.styles';
import {ScrollingLink} from '../../utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from "@emotion/styled";

const Toggle = ({ariaControls}: {ariaControls: string}) => {
    const [isToggled, setIsToggled] = useState(false);

    const color = 'var(--bs-white)';

    return <NavbarToggleStyled color={color} onClick={() => setIsToggled(!isToggled)} aria-controls={ariaControls} >
        <FontAwesomeIcon icon={faBars} color={color} />
    </NavbarToggleStyled>
}

const ImageStyled = styled.img`
  width: 1.5em;
  height: 1.5em;
`;

const ExternalLink = styled(Nav.Link)`
  text-decoration: underline;
`;

export const HeaderNavComponent = () => {
    const [activeKey, setActiveKey] = useState('home');

    return <NavbarStyled sticky="top" bg="primary" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <LogoStyled
                    alt="Code for Orlando logo - an outline of an orange fruit with html bracket symbols inside"
                    src="/logo.svg"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Toggle ariaControls={'responsive-navbar-nav'} />
            <Navbar.Collapse id="responsive-navbar-nav">
                <NavStyled
                    className="m-auto"
                    activeKey={activeKey}
                    onSelect={(selectedKey) => setActiveKey((selectedKey ?? '') as string)}
                    justify
                >
                    <Nav.Item>
                        <ScrollingLink cssStyles={NavLinkStyles} toAnchor={'home'}>Home</ScrollingLink>
                    </Nav.Item>
                    <Nav.Item>
                        <ScrollingLink cssStyles={NavLinkStyles} toAnchor={'events'}>Events</ScrollingLink>
                    </Nav.Item>
                    <Nav.Item>
                        <ScrollingLink cssStyles={NavLinkStyles} toAnchor={'about'}>About</ScrollingLink>
                    </Nav.Item>
                    <Nav.Item>
                        <ScrollingLink cssStyles={NavLinkStyles} toAnchor={'contact'}>Contact</ScrollingLink>
                    </Nav.Item>
                    <Nav.Item>
                        <ExternalLink
                            className={'external d-flex justify-content-center'}
                            css={NavLinkStyles}
                            href={'https://github.com/cforlando/codeofconduct'}
                            target={'_blank'}
                        >
                            <span>Conduct</span>
                            {/*<ImageStyled className={'px-1'} src={'/external-link.svg'} />*/}
                        </ExternalLink>
                    </Nav.Item>
                </NavStyled>
            </Navbar.Collapse>
        </Container>
    </NavbarStyled>;
}
